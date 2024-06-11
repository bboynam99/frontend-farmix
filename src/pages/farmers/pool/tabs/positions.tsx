import { Flex, Text } from "@chakra-ui/react"

import PositionsTable from "@/components/farmersPool/positions/positionsTable"
import { useTranslation } from "react-i18next"

const Positions = () => {
  const { t } = useTranslation("positions")
  return (
    <Flex flexDirection={"column"} alignSelf={"center"}>
      <Flex alignItems={"center"} justify={"space-between"} mb={[3, 8]} mt={[3, 12]}>
        <Text fontSize={[24, 32, 36]} fontWeight={700}>
          {t("title")}
        </Text>
      </Flex>
      <PositionsTable />
    </Flex>
  )
}

export default Positions
