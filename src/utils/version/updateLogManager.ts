// 更新日志管理

interface UpdateLog {
  version: string;
  date: string;
  changes: string[];
  description?: string;
}

class UpdateLogManager {
  private readonly STORAGE_KEY = 'turnip-update-logs';

  // 获取所有更新日志
  getAllLogs(): UpdateLog[] {
    try {
      const logs = localStorage.getItem(this.STORAGE_KEY);
      return logs ? JSON.parse(logs) : [];
    } catch (error) {
      console.warn('Failed to get update logs:', error);
      return [];
    }
  }

  // 添加更新日志
  addLog(log: UpdateLog): void {
    try {
      const logs = this.getAllLogs();
      // 检查是否已存在相同版本的日志
      const existingIndex = logs.findIndex(l => l.version === log.version);
      if (existingIndex >= 0) {
        logs[existingIndex] = log;
      } else {
        logs.unshift(log); // 新日志放在最前面
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    } catch (error) {
      console.warn('Failed to add update log:', error);
    }
  }

  // 获取最新的更新日志
  getLatestLog(): UpdateLog | null {
    const logs = this.getAllLogs();
    return logs.length > 0 ? logs[0] : null;
  }

  // 标记日志为已读
  markAsRead(version: string): void {
    try {
      localStorage.setItem('turnip-last-read-version', version);
    } catch (error) {
      console.warn('Failed to mark log as read:', error);
    }
  }

  // 获取最后阅读的版本
  getLastReadVersion(): string | null {
    try {
      return localStorage.getItem('turnip-last-read-version');
    } catch (error) {
      console.warn('Failed to get last read version:', error);
      return null;
    }
  }

  // 检查是否有未读的更新日志
  hasUnreadLogs(): boolean {
    const latestLog = this.getLatestLog();
    const lastReadVersion = this.getLastReadVersion();
    return latestLog && latestLog.version !== lastReadVersion;
  }
}

export const updateLogManager = new UpdateLogManager();
