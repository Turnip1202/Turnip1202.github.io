// 版本检查器，用于检测应用更新

// 版本信息接口
interface VersionInfo {
  version: string;
  buildTime: string;
  hash: string;
}

// 生成随机哈希值
const generateHash = (): string => {
  return Math.random().toString(36).substring(2, 10);
};

// 获取当前版本信息
export const getCurrentVersion = async (): Promise<VersionInfo | null> => {
  try {
    const response = await fetch('/version.json');
    if (!response.ok) {
      throw new Error('Failed to fetch version info');
    }
    return await response.json();
  } catch (error) {
    console.warn('Failed to get current version:', error);
    return null;
  }
};

// 检查是否有更新
export const checkForUpdates = async (): Promise<boolean> => {
  try {
    const currentVersion = await getCurrentVersion();
    if (!currentVersion) {
      return false;
    }

    // 存储当前版本信息
    const storedVersion = localStorage.getItem('app_version');
    const storedHash = localStorage.getItem('app_hash');

    // 如果没有存储的版本信息，或者版本哈希不同，则认为有更新
    if (!storedVersion || storedHash !== currentVersion.hash) {
      // 更新存储的版本信息
      localStorage.setItem('app_version', currentVersion.version);
      localStorage.setItem('app_hash', currentVersion.hash);
      return true;
    }

    return false;
  } catch (error) {
    console.warn('Failed to check for updates:', error);
    return false;
  }
};

// 刷新应用以应用更新
export const refreshApp = (): void => {
  window.location.reload();
};
