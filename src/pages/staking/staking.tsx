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
  Spacer,
  Spinner,
  Switch,
  Text
} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { getStakingPools } from "@/api/staking/getStakingPools"
import Banner from "@/components/banner/banner"
import StakingPoolTable from "@/components/stakingPool/stakingPoolTable"
import { IStakingPool } from "@/components/stakingPool/types/IStakingPool"
import SelectUi from "@/components/ui/select/selectUi"
import useDebounce from "@/hooks/useDebounce"
import { useInput } from "@/hooks/useInput"

const sortOptions = [
  {
    label: "Sorting by TVL",
    value: "tvl"
  },
  {
    label: "Sorting by APR24",
    value: "apr24"
  }
]

const StakingPool = observer(() => {
  const { t } = useTranslation("stakingPool")
  const [sort, setSort] = useState(sortOptions[0])
  const [pools, setPools] = useState<IStakingPool[] | undefined>()
  const searchInput = useInput("")
  const debouncedSearch = useDebounce(searchInput.value, 500)

  const handleSelectSorting = (v: (typeof sortOptions)[number]) => {
    setSort(v)
    getStakingPools(v.value).then((res) => {
      setPools(res?.pools)
    })
  }

  useEffect(() => {
    getStakingPools(undefined, debouncedSearch !== "" ? debouncedSearch : undefined).then((res) => {
      setPools(res?.pools)
    })
  }, [debouncedSearch])

  return (
    <Container maxW="container.xl">
      <Box mt={[7, 16, 16]}>
        <Banner
          bgImage={bannerBg}
          image={moneyBanner}
          buttonLink="/staking"
          buttonText={t("banner.buttonText")}
          title={t("banner.title")}
          text={t("banner.text")}
        />
      </Box>
      <Flex justifyContent="space-between" alignItems="baseline" mb={8} mt={[4, 14, 14]}>
        <Text fontSize={[24, 36]} fontWeight={700}>
          {t("title")}
        </Text>
        <FormControl w="auto" hideFrom="md" display="flex" alignItems="baseline">
          <FormLabel htmlFor="staking" mb="0">
            {t("switchLabel")}
          </FormLabel>
          <Switch id="staking" />
        </FormControl>
      </Flex>
      <Flex alignItems="center" mb={6} flexWrap="wrap">
        <Flex alignItems="center" flexBasis={["100%", "auto", "auto"]}>
          <InputGroup>
            <InputLeftElement>
              <Image src={searchIcon}></Image>
            </InputLeftElement>
            <Input
              placeholder={t("searchPlaceholder")}
              w={["100%", "auto", "368px"]}
              flexShrink={0}
              {...searchInput}
            ></Input>
          </InputGroup>
          <FormControl hideBelow={"md"} display="flex" alignItems="center" ml={7}>
            <FormLabel htmlFor="staking" mb="0">
              {t("switchLabel")}
            </FormLabel>
            <Switch id="staking" />
          </FormControl>
        </Flex>
        <Spacer />
        <Box w={["auto", "264px", "264px"]} flexBasis={["100%", "auto", "auto"]} mt={[4, 0, 0]}>
          <SelectUi
            isSearchable={false}
            placeholder={t("selectPlaceholder")}
            onChange={(e) => handleSelectSorting(e as (typeof sortOptions)[0])}
            value={sort}
            defaultValue={sortOptions[0].value}
            options={sortOptions}
          ></SelectUi>
        </Box>
      </Flex>
      {pools ? (
        <StakingPoolTable list={pools || []} />
      ) : (
        <Flex w="100%" h="300px" alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      )}
    </Container>
  )
})

export default StakingPool
