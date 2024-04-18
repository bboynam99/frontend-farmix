import tooltipIcon from "@assets/svg/info-fill_16.svg"
import { Box, Flex, Image, Stack, Text, Tooltip } from "@chakra-ui/react"

import StakingPoolTableItem from "./stakingPoolTableItem"
import { IStakeItem } from "./types/IStakeItem"

interface StakingPoolTableProps {
  list: IStakeItem[]
  onSearch?: (value: string) => void
}

const StakingPoolTable = ({ list }: StakingPoolTableProps) => {
  return (
    <Box>
      <Stack direction={["column", "row"]} spacing={2} px={6} py={4}>
        <Flex flexBasis={"33.3%"}>
          <Text>Pool</Text>
        </Flex>
        <Stack
          spacing={1}
          direction={"row"}
          alignItems={"center"}
          flexBasis={"16.3%"}
        >
          <Tooltip
            label="Annual Percentage Rate"
            fontSize="md"
            borderRadius={"md"}
          >
            <Image src={tooltipIcon} w={"16px"} h={"16px"} />
          </Tooltip>
          <Text>APR 24</Text>
        </Stack>
        <Stack
          spacing={1}
          direction={"row"}
          alignItems={"center"}
          flexBasis={"16.3%"}
          justify={"flex-end"}
        >
          <Tooltip label="Total Value Locked" fontSize="md" borderRadius={"md"}>
            <Image src={tooltipIcon} w={"16px"} h={"16px"} />
          </Tooltip>
          <Text>TVL</Text>
        </Stack>
        <Flex flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>Earned</Text>
        </Flex>
        <Flex flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>Staked</Text>
        </Flex>
      </Stack>
      <Flex flexDir={"column"}>
        {list.map((item) => (
          <StakingPoolTableItem
            key={item.id}
            item={item}
          ></StakingPoolTableItem>
        ))}
      </Flex>
    </Box>
  )
}

export default StakingPoolTable
