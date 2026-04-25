export const designTokens = {
  colors: {
    primary: '#4a90e2',
    primaryHover: '#357abd',
    primaryActive: '#2868a3',
    success: '#52c41a',
    warning: '#fa8c16',
    error: '#ff4d4f',
    info: '#1890ff',
  },

  light: {
    background: 'rgba(255, 255, 255, 0.9)',
    backgroundHover: 'rgba(255, 255, 255, 0.95)',
    backgroundContainer: 'rgba(255, 255, 255, 0.65)',
    text: '#2c3e50',
    textSecondary: '#666666',
    textTertiary: '#999999',
    border: 'rgba(0, 0, 0, 0.1)',
    borderHover: 'rgba(74, 144, 226, 0.2)',
    shadow: 'rgba(0, 0, 0, 0.05)',
  },

  dark: {
    background: 'rgba(0, 0, 0, 0.6)',
    backgroundHover: 'rgba(255, 255, 255, 0.12)',
    backgroundContainer: 'rgba(0, 0, 0, 0.4)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    textTertiary: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(255, 255, 255, 0.1)',
    borderHover: 'rgba(255, 255, 255, 0.2)',
    shadow: 'rgba(255, 255, 255, 0.1)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '50%',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 40px rgba(31, 38, 135, 0.2)',
    primary: '0 4px 16px rgba(74, 144, 226, 0.3)',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

export type DesignTokens = typeof designTokens;
export type ColorPalette = typeof designTokens.colors;
export type Spacing = typeof designTokens.spacing;
export type BorderRadius = typeof designTokens.borderRadius;
export type FontSize = typeof designTokens.fontSize;
export type FontWeight = typeof designTokens.fontWeight;
export type Shadows = typeof designTokens.shadows;
export type Transitions = typeof designTokens.transitions;
export type ZIndex = typeof designTokens.zIndex;
