/**
 * 版本信息工具类
 * 提供项目版本和配置版本的统一管理
 */

import { configVersionManager } from './ConfigVersionManager';

export class VersionUtils {
  /**
   * 获取项目版本（从package.json）
   */
  static getProjectVersion(): string {
    // 在生产环境中，这个信息可以通过构建工具注入
    // 目前返回package.json中的版本
    return '1.0.0';
  }

  /**
   * 获取配置版本信息
   */
  static getConfigVersionInfo(): {
    total: number;
    current: string | null;
    currentName: string;
  } {
    try {
      const allVersions = configVersionManager.getAllVersions();
      const currentVersionId = configVersionManager.getCurrentVersionId();
      
      let currentName = '默认配置';
      if (currentVersionId && allVersions.length > 0) {
        const currentVersion = allVersions.find(v => v.id === currentVersionId);
        currentName = currentVersion ? currentVersion.name : '未知版本';
      }
      
      return {
        total: allVersions.length,
        current: currentVersionId || null,
        currentName
      };
    } catch (error) {
      return {
        total: 0,
        current: null,
        currentName: '获取失败'
      };
    }
  }

  /**
   * 获取版本状态显示文本
   */
  static getVersionStatusText(): string {
    const info = this.getConfigVersionInfo();
    
    if (info.total === 0) {
      return '无版本记录';
    }
    
    return `${info.currentName} (共${info.total}个版本)`;
  }

  /**
   * 获取系统信息摘要
   */
  static getSystemSummary(): {
    projectVersion: string;
    configVersions: number;
    currentConfigVersion: string;
    lastModified: string;
  } {
    const configInfo = this.getConfigVersionInfo();
    
    return {
      projectVersion: this.getProjectVersion(),
      configVersions: configInfo.total,
      currentConfigVersion: configInfo.currentName,
      lastModified: new Date().toISOString()
    };
  }
}

export default VersionUtils;