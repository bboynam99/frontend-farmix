import { StyleFunctionProps } from "@chakra-ui/react"

export const alertTheme = {
  baseStyle: (props: StyleFunctionProps) => ({
    container: props.colorScheme === "green" && {
      bg: "#66D055",
      borderRadius: "24px"
    },
    title: {
      color: "#FFFFFF"
    },
    description: {
      color: "#FFFFFF"
    }
  }),
  status: {
    success: {
      container: {
        bg: "#66D055"
      },
      title: {
        color: "#FFFFFF"
      },
      description: {
        color: "#FFFFFF"
      }
    }
  }
}
