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
    console.log('\n📦 ====== 应用更新检查 ======');
    
    const currentVersion = await getCurrentVersion();
    if (!currentVersion) {
      console.info('❌ 无法获取版本信息');
      console.log('==========================\n');
      return false;
    }

    // 存储当前版本信息
    const storedVersion = localStorage.getItem('app_version');
    const storedHash = localStorage.getItem('app_hash');

    console.info('📋 当前版本信息:');
    console.info(`   版本号: ${currentVersion.version}`);
    console.info(`   构建时间: ${new Date(currentVersion.buildTime).toLocaleString('zh-CN')}`);
    console.info(`   版本哈希: ${currentVersion.hash}`);
    
    console.info('📁 存储的版本信息:');
    console.info(`   版本号: ${storedVersion || '未设置'}`);
    console.info(`   版本哈希: ${storedHash || '未设置'}`);

    // 如果没有存储的版本信息，或者版本哈希不同，则认为有更新
    if (!storedVersion || storedHash !== currentVersion.hash) {
      console.log('\n🎉 检测到新版本！');
      console.log('🔄 正在更新版本信息...');
      // 更新存储的版本信息
      localStorage.setItem('app_version', currentVersion.version);
      localStorage.setItem('app_hash', currentVersion.hash);
      console.log('✅ 版本信息更新完成');
      console.log('==========================\n');
      return true;
    }

    console.log('\n✅ 当前已是最新版本');
    console.log('==========================\n');
    return false;
  } catch (error) {
    console.log('\n❌ 更新检查失败:');
    console.warn(error);
    console.log('==========================\n');
    return false;
  }
};

// 刷新应用以应用更新
export const refreshApp = (): void => {
  window.location.reload();
};
