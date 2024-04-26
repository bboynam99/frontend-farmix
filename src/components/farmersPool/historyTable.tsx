import { Box, Flex, Stack, Text } from "@chakra-ui/react"

import { farmersHistoryItem } from "@/mocks/mockData"

import HistoryTableItem from "./historyTableItem"

const HistoryTable = () => {
  return (
    <Box>
      <Stack direction={["column", "row"]} spacing={2} px={6} py={4}>
        <Flex flexBasis={"14.28%"}>
          <Text>Symbol</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Created</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Quantity</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Notional value</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Price</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Fee</Text>
        </Flex>
        <Flex flexBasis={"14.28%"}>
          <Text>Status</Text>
        </Flex>
      </Stack>
      <Flex flexDir={"column"}>
        {farmersHistoryItem.map((item) => (
          <HistoryTableItem item={item} />
        ))}
      </Flex>
    </Box>
  )
}

export default HistoryTable
