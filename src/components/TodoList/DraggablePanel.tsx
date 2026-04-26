import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface DraggablePanelProps {
  initialPosition: { x: number; y: number };
  onPositionChange?: (x: number, y: number) => void;
  onDock?: (position: 'left' | 'right' | 'top') => void;
  onUndock?: () => void;
  docked?: boolean;
  dockPosition?: 'left' | 'right' | 'top' | null;
  collapsed?: boolean;
  onCollapseToggle?: (collapsed: boolean) => void;
  visible?: boolean;
  onVisibleToggle?: (visible: boolean) => void;
  children: React.ReactNode;
  title?: string;
  hasUncompletedTasks?: boolean;
}

const DOCK_THRESHOLD = 50;
const PANEL_WIDTH = 300;
const PANEL_MIN_HEIGHT = 400;
const HANDLE_HEIGHT = 40;
export const PANEL_Z_INDEX = 9999;

export const DraggablePanel: React.FC<DraggablePanelProps> = ({
  initialPosition,
  onPositionChange,
  onDock,
  onUndock,
  docked = false,
  dockPosition = null,
  collapsed = false,
  onCollapseToggle,
  visible = true,
  onVisibleToggle,
  children,
  title = '待办清单',
  hasUncompletedTasks = false,
}) => {
  const { isDark } = useThemeContext();

  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef(initialPosition);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    if (!isInitializedRef.current) {
      setPosition(initialPosition);
      positionRef.current = initialPosition;
      isInitializedRef.current = true;
    }
  }, [initialPosition]);

  const getPanelStyle = (): React.CSSProperties => {
    if (isDragging) {
      return {
        left: position.x,
        top: position.y,
        width: PANEL_WIDTH,
        right: 'auto',
        transform: 'none',
      };
    }

    if (!docked || !dockPosition) {
      return {
        left: position.x,
        top: position.y,
        width: PANEL_WIDTH,
        right: 'auto',
        transform: 'none',
      };
    }

    switch (dockPosition) {
      case 'left':
        return { left: 0, top: position.y, width: PANEL_WIDTH, right: 'auto', transform: 'none' };
      case 'right':
        return { right: 0, top: position.y, width: PANEL_WIDTH, left: 'auto', transform: 'none' };
      case 'top':
        return { left: position.x, top: 0, width: PANEL_WIDTH, right: 'auto', transform: 'none' };
      default:
        return { left: position.x, top: position.y, width: PANEL_WIDTH, right: 'auto', transform: 'none' };
    }
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (collapsed) return;
    e.preventDefault();

    if (docked) {
      onUndock?.();
    }

    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;

    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const currentLeft = rect.left;
    const currentTop = rect.top;
    setPosition({ x: currentLeft, y: currentTop });
    positionRef.current = { x: currentLeft, y: currentTop };
    setIsDragging(true);
  }, [collapsed, docked, onUndock]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!panelRef.current) return;

    const offset = dragOffsetRef.current;
    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    const maxX = window.innerWidth - PANEL_WIDTH;
    const maxY = window.innerHeight - HANDLE_HEIGHT;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    const newPos = { x: newX, y: newY };
    setPosition(newPos);
    positionRef.current = newPos;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    const finalPos = positionRef.current;

    if (finalPos.x <= DOCK_THRESHOLD) {
      onDock?.('left');
    } else if (finalPos.x >= window.innerWidth - PANEL_WIDTH - DOCK_THRESHOLD) {
      onDock?.('right');
    } else if (finalPos.y <= DOCK_THRESHOLD) {
      onDock?.('top');
    } else {
      onUndock?.();
    }

    onPositionChange?.(finalPos.x, finalPos.y);
  }, [onDock, onUndock, onPositionChange]);

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleMouseLeave = () => {
    if (docked && !collapsed) {
      const timer = setTimeout(() => {
        onCollapseToggle?.(true);
      }, 3000);
      setHideTimer(timer);
    }
  };

  const handleMouseEnter = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      setHideTimer(null);
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [hideTimer]);

  if (!visible) return null;

  const panelStyle: React.CSSProperties = {
    position: 'fixed',
    ...getPanelStyle(),
    minHeight: collapsed ? HANDLE_HEIGHT : PANEL_MIN_HEIGHT,
    maxHeight: '80vh',
    background: isDark
      ? designTokens.dark.background
      : designTokens.light.background,
    borderRadius: collapsed
      ? dockPosition === 'right'
        ? '8px 0 0 8px'
        : dockPosition === 'left'
          ? '0 8px 8px 0'
          : '8px 8px 0 0'
      : designTokens.borderRadius.lg,
    boxShadow: designTokens.shadows.lg,
    zIndex: PANEL_Z_INDEX,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'visible',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    opacity: isDragging ? 0.8 : 1,
    transition: isDragging
      ? 'opacity 0.1s ease'
      : 'all 0.3s ease',
    cursor: isDragging ? 'grabbing' : 'default',
    willChange: isDragging ? 'left, top' : 'auto',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
    cursor: collapsed ? 'pointer' : 'grab',
    userSelect: 'none',
    borderBottom: collapsed
      ? 'none'
      : `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: isDark
      ? designTokens.dark.text.primary
      : designTokens.light.text.primary,
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    overflow: 'visible',
    display: collapsed ? 'none' : 'block',
  };

  return (
    <div
      ref={panelRef}
      style={panelStyle}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        style={headerStyle}
        onMouseDown={handleMouseDown}
        onClick={() => {
          if (collapsed) {
            onCollapseToggle?.(false);
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={titleStyle}>{title}</span>
          {hasUncompletedTasks && (
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ff4d4f',
                boxShadow: '0 0 0 2px rgba(255, 77, 79, 0.2)',
              }}
            />
          )}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCollapseToggle?.(!collapsed);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              fontSize: '16px',
              color: isDark ? designTokens.dark.text.secondary : designTokens.light.text.secondary,
            }}
          >
            {collapsed ? '▶' : '▼'}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVisibleToggle?.(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              fontSize: '16px',
              color: isDark ? designTokens.dark.text.secondary : designTokens.light.text.secondary,
            }}
          >
            ×
          </button>
        </div>
      </div>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default DraggablePanel;
