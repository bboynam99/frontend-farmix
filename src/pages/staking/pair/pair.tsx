import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  Text
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { IStakeItem } from "@/components/stakingPool/types/IStakeItem"
import BackButton from "@/components/ui/backButton/backButton"
import ViewOnTonviewer from "@/components/ui/viewOnTonviewer/viewOnTonviewer"
import { pool } from "@/mocks/mockData"

const Pair = () => {
  const params = useParams()
  const nav = useNavigate()
  const [item, setItem] = useState<IStakeItem | undefined>(undefined)
  const [claimModal, setClaimModal] = useState(false)
  const [unstakeModal, setUnstakeModal] = useState(false)
  const stake = () => {
    item && item.id && nav(`/staking/pair/${item.id}/stake`)
  }

  const handleClaim = () => {
    setClaimModal(true)
  }

  const handleUnstake = () => {
    setUnstakeModal(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setItem(pool.find((item) => item.id === Number(params.id)))
    }, 1000)
  }, [])

  return (
    <Container
      maxW={"container.xl"}
    >
      {item ? (
        <>
          <Box mt={"34px"} mb={"48px"}>
            <BackButton title="Back to pools"></BackButton>
          </Box>

          <Flex alignItems={"flex-start"}>
            <Box>
              <Badge mb={4} variant={"solid"}>
                APY 158%
              </Badge>
              <Flex alignItems={"center"} flexBasis={"33.3%"} mb={4}>
                <Image
                  src={item.tokenIcon}
                  borderRadius={"99px"}
                  w={"44px"}
                  h={"44px"}
                />
                <Box ml={3} fontSize={"36px"} fontWeight={700}>
                  {item.token}
                </Box>
              </Flex>
              <ViewOnTonviewer link="https://tonviewer.com"></ViewOnTonviewer>
            </Box>
            <Spacer />
            <StatGroup
              borderRadius={"12px"}
              alignItems={"stretch"}
              borderWidth={"1px"}
              overflow={"hidden"}
              borderColor={"borderColor"}
            >
              <Stat px={6} py={5} position={"relative"}>
                <StatHelpText fontSize={"12px"}>Pool APR 24h</StatHelpText>
                <StatLabel fontSize={"16px"}>Pool APR 24h</StatLabel>
                <Divider
                  orientation="vertical"
                  position={"absolute"}
                  right={0}
                  top={"25%"}
                  bottom={"25%"}
                  height={"auto"}
                />
              </Stat>
              <Stat px={6} py={5} position={"relative"}>
                <StatHelpText fontSize={"12px"}>Pool APR 7d</StatHelpText>
                <StatLabel fontSize={"16px"}>Pool APR 24h</StatLabel>
                <Divider
                  orientation="vertical"
                  position={"absolute"}
                  right={0}
                  top={"25%"}
                  bottom={"25%"}
                  height={"auto"}
                />
              </Stat>
              <Stat px={6} py={5}>
                <StatHelpText fontSize={"12px"}>Pool APR 30d</StatHelpText>
                <StatLabel fontSize={"16px"}>Pool APR 24h</StatLabel>
              </Stat>
              <Stat alignItems={"center"} display={"flex"} px={6} py={5}>
                <Button onClick={stake}>Stake</Button>
              </Stat>
            </StatGroup>
          </Flex>
          <Divider my={4} />
          <Flex>
            <Stat
              borderWidth={"1px"}
              borderRadius={"12px"}
              px={6}
              py={5}
              mr={4}
            >
              <StatHelpText fontSize={"12px"}>Rate</StatHelpText>
              <StatLabel fontSize={"16px"}>1 TON ≈ 118.79 GRAM</StatLabel>
            </Stat>
            <Flex flex={1}>
              <Stat
                borderWidth={"1px"}
                borderRadius={"12px"}
                px={6}
                py={5}
                mr={4}
              >
                <StatHelpText fontSize={"16px"}>TVL</StatHelpText>
                <StatLabel fontSize={"16px"}>$38 000 000</StatLabel>
              </Stat>
              <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5}>
                <StatHelpText fontSize={"16px"}>Volume 24h</StatHelpText>
                <StatLabel fontSize={"16px"}>$2 000 257</StatLabel>
              </Stat>
            </Flex>
          </Flex>
          <Text mt={6} mb={4} fontSize={"36px"} fontWeight={700}>
            Staked
          </Text>
          <Flex>
            <Stat
              borderWidth={"1px"}
              borderRadius={"12px"}
              px={6}
              py={5}
              mr={4}
            >
              <StatHelpText>My total balance</StatHelpText>
              <Flex align={"center"} justifyContent={"space-between"}>
                <StatLabel>$986</StatLabel>
                <Text>12 000 GRAM</Text>
              </Flex>
              <Flex mt={6}>
                <Button onClick={handleUnstake} mr={4} variant={"outline"}>
                  Unstake
                </Button>
                <Button onClick={stake}>Add</Button>
              </Flex>
            </Stat>
            <Stat borderWidth={"1px"} borderRadius={"12px"} px={6} py={5}>
              <StatHelpText>Total earned</StatHelpText>
              <Flex align={"center"} justifyContent={"space-between"}>
                <StatLabel>$986</StatLabel>
                <Text>12 000 GRAM</Text>
              </Flex>
              <Flex mt={6}>
                <Button onClick={handleClaim}>Claim</Button>
              </Flex>
            </Stat>
          </Flex>
          <Modal
            isOpen={claimModal}
            onClose={() => setClaimModal(false)}
            isCentered
            size={"sm"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text fontSize={24} fontWeight={700}>
                  Claim rewards
                </Text>
                <ModalCloseButton onClick={() => setClaimModal(false)} />
              </ModalHeader>
              <ModalBody>
                <Box pb={4}>
                  <Box pb={2} mb={4}>
                    <Flex align={"flex-start"}>
                      <Flex align={"center"}>
                        <Image mr={3} src={item.tokenIcon} w={8} h={8} />
                        <Box>
                          <Text fontWeight={500}>2553 {item.token}</Text>
                          <Text color={"text.secondary"} fontSize={12}>
                            Rewards for claim
                          </Text>
                        </Box>
                      </Flex>
                      <Spacer />
                      <Text>25533</Text>
                    </Flex>
                  </Box>
                  <Flex mt={4} justify={"space-between"}>
                    <Text color={"text.secondary"} fontSize={12} mt={1}>
                      Blockchain fee
                    </Text>
                    <Text fontSize={12}>0.08-0.8 TON</Text>
                  </Flex>
                  <Button
                    mt={4}
                    variant={"big"}
                    onClick={() => setClaimModal(false)}
                    h={"42px"}
                    fontSize={14}
                  >
                    Claim
                  </Button>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={unstakeModal}
            onClose={() => setUnstakeModal(false)}
            isCentered
            size={"sm"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text fontSize={24} fontWeight={700}>
                  Unstake
                </Text>
                <ModalCloseButton onClick={() => setUnstakeModal(false)} />
              </ModalHeader>
              <ModalBody>
                <Box pb={4}>
                  <Box pb={2} mb={4}>
                    <Flex align={"flex-start"}>
                      <Flex align={"center"}>
                        <Image mr={3} src={item.tokenIcon} w={8} h={8} />
                        <Box>
                          <Text color={"text.secondary"} fontSize={12}>
                            You staked
                          </Text>
                          <Text fontWeight={500}>2553 {item.token}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </Box>
                  <InputGroup>
                    <Input placeholder={"Enter amount"}></Input>
                    <InputRightElement w={"auto"}>
                      <Text
                        color={"text.link"}
                        fontSize={"12px"}
                        cursor={"pointer"}
                        px={5}
                        fontWeight={500}
                      >
                        MAX
                      </Text>
                    </InputRightElement>
                  </InputGroup>
                  <Divider mt={5} />
                  <Flex mt={4} justify={"space-between"}>
                    <Text color={"text.secondary"} fontSize={12} mt={1}>
                      Blockchain fee
                    </Text>
                    <Text fontSize={12}>0.08-0.8 TON</Text>
                  </Flex>
                  <Button
                    mt={4}
                    variant={"big"}
                    onClick={() => setUnstakeModal(false)}
                  >
                    Confirm unstake
                  </Button>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Flex h={"250px"} align={"center"} justify={"center"}>
          <Spinner></Spinner>
        </Flex>
      )}
    </Container>
  )
}

export default Pair
