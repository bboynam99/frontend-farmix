import bannerBg from "@assets/png/banner-bg_2.png"
import moneyBanner from "@assets/svg/graphics/ton-banner.svg"
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
  // Select,
  Spacer,
  Switch,
  Text
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import Banner from "@/components/banner/banner"
import StakingPoolTable from "@/components/stakingPool/stakingPoolTable"
import SelectUi from "@/components/ui/select/selectUi"
import useDebounce from "@/hooks/useDebounce"
import { selectOptions } from "@/mocks/selectOptions"

import { pool } from "../../mocks/mockData"

const StakingPool = () => {
  const { t } = useTranslation("stakingPool")
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [searchValue, setSearchValue] = useState<string>("")
  const [filteredList, setFilteredList] = useState(pool)
  const debouncedValue = useDebounce<string>(searchValue, 500)
  console.log(selectedValue)

  useEffect(() => {
    debouncedValue.length
      ? setFilteredList(
          pool.filter((item) =>
            item.token.toLowerCase().includes(debouncedValue.toLowerCase())
          )
        )
      : setFilteredList(pool)
  }, [debouncedValue])

  return (
    <Container maxW={"container.xl"}>
      <Box mt={16}>
        <Banner
          bgImage={bannerBg}
          image={moneyBanner}
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
            <FormLabel htmlFor="staking" mb="0">
              {t("switchLabel")}
            </FormLabel>
            <Switch id="staking" />
          </FormControl>
        </Flex>
        <Spacer />
        <Box w={"264px"}>
          <SelectUi
            isSearchable={false}
            placeholder={t("selectPlaceholder")}
            onChange={(e) => setSelectedValue(e as string)}
            defaultValue={selectOptions[0]}
            options={selectOptions}
          ></SelectUi>
        </Box>
      </Flex>
      <StakingPoolTable list={filteredList || []} />
    </Container>
  )
}

export default StakingPool
