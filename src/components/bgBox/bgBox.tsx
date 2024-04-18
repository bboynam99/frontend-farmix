import { Box } from "@chakra-ui/react"

interface BgBoxProps {
  children: React.ReactNode
  py?: string | number
  px?: string | number
  radius?: string
  border?: boolean
}

const BgBox = ({ children, py, px, radius, border }: BgBoxProps) => {
  return (
    <Box
      bg={"secondaryBg"}
      className="bg-box"
      py={py}
      px={px}
      borderRadius={radius}
      border={border ? "1px" : ""}
      borderColor={"borderColor"}
    >
      {children}
    </Box>
  )
}

export default BgBox
