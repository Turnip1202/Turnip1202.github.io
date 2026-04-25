// 快捷键管理

interface KeyboardShortcut {
  keys: string[];
  description: string;
  callback: () => void;
  enabled?: boolean;
}

class KeyboardManager {
  private shortcuts: Map<string, KeyboardShortcut> = new Map();
  private isListening = false;

  // 注册快捷键
  registerShortcut(id: string, shortcut: KeyboardShortcut): void {
    this.shortcuts.set(id, shortcut);
  }

  // 移除快捷键
  removeShortcut(id: string): void {
    this.shortcuts.delete(id);
  }

  // 开始监听键盘事件
  startListening(): void {
    if (this.isListening) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // 检查是否在输入框中
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // 构建当前按下的键组合
      const pressedKeys: string[] = [];
      if (e.ctrlKey || e.metaKey) pressedKeys.push('Ctrl');
      if (e.altKey) pressedKeys.push('Alt');
      if (e.shiftKey) pressedKeys.push('Shift');
      if (
        e.key &&
        e.key !== 'Control' &&
        e.key !== 'Meta' &&
        e.key !== 'Alt' &&
        e.key !== 'Shift'
      ) {
        pressedKeys.push(e.key.toUpperCase());
      }

      // 检查是否匹配任何快捷键
      for (const [id, shortcut] of this.shortcuts.entries()) {
        if (
          shortcut.enabled !== false &&
          this.compareKeys(pressedKeys, shortcut.keys)
        ) {
          e.preventDefault();
          e.stopPropagation();
          shortcut.callback();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    this.isListening = true;
  }

  // 停止监听键盘事件
  stopListening(): void {
    // 由于我们没有保存事件监听器的引用，这里简化处理
    this.isListening = false;
  }

  // 比较键组合
  private compareKeys(pressed: string[], shortcut: string[]): boolean {
    if (pressed.length !== shortcut.length) return false;
    return pressed.every((key) => shortcut.includes(key));
  }

  // 获取所有快捷键
  getAllShortcuts(): Map<string, KeyboardShortcut> {
    return new Map(this.shortcuts);
  }
}

export const keyboardManager = new KeyboardManager();
