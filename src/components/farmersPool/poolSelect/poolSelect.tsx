import { Box, Flex, Image } from "@chakra-ui/react"
import { ChakraStylesConfig, GroupBase, Props, Select, SelectInstance } from "chakra-react-select"
import { forwardRef, useEffect, useState } from "react"

import { farmersPools } from "@/mocks/mockData"

import { IFarmersPoolRow } from "../types/IFarmersPoolRow"

const PoolSelect = forwardRef<SelectInstance<unknown, boolean, GroupBase<unknown>>, Props>((props, ref) => {
  const [pools, setPools] = useState<
    {
      value: number
      label: JSX.Element
    }[]
  >()
  const chakraStyles: ChakraStylesConfig = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      borderRadius: "12px",
      marginBottom: "24px",
      marginTop: "24px",
      padding: "16px 8px",
      bg: "#FFFFFF"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      bg: "transparent"
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: "8px"
    }),
    indicatorSeparator: () => ({ display: "none" })
  }
  const genOptions = async (pools: IFarmersPoolRow[]) =>
    pools.map((item) => ({
      value: item.id,
      label: (
        <Flex
          justify={"space-between"}
          alignItems={["flex-start", "center"]}
          w={"100%"}
          flexDirection={["column", "row"]}
        >
          <Flex alignItems={"center"} flex={1} shrink={0}>
            <Image src={item.tokenIcon} borderRadius={"99px"} w={8} h={8} />
            <Image src={item.tokenSecondIcon} borderRadius={"99px"} w={8} h={8} ml={-3} />
            <Box ml={3} fontSize={20} fontWeight={600}>
              {item.token}/{item.tokenSecond}
            </Box>
          </Flex>
          <Box fontSize={20} flexShrink={0}>
            {item.dex}
          </Box>
        </Flex>
      )
    }))

  useEffect(() => {
    genOptions(farmersPools).then((res) => setPools(res))
  }, [farmersPools])
  return <Select isSearchable={false} options={pools} chakraStyles={chakraStyles} {...props} ref={ref} />
})

export default PoolSelect
