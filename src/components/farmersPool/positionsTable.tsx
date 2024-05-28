import { Box, Flex, Stack, Text } from "@chakra-ui/react"

import { farmersPositions } from "@/mocks/mockData"

import PositionsTableItem from "./positionsTableItem"

const PositionsTable = () => {
  return (
    <Box>
      <Stack direction={["column", "row"]} spacing={2} px={6} py={4} hideBelow={"md"}>
        <Flex flexBasis={"12.5%"}>
          <Text>Symbol</Text>
        </Flex>
        <Flex flexBasis={"12.5%"}>
          <Text>DEX</Text>
        </Flex>
        <Flex flexBasis={"12.5%"}>
          <Text>Entry price</Text>
        </Flex>
        <Flex flexBasis={"12.5%"}>
          <Text>Liquidation</Text>
        </Flex>
        <Flex flexBasis={"12.5%"}>
          <Text>Net value</Text>
        </Flex>
        <Flex flexBasis={"12.5%"}>
          <Text>PNL</Text>
        </Flex>
        <Flex flexBasis={"15%"} flexShrink={0}></Flex>
      </Stack>
      <Flex flexDir={"column"}>
        {farmersPositions.map((item) => (
          <PositionsTableItem key={item.id} item={item} />
        ))}
      </Flex>
    </Box>
  )
}

export default PositionsTable
