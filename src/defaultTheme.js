import { createTheme } from "@mui/material";
import "pretendard/dist/web/static/pretendard.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
  },
  palette: {
    background: {
      default: "#FAFAFA",
    },
    primary: {
      main: "#212121",
      light: "#616161",
      dark: "#171717",
      contrastText: "#fff",
    },
    secondary: {
      main: "#607d8b",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          marginTop: "20px",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
