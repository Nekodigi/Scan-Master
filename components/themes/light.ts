import { blue, brown, grey, indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { themeCommon } from "./theme";

let black = "#212121";
let gray = "#757575";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    com: themeCommon,
    primary: brown,
    secondary: blue,
    local: {
      bg: "#EEEEEE",
      modal: "F5F5F5",
      paper: "#FFFFFF",
      white: "#FFFFFF",
      black: black,
      gray: gray,
      nekodigi: "linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);",
    },
    text: {
      primary: black,
      secondary: gray,
    },
  },
});
export { lightTheme };
