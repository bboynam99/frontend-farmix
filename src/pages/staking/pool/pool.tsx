import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Spacer,
  Spinner,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  Text
} from "@chakra-ui/react"
import { useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"

import BackButton from "@/components/ui/backButton/backButton"
import ToUsd from "@/components/ui/toUsd/toUsd"
import ViewOnTonviewer from "@/components/ui/viewOnTonviewer/viewOnTonviewer"
import { useStore } from "@/hooks/useStore"

import UnstakeModal from "./modals/unstake"

const Pair = observer(() => {
  const params = useParams()
  const nav = useNavigate()
  const [unstakeModal, setUnstakeModal] = useState(false)
  const { stakingStore, userStore, fromNano } = useStore()
  const store = stakingStore
  const { t } = useTranslation("stakingPool")
  const [tonConnectUI] = useTonConnectUI()

  tonConnectUI.account?.address

  const stake = () => {
    store.currentPool &&
      store.currentPool.descriptor.id &&
      nav(`/staking/pair/${store.currentPool.descriptor.symbol}/stake`)
  }
  const unstake = (value: number) => {
    console.log(value) /* TODO UNSTAKE */
    setUnstakeModal(false)
  }

  useEffect(() => {
    if (params.id) {
      store.fetchPool(params.id, userStore.user.walletAddress)
    }
  }, [userStore.user.walletAddress, params.id])

  return (
    <Container maxW={"container.xl"}>
      {store.currentPool ? (
        <>
          <Box mt={8} mb={[6, 12]}>
            <BackButton title="Back to pools"></BackButton>
          </Box>
          <Flex alignItems={["stretch", "flex-start"]} flexDirection={["column", "column", "row"]}>
            <Box>
              <Badge mb={4} variant={"solid"}>
                APY {Number(fromNano(store.currentPool.currentDerivs.apy)).toFixed(2)}%
              </Badge>
              <Flex alignItems={"center"} flexBasis={"33.3%"} mb={4}>
                {store.currentPool.descriptor.imgUrl && (
                  <Image src={store.currentPool.descriptor.imgUrl} borderRadius={"99px"} w={"44px"} h={"44px"} />
                )}
                <Box ml={3} fontSize={36} fontWeight={700}>
                  {store.currentPool.descriptor.symbol}
                </Box>
              </Flex>
              <Box mb={[4, 0]}>
                <ViewOnTonviewer addr={store.currentPool.descriptor.contractAddr} />
              </Box>
            </Box>
            <Spacer />
            <StatGroup
              borderRadius={"12px"}
              alignItems={"stretch"}
              borderWidth={"1px"}
              overflow={"hidden"}
              borderColor={"borderColor"}
              flexDir={["column", "row"]}
            >
              <Stat px={6} py={5} position={"relative"}>
                <StatHelpText fontSize={"12px"} whiteSpace={"nowrap"}>
                  {t("table.pool")} APR 24h
                </StatHelpText>
                <StatLabel fontSize={"16px"}>{fromNano(store.currentPool.currentDerivs.apr24)}%</StatLabel>
                <Divider
                  orientation={"vertical"}
                  position={"absolute"}
                  right={0}
                  top={"25%"}
                  bottom={"25%"}
                  height={"auto"}
                />
              </Stat>
              <Stat px={6} py={5} position={"relative"}>
                <StatHelpText fontSize={12} whiteSpace={"nowrap"}>
                  {t("table.pool")} APR 7d
                </StatHelpText>
                <StatLabel fontSize={"16px"}>{fromNano(store.currentPool.currentDerivs.apr168)}%</StatLabel>
                <Divider
                  hideBelow={"sm"}
                  orientation={"vertical"}
                  position={"absolute"}
                  right={0}
                  top={"25%"}
                  bottom={"25%"}
                  height={"auto"}
                />
              </Stat>
              <Stat px={6} py={5}>
                <StatHelpText fontSize={12} whiteSpace={"nowrap"}>
                  {t("table.pool")} APR 30d
                </StatHelpText>
                <StatLabel fontSize={"16px"}>{fromNano(store.currentPool.currentDerivs.apr720)}%</StatLabel>
              </Stat>
              <Stat alignItems={["stretch", "center"]} display={"flex"} flexDir={["column", "row"]} px={6} py={5}>
                <Button onClick={stake}>{t("table.stake")}</Button>
              </Stat>
            </StatGroup>
          </Flex>
          <Divider my={4} />
          <Flex flexDir={["column", "row"]}>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={4}>
              <StatHelpText fontSize={12}>Rate</StatHelpText>
              <StatLabel fontSize={"16px"}>
                1 {store.currentPool.descriptor.symbol} ≈ <ToUsd symbol="TON" value={1} />
              </StatLabel>
            </Stat>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mt={[4, 0]}>
              <StatHelpText fontSize={16}>TVL</StatHelpText>
              <StatLabel fontSize={16}>
                {store.currentPool.currentDerivs.tvl && (
                  <ToUsd symbol="TON" value={Number(fromNano(store.currentPool.currentDerivs.tvl))} />
                )}
              </StatLabel>
            </Stat>
          </Flex>
          {store.currentPool.staker && (
            <>
              <Text mt={6} mb={4} fontSize={36} fontWeight={700}>
                {t("table.staked")}
              </Text>
              <Flex flexDirection={["column", "row"]}>
                <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={[0, 4]} mb={[4, 0]}>
                  <StatHelpText>{t("table.totalBalance")}</StatHelpText>
                  <Flex align={"center"} justifyContent={"space-between"}>
                    <StatLabel>
                      <ToUsd symbol="TON" value={+store.currentPool.staker?.currentDeposits} />
                    </StatLabel>
                    <Text>
                      {store.currentPool.staker.currentDeposits || 0} {store.currentPool.descriptor.symbol}
                    </Text>
                  </Flex>
                  <Flex mt={6}>
                    <Button onClick={() => setUnstakeModal(true)} mr={4} variant={"outline"}>
                      {t("table.unstake")}
                    </Button>
                    <Button onClick={stake}>{t("table.add")}</Button>
                  </Flex>
                </Stat>
                <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5}>
                  <StatHelpText>{t("table.totalEarned")}</StatHelpText>
                  <Flex align={"center"} justifyContent={"space-between"}>
                    <StatLabel>
                      <ToUsd symbol="TON" value={Number(store.currentPool.staker?.totalEarnings)} />
                    </StatLabel>
                    <Text>
                      {store.currentPool.staker.totalEarnings} {store.currentPool.descriptor.symbol}
                    </Text>
                  </Flex>
                  <Flex mt={6}>
                    <Button onClick={() => setUnstakeModal(true)}>{t("table.claimAndUnstake")}</Button>
                  </Flex>
                </Stat>
              </Flex>
              <UnstakeModal isOpen={unstakeModal} onClose={() => setUnstakeModal(false)} onConfirm={unstake} />
            </>
          )}
        </>
      ) : (
        <Flex h={"250px"} align={"center"} justify={"center"}>
          <Spinner></Spinner>
        </Flex>
      )}
    </Container>
  )
})

export default Pair
