import dedustImg from "@assets/png/dedust.io.png"
import stonfiImg from "@assets/png/ston.fi.png"
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Link,
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
import { useParams } from "react-router-dom"

import BackButton from "@/components/ui/backButton/backButton"
import ToUsd from "@/components/ui/toUsd/toUsd"
import { useStore } from "@/hooks/useStore"

import AddModal from "./modals/add"
import UnstakeModal from "./modals/unstake"

const FarmersPair = observer(() => {
  const params = useParams()
  const [unstakeModal, setUnstakeModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const { farmersStore } = useStore()
  const store = farmersStore
  // const { t } = useTranslation("stakingPool")
  const [tonConnectUI] = useTonConnectUI()

  tonConnectUI.account?.address

  const unstake = () => {
    setUnstakeModal(true)
  }

  const add = () => {
    setAddModal(false)
  }

  useEffect(() => {
    if (params.id) {
      store.fetchPool(+params.id)
    }
  }, [params.id])

  return (
    <Container maxW={"container.xl"}>
      {store.currentPool ? (
        <>
          <Box mt={8} mb={[6, 12]}>
            <BackButton title="Back to pool"></BackButton>
          </Box>
          <Flex alignItems={["stretch", "flex-start"]} flexDirection={["column", "column", "row"]}>
            <Box>
              <Badge mb={4} variant={"solid"}>
                {/* APY {Number(fromNano(store.currentPool.netValue)).toFixed(2)}% */}
                APY {store.currentPool.netValue}%
              </Badge>
              <Flex alignItems={"center"} flexBasis={"33.3%"} mb={4}>
                {store.currentPool.tokenIcon && (
                  <Image src={store.currentPool.tokenIcon} borderRadius={"99px"} w={"44px"} h={"44px"} />
                )}
                {store.currentPool.tokenSecondIcon && (
                  <Image src={store.currentPool.tokenSecondIcon} borderRadius={"99px"} w={"44px"} h={"44px"} ml={-3} />
                )}
                <Box ml={3} fontSize={36} fontWeight={700}>
                  {store.currentPool.token}/{store.currentPool.tokenSecond}
                </Box>
              </Flex>
              <Box mb={[4, 0]}>
                <Flex py={2}>
                  <Link href={`#`} target="_blank">
                    <Flex align={"center"} cursor={"pointer"}>
                      <Image
                        src={store.currentPool.dex === "ston.fi" ? stonfiImg : dedustImg}
                        borderRadius={"99px"}
                        w={5}
                        h={5}
                        mr={2}
                      />
                      <Text letterSpacing={"0.5px"}>{store.currentPool.dex}</Text>
                    </Flex>
                  </Link>
                </Flex>
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
                  PNL
                </StatHelpText>
                <StatLabel fontSize={"16px"}>{store.currentPool.pnl}</StatLabel>
                <Divider
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
                  Leverage
                </StatHelpText>
                {/* <StatLabel fontSize={"16px"}>{fromNano(store.currentPool.liquidation)}%</StatLabel> */}
                <StatLabel fontSize={"16px"}>TODO</StatLabel>
              </Stat>
              <Stat>
                <Flex flexDirection={"row"} alignItems={"center"} px={6} py={5}>
                  <Button variant={"outline"} onClick={() => setUnstakeModal(true)} mr={4}>
                    Close position
                  </Button>
                  <Button onClick={() => setAddModal(true)}>Add</Button>
                </Flex>
              </Stat>
            </StatGroup>
          </Flex>
          <Divider my={4} />
          <Flex flexDir={["column", "row"]}>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={[0, 4]}>
              <StatHelpText fontSize={12}>Date</StatHelpText>
              <StatLabel fontSize={"16px"}>TODO</StatLabel>
            </Stat>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={[0, 4]} mt={[4, 0]}>
              <StatHelpText fontSize={12}>Entry price</StatHelpText>
              <StatLabel fontSize={16}>{store.currentPool.entryPrice}</StatLabel>
            </Stat>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mt={[4, 0]}>
              <StatHelpText fontSize={12}>Liquidation</StatHelpText>
              <StatLabel fontSize={16}>{store.currentPool.liquidation}</StatLabel>
            </Stat>
          </Flex>
          <Flex flexDir={["column", "row"]} mt={4}>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={[0, 4]} flexBasis={"25%"}>
              <StatHelpText fontSize={12}>Market price</StatHelpText>
              <StatLabel fontSize={"16px"}>
                TODO ≈ <ToUsd symbol="TON" value={1} />
              </StatLabel>
            </Stat>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mt={[4, 0]} flexBasis={"85%"}>
              <StatLabel fontSize={16}>TODO</StatLabel>
              <StatLabel fontSize={16}>TODO</StatLabel>
            </Stat>
          </Flex>
          {store.currentPool.netValue && (
            <>
              <Flex flexDir={["column", "row"]} mt={4}>
                <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5} mr={[0, 4]} flexBasis={"25%"}>
                  <Flex justifyContent={"space-between"}>
                    <Box fontSize={24} fontWeight={600}>
                      Net Value
                    </Box>
                    <Box fontSize={24} fontWeight={600}>
                      {store.currentPool.netValue}
                    </Box>
                  </Flex>
                  <Divider my={6} />
                  <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
                    <Flex alignItems={"center"}>
                      <Image width={6} height={6} src={store.currentPool.tokenIcon} mr={1} />
                      <Box>TODO {store.currentPool.token}</Box>
                    </Flex>
                    <Text color={"text.secondary"}>TODO</Text>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"} mt={2}>
                    <Flex alignItems={"center"}>
                      <Image width={6} height={6} src={store.currentPool.tokenSecondIcon} mr={1} />
                      <Box>TODO {store.currentPool.tokenSecond}</Box>
                    </Flex>
                    <Text color={"text.secondary"}>TODO</Text>
                  </Flex>
                  <Divider my={6} />
                  <Flex>
                    <Button variant={"outline"} mr={4} onClick={() => setUnstakeModal(true)}>
                      Close position
                    </Button>
                    <Button onClick={() => setAddModal(true)}>Add</Button>
                  </Flex>
                </Stat>
              </Flex>
              <UnstakeModal isOpen={unstakeModal} onClose={() => setUnstakeModal(false)} onConfirm={unstake} />
              <AddModal isOpen={addModal} onClose={() => setAddModal(false)} onConfirm={add} />
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

export default FarmersPair
