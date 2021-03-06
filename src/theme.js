import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// 创建一个主题的实例。
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 16,
      },
    },
  },
});

export default theme;
