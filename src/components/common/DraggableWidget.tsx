import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface DraggableWidgetProps {
  initialPosition: { x: number; y: number };
  onPositionChange?: (x: number, y: number) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  zIndex?: number;
  storageKey?: string;
}

const DRAG_THRESHOLD = 5;

function loadPosition(key: string, fallback: { x: number; y: number }): { x: number; y: number } {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.x === 'number' && typeof parsed.y === 'number') return parsed;
  } catch {
    // ignore
  }
  return fallback;
}

function resolvePosition(pos: { x: number | (() => number); y: number | (() => number) }): { x: number; y: number } {
  return {
    x: typeof pos.x === 'function' ? pos.x() : pos.x,
    y: typeof pos.y === 'function' ? pos.y() : pos.y,
  };
}

export const DraggableWidget: React.FC<DraggableWidgetProps> = ({
  initialPosition,
  onPositionChange,
  children,
  style: customStyle,
  zIndex = 1000,
  storageKey,
}) => {
  const resolvedInitial = resolvePosition(initialPosition);
  const [position, setPosition] = useState(() =>
    storageKey ? loadPosition(storageKey, resolvedInitial) : resolvedInitial
  );
  const [isDragging, setIsDragging] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef(position);
  const dragStartPosRef = useRef<{ x: number; y: number } | null>(null);
  const wasDraggedRef = useRef(false);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(position));
    } catch {
      // ignore
    }
  }, [storageKey, position]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    wasDraggedRef.current = false;

    const rect = widgetRef.current?.getBoundingClientRect();
    if (!rect) return;

    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setPosition({ x: rect.left, y: rect.top });
    positionRef.current = { x: rect.left, y: rect.top };
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!widgetRef.current || !dragStartPosRef.current) return;

    const dx = Math.abs(e.clientX - dragStartPosRef.current.x);
    const dy = Math.abs(e.clientY - dragStartPosRef.current.y);
    if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
      wasDraggedRef.current = true;
    }

    const offset = dragOffsetRef.current;
    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    newX = Math.max(0, Math.min(newX, window.innerWidth - (widgetRef.current?.offsetWidth || 200)));
    newY = Math.max(0, Math.min(newY, window.innerHeight - (widgetRef.current?.offsetHeight || 50)));

    const newPos = { x: newX, y: newY };
    setPosition(newPos);
    positionRef.current = newPos;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStartPosRef.current = null;
    onPositionChange?.(positionRef.current.x, positionRef.current.y);
  }, [onPositionChange]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (wasDraggedRef.current) {
      e.stopPropagation();
      e.preventDefault();
      wasDraggedRef.current = false;
    }
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    zIndex,
    cursor: isDragging ? 'grabbing' : 'grab',
    opacity: isDragging ? 0.85 : 1,
    transition: isDragging ? 'opacity 0.1s ease' : 'all 0.3s ease',
    willChange: isDragging ? 'left, top' : 'auto',
    userSelect: 'none',
    ...customStyle,
  };

  return (
    <div
      ref={widgetRef}
      style={containerStyle}
      onMouseDown={handleMouseDown}
      onClickCapture={handleClick}
    >
      {children}
    </div>
  );
};

export default DraggableWidget;
