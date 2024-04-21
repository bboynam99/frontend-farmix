import { CloseButton, extendTheme, StyleFunctionProps } from "@chakra-ui/react"

import { alertTheme } from "./alert"
import { buttonTheme } from "./button"
import { closeButtonTheme } from "./closeButton"
import { darkTheme, lightTheme } from "./colors"
import { inputTheme } from "./input"
import { modalTheme } from "./modal"
import { selectTheme } from "./select"

const theme = extendTheme({
  semanticTokens: {
    colors: {
      secondaryBg: {
        default: lightTheme.secondaryBg,
        _dark: darkTheme.secondaryBg
      },
      text: {
        accent: "#44A3DD",
        secondary: { default: "#646464", _dark: "#BDC8D9" }
      },
      borderColor: {
        default: "#EFEFF5",
        _dark: "#323232"
      },
      hintBg: {
        default: "#E6E8EB",
        _dark: "#5C5C5E"
      }
    }
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1A1A1B" : "#FAFAFA"
      }
    })
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Select: selectTheme,
    Modal: modalTheme,
    Alert: alertTheme,
    CloseButton: closeButtonTheme,
    NumberInput: {
      field: {
        borderRadius: "46px",
        _focus: {
          borderColor: "blue.500"
        }
      }
    },
    Switch: {
      track: {
        bg: "#446FDD"
      }
    },
    Badge: {
      variants: {
        solid: {
          bg: "#44A3DD",
          padding: "4px 8px",
          borderRadius: "8px",
          fontSize: "12px",
          lineHeight: "14px"
        }
      }
    },
    Stat: {
      baseStyle: (props: StyleFunctionProps) => ({
        container: {
          bg:
            props.colorMode === "dark"
              ? darkTheme.secondaryBg
              : lightTheme.secondaryBg,
          borderColor: props.colorMode === "dark" ? "#323232" : "#EFEFF5"
        }
      })
    },
    Link: {
      baseStyle: {
        color: "#446FDD"
      }
    }
  }
})

export default theme
