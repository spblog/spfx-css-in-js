import { stylesheet } from "typestyle";
import { ThemeUtility } from "../../../../Theming/ThemeUtility";

const theme = ThemeUtility.getTheme();

export const styles = stylesheet({
  root: {
    margin: "10px",
  },
  myButton: {
    backgroundColor: theme.palette.themeDark,
    color: "#FFF",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    fontSize: "16px",
    padding: "0 15px",
    cursor: "pointer",
    borderWidth: "0 0 6px 0",
    fontWeight: "bold",
    borderColor: "#4e84c3",
    borderStyle: "solid",
    $nest: {
      "&:hover": {
        backgroundColor: "#328bf9",
      }
    }
  }
});

