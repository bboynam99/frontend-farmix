import tooltipIcon from "@assets/svg/info-fill_16.svg"
import { Box, Flex, Image, Stack, Text, Tooltip } from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useTranslation } from "react-i18next"

import StakingPoolTableRow from "./stakingPoolTableRow"
import { IStakingPool } from "./types/IStakingPool"

interface StakingPoolTableProps {
  list: IStakingPool[]
  onSearch?: (value: string) => void
}

const StakingPoolTable = observer(({ list }: StakingPoolTableProps) => {
  const { t } = useTranslation("stakingPool")

  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        spacing={2}
        px={6}
        py={4}
        hideBelow={"sm"}
      >
        <Flex flexBasis={"33.3%"}>
          <Text>{t("table.pool")}</Text>
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
          <Text whiteSpace={"nowrap"}>APR 24</Text>
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
          <Text>{t("table.earned")}</Text>
        </Flex>
        <Flex flexBasis={"16.3%"} justify={"flex-end"}>
          <Text>{t("table.staked")}</Text>
        </Flex>
      </Stack>
      <Flex flexDir={"column"}>
        {!!list.length &&
          list.map((item) => (
            <StakingPoolTableRow key={item.descriptor.id} item={item} />
          ))}
      </Flex>
    </Box>
  )
})

export default StakingPoolTable
