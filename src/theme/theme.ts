import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

import { COLORS } from "./colors";

const breakpoints = createBreakpoints({
  values: {
    lg: 1200,
    md: 900,
    sm: 600,
    xl: 1536,
    xs: 0,
  },
});

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          "&:hover": {
            backgroundColor: "transparent",
            color: COLORS.accent,
          },
          backgroundColor: COLORS.accent,
          border: `3px solid ${COLORS.accent}`,
          color: COLORS.light,
        },
        outlined: {
          "&:hover": {
            border: `3px solid ${COLORS.accent}`,
          },
          backgroundColor: "transparent",
          border: `3px solid ${COLORS.light}`,
          color: COLORS.light,
        },
        root: {
          borderRadius: "30px",
          fontSize: "18px",
          padding: "10px 20px",
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: COLORS.accent,
          color: COLORS.light,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: COLORS.accent,
          },
          color: COLORS.light,
          fontSize: "48px",
          position: "absolute",
          transition: "color 0.2s ease-in",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: `${COLORS.light}`,
          fontSize: "20px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: `${COLORS.light}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "transparent",
          color: COLORS.light,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          [breakpoints.up("xs")]: {
            fontSize: "16px",
          },
          [breakpoints.up("md")]: {
            fontSize: "23px",
          },
          color: COLORS.light,
          fontSize: "20px",
        },
        h4: {
          fontWeight: 900,
        },
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.accent,
    },
    secondary: {
      main: COLORS.light,
    },
  },
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
  },
});
