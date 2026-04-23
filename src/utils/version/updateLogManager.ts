// 更新日志管理

interface UpdateLog {
  version: string;
  date: string;
  changes: string[];
  description?: string;
}

interface UpdateLogsData {
  version: string;
  logs: UpdateLog[];
}

class UpdateLogManager {
  private readonly STORAGE_KEY = 'turnip-update-logs';
  private readonly CACHE_VERSION_KEY = 'turnip-update-logs-version';
  private readonly CACHE_TIMESTAMP_KEY = 'turnip-update-logs-timestamp';
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时缓存

  private logs: UpdateLog[] = [];
  private isLoading = false;

  // 从JSON文件获取更新日志
  async fetchUpdateLogs(): Promise<void> {
    if (this.isLoading) return;
    this.isLoading = true;

    try {
      // 检查缓存是否有效
      const cachedVersion = localStorage.getItem(this.CACHE_VERSION_KEY);
      const cachedTimestamp = localStorage.getItem(this.CACHE_TIMESTAMP_KEY);
      const now = Date.now();

      // 如果缓存未过期，使用缓存数据
      if (cachedVersion && cachedTimestamp && now - parseInt(cachedTimestamp) < this.CACHE_DURATION) {
        const cachedLogs = localStorage.getItem(this.STORAGE_KEY);
        if (cachedLogs) {
          this.logs = JSON.parse(cachedLogs);
          this.isLoading = false;
          return;
        }
      }

      // 从JSON文件获取最新数据
      const response = await fetch('/update-logs.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: UpdateLogsData = await response.json();
      this.logs = data.logs;
      
      // 更新缓存
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.logs));
      localStorage.setItem(this.CACHE_VERSION_KEY, data.version);
      localStorage.setItem(this.CACHE_TIMESTAMP_KEY, now.toString());
      
    } catch (error) {
      console.warn('Failed to fetch update logs:', error);
      // 加载失败时，尝试使用缓存数据
      const cachedLogs = localStorage.getItem(this.STORAGE_KEY);
      if (cachedLogs) {
        this.logs = JSON.parse(cachedLogs);
      }
    } finally {
      this.isLoading = false;
    }
  }

  // 获取所有更新日志
  getAllLogs(): UpdateLog[] {
    return [...this.logs];
  }

  // 获取最新的更新日志
  getLatestLog(): UpdateLog | null {
    return this.logs.length > 0 ? this.logs[0] : null;
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
