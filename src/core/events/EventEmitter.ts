import type { ThemeConfigType } from '@/types';
import type { ThemePreset } from '../theme/ThemeManagerV2';

type EventHandler<T = any> = (data: T) => void;

interface EventSubscription {
  id: symbol;
  handler: EventHandler;
  once: boolean;
}

export class EventEmitter<EventMap extends Record<string, any> = Record<string, any>> {
  private listeners: Map<keyof EventMap, EventSubscription[]> = new Map();

  on<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>): () => void {
    const id = Symbol();
    const subscriptions = this.listeners.get(event) || [];
    subscriptions.push({ id, handler, once: false });
    this.listeners.set(event, subscriptions);

    return () => this.off(event, id);
  }

  once<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>): void {
    const id = Symbol();
    const subscriptions = this.listeners.get(event) || [];
    subscriptions.push({ id, handler, once: true });
    this.listeners.set(event, subscriptions);
  }

  off<K extends keyof EventMap>(event: K, handlerOrId: EventHandler<EventMap[K]> | symbol): void {
    const subscriptions = this.listeners.get(event);
    if (!subscriptions) return;

    if (typeof handlerOrId === 'symbol') {
      const filtered = subscriptions.filter(sub => sub.id !== handlerOrId);
      this.listeners.set(event, filtered);
    } else {
      const filtered = subscriptions.filter(sub => sub.handler !== handlerOrId);
      this.listeners.set(event, filtered);
    }
  }

  emit<K extends keyof EventMap>(event: K, data: EventMap[K]): void {
    const subscriptions = this.listeners.get(event);
    if (!subscriptions) return;

    const toRemove: symbol[] = [];

    subscriptions.forEach(sub => {
      try {
        sub.handler(data);
        if (sub.once) {
          toRemove.push(sub.id);
        }
      } catch (error) {
        console.error(`[EventEmitter] Error in handler for event "${String(event)}":`, error);
      }
    });

    if (toRemove.length > 0) {
      const filtered = subscriptions.filter(sub => !toRemove.includes(sub.id));
      this.listeners.set(event, filtered);
    }
  }

  removeAllListeners<K extends keyof EventMap>(event?: K): void {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
  }

  listenerCount<K extends keyof EventMap>(event: K): number {
    return this.listeners.get(event)?.length || 0;
  }
}

export interface ConfigEvents {
  'config:change': { key: string; value: any; oldValue: any };
  'config:load': { config: Record<string, any> };
  'config:save': { config: Record<string, any> };
  'config:reset': { config: Record<string, any> };
  'config:import': { config: Record<string, any> };
  'config:export': { config: Record<string, any> };
}

export interface ThemeEvents {
  'theme:change': { theme: ThemeConfigType; previousTheme: ThemeConfigType | null };
  'theme:preset:add': { preset: ThemePreset };
  'theme:preset:update': { preset: ThemePreset };
  'theme:preset:delete': { presetId: string };
  'theme:preview': { theme: ThemeConfigType };
}
