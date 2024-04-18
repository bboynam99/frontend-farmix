import { Box, Flex, Image, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { IStakeItem } from "./types/IStakeItem"

interface StakingPoolTableItemProps {
  item: IStakeItem
}

const StakingPoolTableItem = ({ item }: StakingPoolTableItemProps) => {
  return (
    <Link to={`/staking/pair/${item.id}`}>
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
          <Box ml={3}>{item.token}</Box>
        </Flex>
        <Flex alignItems={"center"} flexBasis={"16.3%"}>
          {item.apr}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.tvl}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.volume24}
        </Flex>
        <Flex alignItems={"center"} justify={"flex-end"} flexBasis={"16.3%"}>
          {item.liquidity}
        </Flex>
      </Stack>
    </Link>
  )
}

export default StakingPoolTableItem
