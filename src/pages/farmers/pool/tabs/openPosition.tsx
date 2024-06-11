import plusIconDark from "@assets/svg/plus-outline_32.svg"
import plusIconLight from "@assets/svg/plus-outline_light_32.svg"
import refreshIconDark from "@assets/svg/refresh_32.svg"
import refreshIconLight from "@assets/svg/refresh_32_light.svg"
import settingsIconDark from "@assets/svg/settings_32.svg"
import settingsIconLight from "@assets/svg/settings_32_light.svg"
import walletIcon from "@assets/svg/wallet_16.svg"
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Spinner,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { IFarmersPoolRow } from "@/components/farmersPool/types/IFarmersPoolRow"
import BgBox from "@/components/ui/bgBox/bgBox"
// import SelectUi from "@/components/ui/select/selectUi"
import { useStore } from "@/hooks/useStore"
import PoolSelect from "@/components/farmersPool/poolSelect/poolSelect"
import ConfirmModal from "../modals/confirm"
import { useTranslation } from "react-i18next"

const OpenPosition = observer(({ item }: { item: IFarmersPoolRow | undefined }) => {
  const settingsIcon = useColorModeValue(settingsIconDark, settingsIconLight)
  const refreshIcon = useColorModeValue(refreshIconDark, refreshIconLight)
  const plusIcon = useColorModeValue(plusIconDark, plusIconLight)
  const { farmersStore: store, userStore, fromNano } = useStore()
  const { t } = useTranslation("positions")

  return (
    <Flex flexDirection={"column"} alignSelf={"center"} w={["100%", "525px"]}>
      <PoolSelect></PoolSelect>
      <BgBox px={6} py={5} radius="12px" border>
        <Flex alignItems={"center"} justify={"space-between"} mb={8}>
          <Text fontSize={24} fontWeight={600}>
            {t("position")}
          </Text>
          <Flex>
            <Box mr={5} onClick={() => {}} cursor={"pointer"}>
              <Image src={settingsIcon} w={8} h={8} />
            </Box>
            <Box cursor={"pointer"} onClick={() => {}}>
              <Image src={refreshIcon} w={8} h={8} />
            </Box>
          </Flex>
        </Flex>

        {item ? (
          <>
            <Flex mb={3}>
              <Text color={"text.secondary"}>Asset 1</Text>
              <Spacer />
              <Flex alignItems={"center"}>
                <Image src={walletIcon} w={4} h={4}></Image>
                <Text color={"text.accent"} ml={2}>
                  {userStore.user.balance && Number(fromNano(userStore.user.balance)).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
            <Flex align={"center"}>
              <Flex align={"center"}>
                <Image mr={2} src={item.tokenIcon} w={8} h={8} />
                <Text fontSize={24} fontWeight={700}>
                  {item.token}
                </Text>
              </Flex>
              <Spacer />
              <NumberInput min={0}>
                <NumberInputField
                  id="asset1Amount"
                  pr={0}
                  placeholder="0.00"
                  fontSize={24}
                  fontWeight={700}
                  textAlign={"right"}
                  minW={"100px"}
                  flex={1}
                  border={"none"}
                  type="number"
                  value={store.settings.asset1Amount ?? ""}
                  _focus={{ border: "none" }}
                  _focusVisible={{ border: "none" }}
                  _placeholder={{ opacity: 0.5 }}
                  onChange={(e) => store.setAsset1Amount(Number(e.target.value))}
                ></NumberInputField>
              </NumberInput>
            </Flex>

            <Flex align={"center"} my={4}>
              <Divider mr={2} />
              <Image src={plusIcon} w={8} h={8} />
              <Divider ml={2} />
            </Flex>

            <Flex mb={3}>
              <Text color={"text.secondary"}>Asset 2</Text>
              <Spacer />
              <Flex alignItems={"center"}>
                <Image src={walletIcon} w={4} h={4}></Image>
                <Text color={"text.accent"} ml={2}>
                  {userStore.user.balance && Number(fromNano(userStore.user.balance)).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
            <Flex align={"center"}>
              <Flex align={"center"}>
                <Image mr={2} src={item.tokenSecondIcon} w={8} h={8} />
                <Text fontSize={24} fontWeight={700}>
                  {item.tokenSecond}
                </Text>
              </Flex>
              <Spacer />
              <NumberInput min={0}>
                <NumberInputField
                  id="asset1Amount"
                  pr={0}
                  placeholder="0.00"
                  fontSize={24}
                  fontWeight={700}
                  textAlign={"right"}
                  minW={"100px"}
                  flex={1}
                  border={"none"}
                  type="number"
                  value={store.settings.asset2Amount ?? ""}
                  _focus={{ border: "none" }}
                  _focusVisible={{ border: "none" }}
                  _placeholder={{ opacity: 0.5 }}
                  onChange={(e) => store.setAsset2Amount(Number(e.target.value))}
                ></NumberInputField>
              </NumberInput>
            </Flex>
          </>
        ) : (
          <Flex h={"250px"} align={"center"} justify={"center"}>
            <Spinner></Spinner>
          </Flex>
        )}
      </BgBox>
      <Box mt={4}>
        <BgBox px={6} py={5} radius="12px" border>
          <Flex flexDirection={"column"}>
            <Text fontWeight={600} mb={2}>
              Leverage
            </Text>
            <Flex align={"center"}>
              <Slider
                aria-label="slider-ex-1"
                value={store.settings.leverage}
                max={3}
                min={1}
                step={0.1}
                onChange={(e) => store.setLeverage(e)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb shadow={"0px 0px 4px 0px rgba(0,0,0,0.1), 6px 0px 12px 0px rgba(0,0,0,0.1)"} />
              </Slider>
              <Text color={"text.secondary"} mr={2} ml={6} fontWeight={600} alignSelf={"end"} mb={0.5}>
                x
              </Text>
              <Text fontSize={24} fontWeight={700}>
                {store.settings.leverage}
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"flex-end"} mt={2}>
            <Badge variant={"solid"}>APY 158%</Badge>
          </Flex>
        </BgBox>
      </Box>
      <Box mt={6}>
        <Button
          isDisabled={!store.settings.asset1Amount || !store.settings.asset2Amount}
          variant={"big"}
          onClick={() => store.setOpenStatus("confirm")}
        >
          {t("open")}
        </Button>
      </Box>
      {item && (
        <ConfirmModal
          isOpen={store.openStatus === "confirm"}
          item={item}
          leverage={store.settings.leverage}
          amount={store.settings.asset1Amount || 0}
          amount2={store.settings.asset2Amount || 0}
          onClose={() => store.setOpenStatus(undefined)}
          onConfirm={() => store.setOpenStatus("opened")}
        />
      )}
    </Flex>
  )
})

export default OpenPosition
