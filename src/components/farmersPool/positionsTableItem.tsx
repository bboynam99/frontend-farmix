import { Button, Flex, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { IPosition } from "./types/IPosition"

interface PositionsTableItemProps {
  item: IPosition
}

const PositionsTableItem = ({ item }: PositionsTableItemProps) => {
  return (
    <Link to={`/farmers/pool/${item.id}`} key={item.id}>
      <Stack
        cursor={"pointer"}
        direction={["column", "row"]}
        borderRadius={"12px"}
        borderWidth={"1px"}
        borderColor={"borderColor"}
        background={"secondaryBg"}
        w={"100%"}
        alignItems={"center"}
        py={4}
        px={6}
        mb={2}
        spacing={2}
      >
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.token}/{item.tokenSecond}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.dex}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.entryPrice}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.liquidation}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.netValue}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.pnl}
        </Flex>
        <Flex flexBasis={"15%"}>
          <Button
            size={"sm"}
            fontSize={"12px"}
            flexShrink={0}
            w={"78px"}
            mr={3}
          >
            Add
          </Button>
          <Button
            size={"sm"}
            fontSize={"12px"}
            flexShrink={0}
            w={"120px"}
            variant={"outline"}
          >
            Close position
          </Button>
        </Flex>
      </Stack>
    </Link>
  )
}

export default PositionsTableItem
