import { StyleFunctionProps } from "@chakra-ui/react"

import { darkTheme, lightTheme } from "./colors"

export const modalTheme = {
  baseStyle: (props: StyleFunctionProps) => ({
    dialog: {
      bg: props.colorMode === "dark" ? darkTheme.secondaryBg : lightTheme.secondaryBg,
      borderRadius: "24px",

      margin: ["0 16px", "0"]
    }
  }),
  sizes: {
    md: {
      dialog: {
        maxWidth: "576px"
      }
    },
    sm: {
      dialog: {
        maxWidth: "464px"
      }
    }
  }
}
