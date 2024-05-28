import refreshIconDark from "@assets/svg/refresh_32.svg"
import refreshIconLight from "@assets/svg/refresh_32_light.svg"
import settingsIconDark from "@assets/svg/settings_32.svg"
import settingsIconLight from "@assets/svg/settings_32_light.svg"
import walletIcon from "@assets/svg/wallet_16.svg"
import {
  Badge,
  Box,
  Button,
  Collapse,
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
import { useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

import AlertBox from "@/components/ui/alertBox/alertBox"
import BackButton from "@/components/ui/backButton/backButton"
import BgBox from "@/components/ui/bgBox/bgBox"
import ToUsd from "@/components/ui/toUsd/toUsd"
import Warning from "@/components/ui/warning/warning"
import { useInput } from "@/hooks/useInput"
import { useStore } from "@/hooks/useStore"

import ConfirmModal from "./modals/confirm"
import ConfirmWalletModal from "./modals/confirmWallet"
import ResultModal from "./modals/resultModal"
import SettingsModal from "./modals/settings"

const Stake = observer(() => {
  const params = useParams()
  const settingsIcon = useColorModeValue(settingsIconDark, settingsIconLight)
  const refreshIcon = useColorModeValue(refreshIconDark, refreshIconLight)
  const { stakingStore: store, userStore, fromNano } = useStore()
  const [settingsModal, setSettingsModal] = useState(false)
  const [resultAlert, setResultAlert] = useState(false)
  const [tonConnectUi] = useTonConnectUI()
  const { t } = useTranslation("stakingPool")

  const amountInput = useInput(0, (e) => {
    store.setStakeAmount(Number(e.target.value))
  })

  useEffect(() => {
    if (params.id) {
      store.fetchPool(params.id, userStore.user.walletAddress)
    }
  }, [userStore.user.walletAddress])

  return (
    <Container maxW={"container.xl"}>
      <Box mt={8} mb={[6, 12]}>
        <BackButton title="Back to staking"></BackButton>
      </Box>
      {store.currentPool ? (
        <>
          <Flex w={"100%"} maxW={"464px"} alignSelf={"center"} direction={"column"}>
            <Flex alignItems={"center"} justify={"space-between"} mb={8}>
              <Text fontSize={[24, 32, 36]} fontWeight={700}>
                {t("title")}
              </Text>
              <Flex>
                <Box mr={5} onClick={() => setSettingsModal(true)} cursor={"pointer"}>
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
                    {userStore.user.balance && Number(fromNano(userStore.user.balance)).toFixed(2)}
                  </Text>
                </Flex>
              </Flex>
              <Flex align={"center"}>
                <Flex align={"center"}>
                  {store.currentPool.descriptor.imgUrl && (
                    <Image mr={2} src={store.currentPool.descriptor.imgUrl} w={8} h={8} />
                  )}
                  <Text fontSize={24} fontWeight={700}>
                    {store.currentPool.descriptor.symbol}
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
                    min={1}
                    max={userStore.user.balance && Number(fromNano(userStore.user.balance))}
                    flex={1}
                    border={"none"}
                    type="number"
                    _focus={{ border: "none" }}
                    _focusVisible={{ border: "none" }}
                    _placeholder={{ opacity: 0.5 }}
                    {...amountInput}
                  ></NumberInputField>
                </NumberInput>
              </Flex>
              <Collapse in={store.settings.stakeError === "amount"} animateOpacity>
                <Text color={"text.error"} mt={2}>
                  {store.settings.stakeError === "amount" && "Please enter a valid amount"}
                </Text>
              </Collapse>
              <Flex mt={2} align={"center"}>
                <Badge variant={"solid"}>APY {Number(fromNano(store.currentPool.currentDerivs.apy)).toFixed(2)}%</Badge>
                <Spacer />
                <Text color={"text.secondary"}>
                  <ToUsd value={store.settings.stakeAmount || 0} symbol="TON" />
                </Text>
              </Flex>
            </BgBox>
            <Button
              isDisabled={store.settings.stakeError !== undefined || store.settings.stakeAmount === undefined}
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
            onConfirm={() => store.confirmStake(true, tonConnectUi)}
            item={store.currentPool}
            amount={store.settings.stakeAmount || 0}
          />
          <ConfirmWalletModal
            isOpen={store.stakeState === "confirmInWallet" || store.stakeState === "pending"}
            item={store.currentPool}
            amount={store.settings.stakeAmount || 0}
            confirmed={store.stakeState === "pending"}
            onClose={() => store.clearStake()}
          />
          <ResultModal
            item={store.currentPool}
            amount={store.settings.stakeAmount || 0}
            result={store.stakeState as "success" | "error"}
            isOpen={store.stakeState === "success" || store.stakeState === "error"}
            onClose={() => store.clearStake()}
          />
          <SettingsModal isOpen={settingsModal} onClose={() => setSettingsModal(false)} />
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
