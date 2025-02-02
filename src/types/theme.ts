// src/types/theme.ts
export interface Theme {
    id: string;
    name: string;
    backgroundImage: string;
    blur: string;
    opacity: number;
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      card: string;
      border: string;
      shadow: string;
      cardBackground: string;
      searchBorder: string;
      searchBackground: string;
      buttonText: string;
      buttonHover: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    typography: {
      titleSize: string;
      subtitleSize: string;
      textSize: string;
      smallSize: string;
    };
  }