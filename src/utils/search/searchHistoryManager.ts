// 搜索历史管理

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: number;
  engine: string;
}

class SearchHistoryManager {
  private readonly STORAGE_KEY = 'turnip-search-history';
  private readonly MAX_HISTORY_ITEMS = 20;

  // 获取所有搜索历史
  getAllHistory(): SearchHistoryItem[] {
    try {
      const history = localStorage.getItem(this.STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.warn('Failed to get search history:', error);
      return [];
    }
  }

  // 添加搜索历史
  addHistory(query: string, engine: string): void {
    try {
      const history = this.getAllHistory();

      // 移除重复项
      const filteredHistory = history.filter(
        (item) => item.query !== query || item.engine !== engine,
      );

      // 添加新项
      const newItem: SearchHistoryItem = {
        id: Date.now().toString(),
        query,
        timestamp: Date.now(),
        engine,
      };

      // 限制历史记录数量
      const updatedHistory = [newItem, ...filteredHistory].slice(
        0,
        this.MAX_HISTORY_ITEMS,
      );

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.warn('Failed to add search history:', error);
    }
  }

  // 删除搜索历史
  deleteHistory(id: string): void {
    try {
      const history = this.getAllHistory();
      const updatedHistory = history.filter((item) => item.id !== id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.warn('Failed to delete search history:', error);
    }
  }

  // 清空搜索历史
  clearHistory(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear search history:', error);
    }
  }

  // 获取最近的搜索历史
  getRecentHistory(limit = 5): SearchHistoryItem[] {
    const history = this.getAllHistory();
    return history.slice(0, limit);
  }
}

export const searchHistoryManager = new SearchHistoryManager();
