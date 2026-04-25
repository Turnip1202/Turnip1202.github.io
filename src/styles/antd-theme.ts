import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { designTokens } from './design-tokens';

export const getAntdThemeConfig = (isDark: boolean): ThemeConfig => {
  const colors = isDark ? designTokens.dark : designTokens.light;

  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: designTokens.colors.primary,
      colorSuccess: designTokens.colors.success,
      colorWarning: designTokens.colors.warning,
      colorError: designTokens.colors.error,
      colorInfo: designTokens.colors.info,
      borderRadius: Number.parseInt(designTokens.borderRadius.sm),
      fontSize: Number.parseInt(designTokens.fontSize.sm),
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      colorBgContainer: colors.background,
      colorText: colors.text,
      colorTextSecondary: colors.textSecondary,
      colorBorder: colors.border,
    },
    components: {
      Card: {
        borderRadiusLG: Number.parseInt(designTokens.borderRadius.lg),
        colorBgContainer: colors.background,
      },
      Button: {
        borderRadius: Number.parseInt(designTokens.borderRadius.sm),
        controlHeight: 40,
        primaryShadow: designTokens.shadows.primary,
      },
      Input: {
        borderRadius: Number.parseInt(designTokens.borderRadius.sm),
        controlHeight: 40,
        colorBgContainer: colors.background,
      },
      Select: {
        borderRadius: Number.parseInt(designTokens.borderRadius.sm),
        controlHeight: 40,
        colorBgContainer: colors.background,
      },
      Modal: {
        borderRadiusLG: Number.parseInt(designTokens.borderRadius.lg),
        contentBg: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.95)',
      },
      Table: {
        borderRadiusLG: Number.parseInt(designTokens.borderRadius.lg),
        headerBg: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)',
      },
      Menu: {
        borderRadiusLG: Number.parseInt(designTokens.borderRadius.md),
      },
      Dropdown: {
        borderRadiusLG: Number.parseInt(designTokens.borderRadius.md),
      },
      FloatButton: {
        borderRadius: Number.parseInt(designTokens.borderRadius.full),
      },
    },
  };
};

export const antdDefaultConfig: ThemeConfig = getAntdThemeConfig(false);

export const antdDarkConfig: ThemeConfig = getAntdThemeConfig(true);
