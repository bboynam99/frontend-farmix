import { Flex, Text } from "@chakra-ui/react"

import HistoryTable from "@/components/farmersPool/historyTable"

const History = () => {
  return (
    <Flex flexDirection={"column"} alignSelf={"center"}>
      <Flex alignItems={"center"} justify={"space-between"} mb={8} mt={12}>
        <Text fontSize={[24, 36]} fontWeight={700}>
          History
        </Text>
      </Flex>
      <HistoryTable />
    </Flex>
  )
}

export default History
