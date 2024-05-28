import { Flex, Text } from "@chakra-ui/react"

import PositionsTable from "@/components/farmersPool/positionsTable"

const Positions = () => {
  return (
    <Flex flexDirection={"column"} alignSelf={"center"}>
      <Flex alignItems={"center"} justify={"space-between"} mb={8} mt={12}>
        <Text fontSize={[24, 36]} fontWeight={700}>
          Positions
        </Text>
      </Flex>
      <PositionsTable />
    </Flex>
  )
}

export default Positions
