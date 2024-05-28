export const buttonTheme = {
  baseStyle: {
    bg: "#446FDD",
    color: "#ffffff",
    borderRadius: "46px",
    _disabled: {
      opacity: 0.5,
      pointerEvents: "none"
    }
  },
  sizes: {
    md: {
      minWidth: ["none", "144px"],
      width: ["100%", "auto"],
    },
    sm: {
      height: "36px",
      minWidth: "0"
    }
  },
  variants: {
    big: {
      bg: "#446FDD",
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      color: "#ffffff",
      height: "56px",
      fontSize: "20px"
    },
    outline: {
      bg: "transparent"
    },
    solid: {
      bg: "#446FDD",
      color: "#FFFFFF",
      _hover: {
        bg: "#446FDD",
        opacity: 0.8
      }
    }
  }
}
