import { Box, Flex, Stack, Text } from "@chakra-ui/react"

import FarmersPoolTableRow from "./farmersPoolTableRow"
import { IFarmersPoolRow } from "./types/IFarmersPoolRow"

interface FarmersPoolTableProps {
  list: IFarmersPoolRow[]
  onSearch?: (value: string) => void
}

const FarmersPoolTable = ({ list }: FarmersPoolTableProps) => {
  return (
    <Box>
      <Stack hideBelow={"md"} direction={["column", "row"]} spacing={2} px={6} py={4}>
        <Flex flexBasis={"33.3%"}>
          <Text>Pool</Text>
        </Flex>
        <Stack spacing={1} direction={"row"} alignItems={"center"} flexBasis={"16.3%"}>
          <Text>DEX</Text>
        </Stack>
        <Stack spacing={1} direction={"row"} alignItems={"center"} flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>APR</Text>
        </Stack>
        <Flex flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>Volume 24h</Text>
        </Flex>
        <Flex flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>PNL</Text>
        </Flex>
      </Stack>
      <Flex flexDir={"column"}>
        {list.map((item) => (
          <FarmersPoolTableRow key={item.id} item={item}></FarmersPoolTableRow>
        ))}
      </Flex>
    </Box>
  )
}

export default FarmersPoolTable
