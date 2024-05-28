import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import FarmersPoolTableCell from "./farmersPoolTableCell"
import { IFarmersPoolRow } from "./types/IFarmersPoolRow"

interface FarmersPoolTableRowProps {
  item: IFarmersPoolRow
}

const FarmersPoolTableRow = ({ item }: FarmersPoolTableRowProps) => {
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
        alignItems={["stretch", "center"]}
        py={4}
        px={6}
        mb={2}
        spacing={2}
      >
        <FarmersPoolTableCell flexBasis="33.3%">
          <Flex alignItems={"center"} flex={1}>
            <Image src={item.tokenIcon} borderRadius={"99px"} w={8} h={8} />
            <Image src={item.tokenSecondIcon} borderRadius={"99px"} w={8} h={8} ml={-3} />
            <Box ml={3}>
              {item.token}/{item.tokenSecond}
            </Box>
          </Flex>
        </FarmersPoolTableCell>
        <Divider hideFrom={"sm"} />
        <FarmersPoolTableCell text="DEX">{item.dex}</FarmersPoolTableCell>
        <Divider hideFrom={"sm"} />
        <FarmersPoolTableCell text="APR 24h" justify="flex-end">
          {item.apr}
        </FarmersPoolTableCell>
        <Divider hideFrom={"sm"} />
        <FarmersPoolTableCell text="Volume 24h" justify="flex-end">
          {item.volume24}
        </FarmersPoolTableCell>
        <Divider hideFrom={"sm"} />
        <FarmersPoolTableCell text="PNL" justify="flex-end">
          {item.pnl}
        </FarmersPoolTableCell>
      </Stack>
    </Link>
  )
}

export default FarmersPoolTableRow
