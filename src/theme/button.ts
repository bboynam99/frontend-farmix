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
      minWidth: "144px",
      bg: "transparent"
    },
    solid: {
      bg: "#446FDD",
      minWidth: "144px",
      color: "#FFFFFF",
      _hover: {
        bg: "#446FDD",
        opacity: 0.8
      }
    }
  }
}
