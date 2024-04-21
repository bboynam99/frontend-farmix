import refreshIconDark from "@assets/svg/refresh_32.svg"
import refreshIconLight from "@assets/svg/refresh_32_light.svg"
import settingsIconDark from "@assets/svg/settings_32.svg"
import settingsIconLight from "@assets/svg/settings_32_light.svg"
import walletIcon from "@assets/svg/wallet_16.svg"

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  Spacer,
  Spinner,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import AlertBox from "@/components/alertBox/alertBox"
import BackButton from "@/components/backButton/backButton"
import BgBox from "@/components/bgBox/bgBox"
import { IStakeItem } from "@/components/stakingPool/types/IStakeItem"
import Warning from "@/components/warning/warning"
import { useStore } from "@/hooks/useStore"
import { pool } from "@/mocks/mockData"
import ConfirmModal from "./modals/confirm"
import ConfirmWalletModal from "./modals/confirmWallet"
import ResultModal from "./modals/resultModal"
import SettingsModal from "./modals/settings"

const Stake = observer(() => {
  const params = useParams()
  const [item, setItem] = useState<IStakeItem | undefined>(undefined)
  const [settingsModal, setSettingsModal] = useState(false)
  const [resultAlert, setResultAlert] = useState(false)

  const { stakingStore: store } = useStore()

  const settingsIcon = useColorModeValue(settingsIconDark, settingsIconLight)
  const refreshIcon = useColorModeValue(refreshIconDark, refreshIconLight)

  useEffect(() => {
    setTimeout(() => {
      setItem(pool.find((item) => item.id === Number(params.id)))
    }, 1000)
  }, [])
  return (
    <Container
      maxW={"container.xl"}
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      flex={1}
    >
      <Box mt={"34px"} mb={"48px"}>
        <BackButton></BackButton>
      </Box>
      {item ? (
        <>
          <Flex
            w={"100%"}
            maxW={"464px"}
            alignSelf={"center"}
            direction={"column"}
          >
            <Flex
              alignItems={"center"}
              justify={"space-between"}
              mb={8}
              mt={"56px"}
            >
              <Text fontSize={36} fontWeight={700}>
                Staking
              </Text>
              <Flex>
                <Box
                  mr={5}
                  onClick={() => setSettingsModal(true)}
                  cursor={"pointer"}
                >
                  <Image src={settingsIcon} w={8} h={8} />
                </Box>
                <Box cursor={"pointer"} onClick={() => {}}>
                  <Image src={refreshIcon} w={8} h={8} />
                </Box>
              </Flex>
            </Flex>
            <BgBox px={4} py={5} radius="12px">
              <Flex mb={3}>
                <Text color={"text.secondary"}>Assets</Text>
                <Spacer></Spacer>
                <Flex alignItems={"center"}>
                  <Image src={walletIcon} w={4} h={4}></Image>
                  <Text color={"text.accent"} ml={2}>
                    348 000.745
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
                    pr={0}
                    placeholder="0.00"
                    fontSize={24}
                    fontWeight={700}
                    textAlign={"right"}
                    minW={"100px"}
                    flex={1}
                    border={"none"}
                    _selection={"none"}
                    type="number"
                    value={store.settings.stakeAmount ?? ""}
                    _focus={{ border: "none" }}
                    _focusVisible={{ border: "none" }}
                    _placeholder={{ opacity: 0.5 }}
                    onChange={(e) =>
                      store.setStakeAmount(Number(e.target.value))
                    }
                  ></NumberInputField>
                </NumberInput>
              </Flex>
              <Flex mt={2} align={"center"}>
                <Badge variant={"solid"}>APY 158%</Badge>
                <Spacer />
                <Text color={"text.secondary"}>$0</Text>
              </Flex>
            </BgBox>
            <Button
              isDisabled={store.settings.stakeAmount === 0 || undefined}
              mt={5}
              mb={5}
              variant={"big"}
              onClick={() => store.setStakeState("confirm")}
            >
              Enter the amount
            </Button>
            <Warning
              message="Staking cannot be unstaked when all funds are used in farming"
              buttonLink="#"
              buttonText="View more"
            />
          </Flex>
          <AlertBox
            title="Well done!"
            description="You successfully read this important message."
            show={resultAlert}
            status="success"
            onClose={() => setResultAlert(false)}
          />
          <ConfirmModal
            isOpen={store.stakeState === "confirm"}
            onClose={() => store.clearStake()}
            onConfirm={() => store.confirmStake(true)}
            item={item}
            amount={store.settings.stakeAmount || 0}
          />
          <ConfirmWalletModal
            isOpen={
              store.stakeState === "confirmInWallet" ||
              store.stakeState === "pending"
            }
            item={item}
            amount={store.settings.stakeAmount || 0}
            confirmed={store.stakeState === "pending"}
            onClose={() => store.clearStake()}
          />
          <ResultModal
            item={item}
            amount={store.settings.stakeAmount || 0}
            result={store.stakeState as "success" | "error"}
            isOpen={
              store.stakeState === "success" || store.stakeState === "error"
            }
            onClose={() => store.clearStake()}
          />
          <SettingsModal
            isOpen={settingsModal}
            onClose={() => setSettingsModal(false)}
          />
        </>
      ) : (
        <Flex h={"250px"} align={"center"} justify={"center"}>
          <Spinner></Spinner>
        </Flex>
      )}
    </Container>
  )
})

export default Stake
