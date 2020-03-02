import { createTheme, ITheme } from "office-ui-fabric-react/lib/Styling";

export class ThemeUtility {

  private static _theme: ITheme;

  public static getTheme(): ITheme {
    if (!ThemeUtility._theme) {
      const { theme } = (window as any).__themeState__;
      ThemeUtility._theme = createTheme({
        palette: theme,
        semanticColors: theme,
        fonts: theme,
      });
    }
    return ThemeUtility._theme;
  }
}
