import { extendTheme } from "@chakra-ui/react";

//全体にわたる背景の色を指定
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.600"
      }
    }
  }
});
export default theme;
