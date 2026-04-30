// import { createTheme, type PaletteMode, type Theme } from "@mui/material";

// export const makeTheme = (
//   mode: PaletteMode | undefined,
//   primary: string,
//   secondary: string,
//   bgDefault: string,
//   bgPaper: string,
//   textPrimary: string,
//   textSecondary: string,
//   gridColor: string,
// ): Theme =>
//   createTheme({
//     palette: {
//       mode,
//       primary: { main: primary },
//       secondary: { main: secondary },
//       background: { default: bgDefault, paper: bgPaper },
//       text: { primary: textPrimary, secondary: textSecondary },
//     },
//     typography: {
//       fontFamily: "'Outfit', sans-serif",
//       h1: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" },
//       h2: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" },
//       h3: { fontFamily: "'Outfit', sans-serif" },
//     },
//     shape: { borderRadius: 14 },
//     components: {
//       MuiCssBaseline: {
//         styleOverrides: {
//           body: {
//             backgroundImage: `radial-gradient(ellipse 80% 60% at 50% -10%, ${primary}20, transparent), linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
//             backgroundSize: "100%, 64px 64px, 64px 64px",
//           },
//         },
//       },
//       MuiAppBar: {
//         styleOverrides: {
//           root: {
//             background:
//               mode === "dark" ? "rgba(4,6,12,0.75)" : "rgba(255,253,250,0.82)",
//             backdropFilter: "blur(18px)",
//             borderBottom: `1px solid ${primary}22`,
//             boxShadow: "none",
//             color: textPrimary,
//           },
//         },
//       },
//       MuiCard: {
//         styleOverrides: {
//           root: { border: `1px solid ${primary}20`, boxShadow: "none" },
//         },
//       },
//       MuiButton: {
//         styleOverrides: {
//           root: { textTransform: "none", fontWeight: 600, borderRadius: 10 },
//         },
//       },
//       MuiChip: {
//         styleOverrides: {
//           root: {
//             fontFamily: "'JetBrains Mono', monospace",
//             fontSize: "0.7rem",
//           },
//         },
//       },
//       MuiLinearProgress: {
//         styleOverrides: {
//           root: { height: 5, borderRadius: 5, background: `${primary}18` },
//           bar: {
//             background: `linear-gradient(90deg, ${primary}, ${secondary})`,
//             boxShadow: `0 0 10px ${primary}70`,
//           },
//         },
//       },
//     },
//   });

// export const THEMES = {
//   cyan: makeTheme(
//     "dark",
//     "#00E5FF",
//     "#FF00E5",
//     "#04060C",
//     "#080F18",
//     "#E8FEFF",
//     "#6BBFCC",
//     "#00E5FF08",
//   ),
//   orange: makeTheme(
//     "light",
//     "#FF4500",
//     "#7C00FF",
//     "#FFFAF7",
//     "#FFFFFF",
//     "#180800",
//     "#7A3520",
//     "#FF450007",
//   ),
// };

// export const THEME_META = {
//   cyan: {
//     label: "Dark",
//     emoji: "🔵",
//     next: "orange",
//     nextLabel: "Switch to Orange Flame",
//   },
//   orange: {
//     label: "Light",
//     emoji: "🟠",
//     next: "cyan",
//     nextLabel: "Switch to Electric Cyan",
//   },
// };

import {
  createTheme,
  type PaletteMode,
  type Theme,
} from "@mui/material/styles";

export type ThemeNameType = "cyan" | "orange";

export type ThemeMeta = {
  label: string;
  emoji: string;
  next: ThemeNameType;
  nextLabel: string;
};

export const makeTheme = (
  mode: PaletteMode,
  primary: string,
  secondary: string,
  bgDefault: string,
  bgPaper: string,
  textPrimary: string,
  textSecondary: string,
  gridColor: string,
): Theme =>
  createTheme({
    palette: {
      mode,
      primary: { main: primary },
      secondary: { main: secondary },
      background: { default: bgDefault, paper: bgPaper },
      text: { primary: textPrimary, secondary: textSecondary },
    },

    typography: {
      fontFamily: "'Outfit', sans-serif",
      h1: {
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: "0.04em",
      },
      h2: {
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: "0.03em",
      },
      h3: {
        fontFamily: "'Outfit', sans-serif",
      },
    },

    shape: { borderRadius: 14 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% -10%, ${primary}20, transparent),
              linear-gradient(${gridColor} 1px, transparent 1px),
              linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
            `,
            backgroundSize: "100%, 64px 64px, 64px 64px",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              mode === "dark" ? "rgba(4,6,12,0.75)" : "rgba(255,253,250,0.82)",
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${primary}22`,
            boxShadow: "none",
            color: textPrimary,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${primary}20`,
            boxShadow: "none",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 10,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
          },
        },
      },

      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 5,
            borderRadius: 5,
            background: `${primary}18`,
          },
          bar: {
            background: `linear-gradient(90deg, ${primary}, ${secondary})`,
            boxShadow: `0 0 10px ${primary}70`,
          },
        },
      },
    },
  });

export const THEMES: Record<ThemeNameType, Theme> = {
  cyan: makeTheme(
    "dark",
    "#00E5FF",
    "#FF00E5",
    "#04060C",
    "#080F18",
    "#E8FEFF",
    "#6BBFCC",
    "#00E5FF08",
  ),
  orange: makeTheme(
    "light",
    "#FF4500",
    "#7C00FF",
    "#FFFAF7",
    "#FFFFFF",
    "#180800",
    "#7A3520",
    "#FF450007",
  ),
};

export const THEME_META: Record<ThemeNameType, ThemeMeta> = {
  cyan: {
    label: "Dark",
    emoji: "🔵",
    next: "orange",
    nextLabel: "Switch to Orange Flame",
  },
  orange: {
    label: "Light",
    emoji: "🟠",
    next: "cyan",
    nextLabel: "Switch to Electric Cyan",
  },
};
