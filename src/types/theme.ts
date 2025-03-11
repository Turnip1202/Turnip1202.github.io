export interface ThemeConfigType {
  id: string;
  name: string;
  backgroundImage: string;
  blur: string;
  opacity: number;
}

export interface IThemeConfig {
  default: ThemeConfigType;
  presets: ThemeConfigType[];
}
