import * as PaletteColorOptions from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/material/styles";
import { string } from "prop-types";
import { blue, indigo } from "@mui/material/colors";

//You can use themeContext if theme is not applied
// PaletteOptions を拡張して、カラーキーワードを追加
declare module "@mui/material/styles" {
  interface PaletteOptions {
    com: {
      white: string;
      whiteOp70: string;
      whiteOp20: string;
      black: string;
      blackOp50: string;
      gray800: string;
      gray400: string;
      gray500Op50: string;
      artifactBg: string;
      dawn: string;
      main: {
        A100: string;
        A200: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        L500: string;
      };
      scale: {
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
      };
    };
    local: {
      bg: string;
      modal: string;
      paper: string;
      black: string;
      white: string;
      gray: string;
      nekodigi: string;
    };
  }

  interface Palette extends PaletteOptions {}
}

export const themeCommon = {
  white: "#FFFFFF",
  whiteOp70: "rgba(255, 255, 255, 0.7);",
  whiteOp20: "rgba(255, 255, 255, 0.2);",
  black: "#000000",
  blackOp50: "rgba(0, 0, 0, 0.5);",
  gray800: "#424242",
  gray400: "#BDBDBD",
  gray500Op50: "rgba(158, 158, 158, 0.5);",
  artifactBg: "linear-gradient(117.46deg, #6D5654 0.71%, #E3AA54 101.54%);",
  dawn: " linear-gradient(156.05deg, #FF0000 -55.32%, #FFB199 111.96%);",
  main: {
    A100: indigo["A100"],
    A200: indigo["A200"],
    200: indigo["200"],
    300: indigo["300"],
    400: indigo["400"],
    500: indigo["500"],
    600: indigo["600"],
    700: indigo["700"],
    L500: blue["500"],
  },
  scale: {
    10: "#8FE646",
    20: "#C2E645",
    30: "#E6D517",
    40: "#E68D17",
    50: "#E66B45",
    60: "#E65370",
  },
};
