import { Box, Flex, Image, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { IFarmersPoolItem } from "./types/IFarmersPoolItem"

interface FarmersPoolTableItemProps {
  item: IFarmersPoolItem
}

const FarmersPoolTableItem = ({ item }: FarmersPoolTableItemProps) => {
  return (
    <Link to={`/farmers/pool/${item.id}`}>
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
        <Flex alignItems={"center"} flexBasis={"33.3%"}>
          <Image src={item.tokenIcon} borderRadius={"99px"} w={8} h={8} />
          <Image src={item.tokenSecondIcon} borderRadius={"99px"} w={8} h={8} ml={-3} />
          <Box ml={3}>{item.token}/{item.tokenSecond}</Box>
        </Flex>
        <Flex alignItems={"center"} flexBasis={"16.3%"}>
          {item.dex}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.apr}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.volume24}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.pnl}
        </Flex>
      </Stack>
    </Link>
  )
}

export default FarmersPoolTableItem
