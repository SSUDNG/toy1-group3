import { createTheme } from "@mui/material";
import "pretendard/dist/web/static/pretendard.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard"].join(","),
    h1: {
      fontSize: 30,
      fontWeight: 500,
      marginBottom: 20,
    },
    body1: {
      fontSize: 16,
      color: "#212121",
    },
    body2: {
      fontSize: 16,
      color: "#616161",
    },
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
          borderRadius: 8,
          width: "100%",
          maxWidth: 150,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #F5F5F5",
        },
      },
    },
  },
});

export default theme;
