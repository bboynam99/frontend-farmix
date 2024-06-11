import { Flex, Text } from "@chakra-ui/react"

const FarmersPoolTableCell = ({
  text,
  children,
  flexBasis = "16.3%",
  justify = "flex-start",
}: {
  text?: string
  children: React.ReactNode
  flexBasis?: string
  justify?: "flex-start" | "flex-end"
  flex?: string
}) => (
  <Flex
    alignItems={["flex-start", "center"]}
    justify={["center", justify]}
    flexBasis={["auto", flexBasis]}
    flexDir={["column", "row"]}
  >
    <Text fontSize={12} hideFrom={"sm"} color={"text.secondary"}>
      {text}
    </Text>
    {children}
  </Flex>
)

export default FarmersPoolTableCell
