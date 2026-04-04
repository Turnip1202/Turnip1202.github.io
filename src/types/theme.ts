export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface ThemeColors {
  primary: RGBAColor;
  background: RGBAColor;
  text: RGBAColor;
  textSecondary: RGBAColor;
  border: RGBAColor;
  accent: RGBAColor;
}

export interface ThemeConfigType {
  id: string;
  name: string;
  backgroundImage: string;
  blur: string;
  opacity: number;
  colors?: ThemeColors;
  isDark?: boolean;
}

export interface IThemeConfig {
  default: ThemeConfigType;
  presets: ThemeConfigType[];
}
