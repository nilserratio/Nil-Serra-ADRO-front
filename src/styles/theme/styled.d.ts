import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quatenary: string;
      quinary: string;
      primaryBackground: string;
      secondaryBackground: string;
    };

    fonts: {
      primary: string;
    };
  }
}
