import { createTheme } from "@mui/material";

export const colors = {
  primary: "#005653",
  black: "#0a0a0a",
  hoverColor: "#007b7b",
  secondary: "#33c2751a",
  accent: "#1E90FF",
  background: "white",
  surface: "#232323",
  text: "#0a0a0a",
  textSecondary: "#9E9E9E",
  error: "#FF4C4C",
  white: "white",
  lightGray: "rgba(0, 0, 0, 0.1)",
  gradient: "linear-gradient(45deg, #00FF9F, #1E90FF)",
  transparent: "#ffffff00",
  inGradient:
    "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4",
  chipShadow: "0px 0px 5px 0px rgba(199,199,199,0.79)",
  shadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.1)",
};

export const FontFamily = {
  Regular: "EuropaRegular !important",
  Bold: "EuropaBold !important",
  Minion: "Minion !important",
};
const EuropaRegular = {
  fontFamily: FontFamily.Regular,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Europa-Regular.ttf') format('ttf')",
};
const Minion = {
  fontFamily: FontFamily.Regular,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Minion.ttf') format('ttf')",
};
let theme = createTheme();
theme = createTheme(theme, {
  MuiCssBaseline: {
    "@global": {
      "@font-face": [Minion],
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    accent: {
      main: colors.accent,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          display: "block",
          transition: "0.5s",
          fontFamily: "Minion !important",
          letterSpacing: "0.6px",
          // color: colors.text,
          overflow: "hidden",
          fontWeight: 400,
          fontSize: 14,
          "@media (max-width: 768px)": {
            fontSize: 12,
          },
        },
        h1: {
          fontSize: 50,
          fontWeight: 700,
          fontFamily: "Minion !important",
          "@media (max-width: 768px)": {
            fontSize: "36px !important",
          },
        },
        h3: {
          fontSize: 40,
          fontWeight: 700,
          fontFamily: "Minion !important",
          "@media (max-width: 768px)": {
            fontSize: "26px !important",
          },
        },
        title: {
          fontSize: 32,
          fontWeight: 700,
          fontFamily: "Minion !important",
          "@media (max-width: 768px)": {
            fontSize: "18px !important",
          },
        },
        subText: {
          fontWeight: "500 !important",
          fontFamily: "Minion !important",
          fontSize: 16,
          "@media (max-width: 768px)": {
            fontSize: "14px !important",
          },
        },
        subTitle: {
          fontWeight: "700 !important",
          fontFamily: "Minion !important",
          fontSize: 18,
        },
        head: {
          fontWeight: "700 !important",
          fontFamily: "Minion !important",
          fontSize: 26,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primary,
          transition: "500ms",
          fontFamily: `EuropaRegular !important`,
          // "&:hover": {
          //   backgroundColor: colors.white,
          //   color: colors.white,
          // },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: "transparent",
              color: `${colors.primary} !important`,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.primary,
          backgroundColor: colors.white,
          transition: "all 300ms ease",
          fontFamily: `Minion !important`,
          fontWeight: 700,
          fontSize: 14,
          position: "relative",
          overflow: "hidden",
          padding: "10px",
          borderRadius: 8,
          zIndex: 1,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        containedPrimary: {
          color: colors.primary,
          backgroundColor: colors.secondary,
          zIndex: 1,
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: "51%",
            height: "100%",
            backgroundColor: colors.hoverColor,
            transition: "transform 300ms ease",
            zIndex: -1,
          },
          "&::before": {
            left: 0,
            transform: "translateX(-102%)",
          },
          "&::after": {
            right: 0,
            transform: "translateX(102%)",
          },
          "&:hover": {
            color: colors.white,
            "&::before": {
              transform: "translateX(0)",
            },
            "&::after": {
              transform: "translateX(0)",
            },
          },
          // "@media (hover: none)": {
          //   "&:hover": {
          //     backgroundColor: "transparent",
          //     color: `${colors.primary} !important`,
          //     "&::before, &::after": {
          //       transform: "translateX(-102%)",
          //     },
          //   },
          // },
        },
        secondary: {
          color: colors.primary,
          backgroundColor: colors.white,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: colors.hoverColor,
            transform: "scaleX(0)",
            transformOrigin: "right",
            transition: "transform 500ms ease",
            zIndex: -1,
          },
          "&:hover": {
            color: colors.white,
            "&::before": {
              transform: "scaleX(1)",
              transformOrigin: "left",
            },
          },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: "transparent",
              color: `${colors.primary} !important`,
              "&::before": {
                transform: "scaleX(0)",
              },
            },
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: `Minion`,
          fontWeight: "600",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: "Minion",
          fontSize: 14,
        },
        root: {
          borderRadius: "8px",
          "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
            {
              appearance: "none",
              margin: 0,
            },
        },
        notchedOutline: {
          borderColor: colors.borderColor,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "4px 0px",
          fontSize: 12,
          fontFamily: "Minion",
          textTransform: "uppercase",
          height: "auto",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          padding: 0,
          margin: 0,
          fontFamily: "Minion",
        },
      },
    },
  },
});

export default theme;
