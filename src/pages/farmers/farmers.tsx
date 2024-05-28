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
  Spinner,
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
import { useInput } from "@/hooks/useInput"
import { dexOptions, IDexOptions } from "@/types/dexOptions"
import { ISort, sortOptions } from "@/types/sortOptions"

import { farmersPools } from "../../mocks/mockData"

const Farmers = () => {
  const { t } = useTranslation("farmers")
  const [dex, setDex] = useState<IDexOptions>(dexOptions[0])
  const [sort, setSort] = useState<ISort>(sortOptions[0])

  const searchInput = useInput("")
  const debouncedSearch = useDebounce(searchInput.value, 500)
  const [filteredList, setFilteredList] = useState(farmersPools)

  const handleSelectSorting = (v: (typeof sortOptions)[number]) => {
    setSort(v)
    // getStakingPools(v.value).then((res) => {
    //   setPools(res?.pools)
    // })
  }

  useEffect(() => {
    debouncedSearch !== ""
      ? setFilteredList(
          farmersPools.filter((item) => item.token.toLowerCase().includes(debouncedSearch.toString().toLowerCase()))
        )
      : setFilteredList(farmersPools)
  }, [debouncedSearch])

  useEffect(() => {
    dex.value !== "all"
      ? setFilteredList(farmersPools.filter((item) => item.dex.includes(dex.value)))
      : setFilteredList(farmersPools)
  }, [dex])

  useEffect(() => {
    sort.value !== "all"
      ? setFilteredList(farmersPools.filter((item) => item.dex.includes(sort.value)))
      : setFilteredList(farmersPools)
  }, [dex])

  useEffect(() => {
    setFilteredList(farmersPools)
  }, [])

  return (
    <Container maxW={"container.xl"}>
      <Box mt={[7, 16, 16]}>
        <Banner
          bgImage={bannerBg}
          image={tonBanner}
          buttonLink="#"
          buttonText={t("banner.buttonText")}
          title={t("banner.title")}
          text={t("banner.text")}
        />
      </Box>
      <Flex justifyContent="space-between" alignItems="baseline" mb={8} mt={[4, 14, 14]}>
        <Text fontSize={[24, 36]} fontWeight={700}>
          {t("title")}
        </Text>
        <FormControl w="auto" hideFrom="xl" display="flex" alignItems="baseline" ml={7}>
          <FormLabel htmlFor="staking" mb="0">
            {t("switchLabel")}
          </FormLabel>
          <Switch id="staking" />
        </FormControl>
      </Flex>
      <Flex alignItems={"center"} mb={6} flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}>
        <Flex
          alignItems={"center"}
          flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
          flexBasis={["100%", "100%", "auto"]}
          mb={[3, 0]}
        >
          <InputGroup mr={[0, 5, 5, 5, 0]}>
            <InputLeftElement>
              <Image src={searchIcon}></Image>
            </InputLeftElement>
            <Input
              placeholder={t("searchPlaceholder")}
              // w={["100%", "auto", "auto", "368px"]}
              w={["100%"]}
              maxW={["none", "368px"]}
              {...searchInput}
            ></Input>
          </InputGroup>
          <FormControl hideBelow={"xl"} display="flex" alignItems="center" ml={7}>
            <FormLabel htmlFor="staked" mb="0">
              {t("switchLabel")}
            </FormLabel>
            <Switch id="staked" />
          </FormControl>
        </Flex>
        <Spacer hideBelow={"lg"} />
        <Flex flexWrap={["wrap", "wrap", "wrap", "nowrap"]} flexBasis={["100%", "auto", "auto"]}>
          <Box w={["100%", "auto", "auto", "368px"]} mr={[0, 5, 5]} flexBasis={["100%", "auto", "auto"]} mb={[3, 0]}>
            <SelectUi
              onChange={(e) => setDex(e as { label: string; value: IDex | "all" })}
              defaultValue={dexOptions[0]}
              options={dexOptions}
              placeholder={t("selectPlaceholder")}
              isSearchable={false}
            ></SelectUi>
          </Box>
          <Box w={["100%", "264px"]} flexBasis={["100%", "auto", "auto"]}>
            <SelectUi
              onChange={(e) => handleSelectSorting(e as { label: string; value: string })}
              value={sort}
              options={sortOptions}
              placeholder={t("selectPlaceholder")}
              isSearchable={false}
            ></SelectUi>
          </Box>
        </Flex>
      </Flex>
      {filteredList ? (
        <FarmersPoolTable list={filteredList} />
      ) : (
        <Flex w="100%" h="300px" alignItems="center" justifyContent="center">
          <Spinner />
          div
        </Flex>
      )}
    </Container>
  )
}

export default Farmers
