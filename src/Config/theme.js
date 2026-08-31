import { createTheme } from "@mui/material";

export const colors = {
  primary: "#005653",
  black: "#0a0a0a",
  hoverColor: "#007b7b",
  secondary: "#33c2751a",
  accent: "#1E90FF",
  background: "white",
  input: "#ffffff00",
  text: "#0a0a0a",
  textSecondary: "#9E9E9E",
  white: "#FFFFFF",
  transparent: "#ffffff00",
  chipShadow: "0px 0px 5px 0px rgba(199,199,199,0.79)",
  shadow: "0px 10px 30px -12px rgba(0, 86, 83, 0.25)",
  headerText: "#005653",
  // --- modern polish tokens ---
  gradient: "linear-gradient(120deg, #005653 0%, #00a19d 100%)",
  glow: "rgba(0, 86, 83, 0.35)",
  surface: "#ffffff",
  surfaceAlt: "#f2f8f7",
  glassBg: "rgba(255, 255, 255, 0.72)",
  glassBorder: "rgba(0, 86, 83, 0.12)",
  heroGlow1: "rgba(0, 161, 157, 0.30)",
  heroGlow2: "rgba(0, 86, 83, 0.22)",
  heroGlow3: "rgba(59, 130, 246, 0.14)",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

export const darkColors = {
  // --- Aurora Dark identity ---
  primary: "#0f1b1f", // deep teal-slate
  black: "#0a0a0a",
  hoverColor: "#16323a",
  secondary: "#122227",
  accent: "#22d3ee", // cyan accent
  background: "#070d10", // near-black teal base
  input: "#F9F9F9",
  text: "#dce8e6",
  textSecondary: "#89a19f",
  white: "#FFFFFF",
  transparent: "#00000000",
  chipShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.79)",
  shadow: "0px 18px 40px -18px rgba(0, 0, 0, 0.75)",
  headerText: "#FFFFFF",
  borderColor: "#1c2b30",
  // --- modern polish tokens (aurora teal -> cyan) ---
  gradient: "linear-gradient(120deg, #2dd4bf 0%, #22d3ee 100%)",
  glow: "rgba(45, 212, 191, 0.38)",
  surface: "#0f191d",
  surfaceAlt: "#0b1417",
  glassBg: "rgba(255, 255, 255, 0.045)",
  glassBorder: "rgba(255, 255, 255, 0.10)",
  heroGlow1: "rgba(34, 211, 238, 0.30)", // cyan
  heroGlow2: "rgba(45, 212, 191, 0.26)", // teal
  heroGlow3: "rgba(59, 130, 246, 0.20)", // blue
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

export const FontFamily = {
  Regular: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
  Bold: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
  Mono: "'JetBrains Mono', monospace !important",
};

const theme = (themeData) =>
  createTheme({
    typography: {
      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    palette: {
      primary: {
        main: themeData.primary,
      },
      secondary: {
        main: themeData.secondary,
      },
      accent: {
        main: themeData.accent,
      },
      background: {
        default: themeData.background,
      },
      text: {
        primary: themeData.text,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            display: "block",
            transition: "0.3s ease",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
            letterSpacing: "-0.01em",
            color: themeData.text,
            fontWeight: 400,
            fontSize: 14.5,
            "@media (max-width: 768px)": {
              fontSize: 13.5,
            },
          },
          h1: {
            fontSize: "clamp(34px, 5vw, 54px)",
            fontWeight: "800 !important",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
          },
          h3: {
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: "700 !important",
            letterSpacing: "-0.02em",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
          },
          title: {
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: "700 !important",
            letterSpacing: "-0.02em",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
          },
          subText: {
            fontWeight: "400 !important",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
            fontSize: 15.5,
            lineHeight: 1.65,
            color: themeData.textSecondary,
            "@media (max-width: 768px)": {
              fontSize: 14,
            },
          },
          subTitle: {
            fontWeight: "600 !important",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
            fontSize: 17,
            letterSpacing: "-0.01em",
          },
          head: {
            fontWeight: "700 !important",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
            fontSize: 24,
            letterSpacing: "-0.02em",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: themeData.primary,
            transition: "300ms",
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: themeData.primary,
            backgroundColor: themeData.white,
            transition: "all 250ms ease",
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important",
            fontWeight: 700,
            fontSize: 13.5,
            letterSpacing: "0.01em",
            position: "relative",
            overflow: "hidden",
            padding: "10px 20px",
            borderRadius: 10,
            zIndex: 1,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          },
          containedPrimary: {
            color: themeData.headerText,
            backgroundColor: themeData.secondary,
            zIndex: 1,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              width: "51%",
              height: "100%",
              backgroundColor: themeData.hoverColor,
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
              color: themeData.white,
              "&::before": {
                transform: "translateX(0)",
              },
              "&::after": {
                transform: "translateX(0)",
              },
            },
          },
          secondary: {
            color: themeData.primary,
            backgroundColor: themeData.white,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: themeData.hoverColor,
              transform: "scaleX(0)",
              transformOrigin: "right",
              transition: "transform 400ms ease",
              zIndex: -1,
            },
            "&:hover": {
              color: themeData.white,
              "&::before": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },
            },
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
            fontWeight: "600",
            letterSpacing: "-0.01em",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
            color: "gray",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
            fontSize: 14,
            "&::placeholder": {
              color: "gray",
              opacity: 1,
            },
          },
          root: {
            borderRadius: "10px",
            "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
              {
                appearance: "none",
                margin: 0,
              },
          },
          notchedOutline: {
            borderColor: themeData.borderColor,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            padding: "4px 2px",
            fontSize: 12,
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
            fontWeight: 600,
            height: "auto",
            borderRadius: "8px",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            padding: 0,
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif !important",
          },
        },
      },
    },
  });

export default theme;
