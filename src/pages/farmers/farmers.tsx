import bannerBg from "@assets/png/banner-bg_1.png"
import tonBanner from "@assets/svg/graphics/ton-banner.svg"
import searchIcon from "@assets/svg/search_20.svg"
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Switch,
  Text
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import Banner from "@/components/banner/banner"
import FarmersPoolTable from "@/components/farmersPool/farmersPoolTable"
import { IDex } from "@/components/farmersPool/types/IDex"
import SelectUi from "@/components/ui/select/selectUi"
import useDebounce from "@/hooks/useDebounce"
import { dexOptions } from "@/mocks/selectOptions"

import { farmersPools } from "../../mocks/mockData"

const Farmers = () => {
  const { t } = useTranslation("farmers")
  const [dex, setDex] = useState<{
    label: string
    value: IDex | "all"
  }>({ label: "", value: "all" })
  const [sorting, setSorting] = useState<{
    label: string
    value: string
  }>({ label: "", value: "" })
  console.log(sorting);
  

  const [searchValue, setSearchValue] = useState<string>("")
  const [filteredList, setFilteredList] = useState(farmersPools)
  const debouncedValue = useDebounce<string>(searchValue, 500)

  useEffect(() => {
    debouncedValue.length
      ? setFilteredList(
          farmersPools.filter((item) =>
            item.token.toLowerCase().includes(debouncedValue.toLowerCase())
          )
        )
      : setFilteredList(farmersPools)
  }, [debouncedValue])

  useEffect(() => {
    dex.value !== "all"
      ? setFilteredList(
          farmersPools.filter((item) => item.dex.includes(dex.value))
        )
      : setFilteredList(farmersPools)
  }, [dex])
  return (
    <Container
      maxW={"container.xl"}
    >
      <Box mt={16}>
        <Banner
          bgImage={bannerBg}
          image={tonBanner}
          buttonLink="#"
          buttonText={t("banner.buttonText")}
          title={t("banner.title")}
          text={t("banner.text")}
        />
      </Box>
      <Text fontSize={36} fontWeight={700} mb={8} mt={"56px"}>
        {t("title")}
      </Text>
      <Flex alignItems={"center"} mb={6}>
        <Flex alignItems={"center"}>
          <InputGroup>
            <InputLeftElement>
              <Image src={searchIcon}></Image>
            </InputLeftElement>
            <Input
              placeholder={t("searchPlaceholder")}
              w={"368px"}
              flexShrink={0}
              onChange={(e) => setSearchValue(e.target.value)}
            ></Input>
          </InputGroup>
          <FormControl display="flex" alignItems="center" ml={"28px"}>
            <FormLabel htmlFor="staked" mb="0">
              {t("switchLabel")}
            </FormLabel>
            <Switch id="staked" />
          </FormControl>
        </Flex>
        <Spacer />
        <Flex>
          <Box w={"184px"} mr={5}>
            <SelectUi
              onChange={(e) =>
                setDex(e as { label: string; value: IDex | "all" })
              }
              defaultValue={dexOptions[0]}
              options={dexOptions}
              placeholder={t("selectPlaceholder")}
              isSearchable={false}
            ></SelectUi>
          </Box>
          <Box w={"264px"}>
            <SelectUi
              onChange={(e) =>
                setSorting(e as { label: string; value: string })
              }
              defaultValue={dexOptions[0]}
              options={dexOptions}
              placeholder={t("selectPlaceholder")}
              isSearchable={false}
            ></SelectUi>
          </Box>
        </Flex>
      </Flex>
      <FarmersPoolTable list={filteredList || []} />
    </Container>
  )
}

export default Farmers
