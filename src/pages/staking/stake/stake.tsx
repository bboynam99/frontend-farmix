import errorAnimation from "@assets/lottie/error.json"
import loadingAnimation from "@assets/lottie/loading.json"
import successAnimation from "@assets/lottie/success.json"
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
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Spacer,
  Spinner,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import Lottie from "lottie-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import BackButton from "@/components/backButton/backButton"
import BgBox from "@/components/bgBox/bgBox"
import { IStakeItem } from "@/components/stakingPool/types/IStakeItem"
import ViewOnTonviewer from "@/components/viewOnTonviewer/viewOnTonviewer"
import Warning from "@/components/warning/warning"
import { pool } from "@/mocks/mockData"

const Stake = () => {
  const params = useParams()

  const [item, setItem] = useState<IStakeItem | undefined>(undefined)
  const [amount, setAmount] = useState("")
  const [confirmModal, setConfirmModal] = useState(false)
  const [confirmWalletModal, setConfirmWalletModal] = useState(false)
  const [confirmedInWallet, setConfirmedInWallet] = useState(false)
  const [result, setResult] = useState<"success" | "error" | undefined>()
  const [resultModal, setResultModal] = useState(false)

  const handleAmount = (amount: string) => {
    setAmount(amount)
  }

  const settingsIcon = useColorModeValue(settingsIconDark, settingsIconLight)
  const refreshIcon = useColorModeValue(refreshIconDark, refreshIconLight)

  const handleConfirm = () => {
    setConfirmedInWallet(false)
    setConfirmWalletModal(true)
    setConfirmModal(false)
    setTimeout(() => {
      setConfirmedInWallet(true)
      setConfirmWalletModal(false)
    }, 3000)
    setTimeout(() => {
      setResult("error")
      setResultModal(true)
    }, 5000)
  }

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
                <Image src={settingsIcon} w={8} h={8} mr={5} />
                <Image src={refreshIcon} w={8} h={8} />
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
                    type="number"
                    value={amount}
                    _focus={{ border: "none" }}
                    _focusVisible={{ border: "none" }}
                    _placeholder={{ opacity: 0.5 }}
                    onChange={(e) => handleAmount(e.target.value)}
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
              isDisabled={amount === ""}
              mt={5}
              mb={5}
              variant={"big"}
              onClick={() => setConfirmModal(true)}
            >
              Enter the amount
            </Button>
            <Warning
              message="Staking cannot be unstaked when all funds are used in farming"
              buttonLink="#"
              buttonText="View more"
            />
          </Flex>
          <Modal
            isOpen={confirmModal}
            onClose={() => setConfirmModal(false)}
            isCentered={true}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text fontSize={24} fontWeight={700}>
                  You staking
                </Text>
                <ModalCloseButton onClick={() => setConfirmModal(false)} />
              </ModalHeader>
              <ModalBody>
                <Box pb={4}>
                  <Box pb={2} mb={4}>
                    <Flex align={"center"} justify={"space-between"} mb={3}>
                      <Text color={"text.secondary"}>Assets</Text>
                      <Text color={"text.secondary"}>$244</Text>
                    </Flex>
                    <Flex align={"center"}>
                      <Flex align={"center"}>
                        <Image mr={2} src={item.tokenIcon} w={8} h={8} />
                        <Text fontSize={20} fontWeight={600}>
                          {item.token}
                        </Text>
                      </Flex>
                      <Spacer />
                      <Text fontSize={20} fontWeight={600}>
                        {amount}
                      </Text>
                    </Flex>
                  </Box>
                  <Divider orientation="horizontal"></Divider>
                  <Box py={2} my={4}>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color={"text.secondary"}>APR 24</Text>
                      <Text color={"text.secondary"}>109%</Text>
                    </Flex>
                    <Flex mt={2} align={"center"} justify={"space-between"}>
                      <Text color={"text.secondary"}>Minimum recieved</Text>
                      <Text color={"text.secondary"}>0.000084</Text>
                    </Flex>
                    <Flex mt={2} align={"center"} justify={"space-between"}>
                      <Text color={"text.secondary"}>Est. share of pool</Text>
                      <Text color={"text.secondary"}>{"+<0.01%"}</Text>
                    </Flex>
                  </Box>
                  <Warning
                    message="Staking cannot be unstaked when all funds are used in farming"
                    buttonLink="#"
                    buttonText="View more"
                  />
                  <Button mt={4} variant={"big"} onClick={handleConfirm}>
                    Confirm staking
                  </Button>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={confirmWalletModal}
            onClose={() => setConfirmWalletModal(false)}
            size={"sm"}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton onClick={() => setConfirmModal(false)} />
              </ModalHeader>
              <ModalBody
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Flex
                  w={"138px"}
                  h={"138px"}
                  justify={"center"}
                  align={"center"}
                  my={3}
                >
                  <Lottie animationData={loadingAnimation} loop={true} />
                </Flex>
                <Text
                  fontSize={24}
                  fontWeight={700}
                  lineHeight={"30px"}
                  textAlign={"center"}
                  maxW={"60%"}
                >
                  {confirmedInWallet
                    ? "One more second"
                    : "Confirm transaction in your wallet"}
                </Text>
                <Text textAlign={"center"} maxW={"80%"} pb={"84px"} mt={3}>
                  Confirm liquidity provision 78.1166 GRAM / 0.999999921 TON to
                  GRAM/TON pool
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={resultModal}
            onClose={() => setResultModal(false)}
            size={"sm"}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton onClick={() => setResultModal(false)} />
              </ModalHeader>
              <ModalBody
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Flex
                  w={"218px"}
                  h={"218px"}
                  justify={"center"}
                  align={"center"}
                  my={3}
                >
                  <Lottie
                    animationData={
                      result === "success" ? successAnimation : errorAnimation
                    }
                    loop={true}
                  />
                </Flex>
                <Text
                  fontSize={24}
                  fontWeight={700}
                  lineHeight={"30px"}
                  textAlign={"center"}
                >
                  {result === "success"
                    ? "Your transaction was successful"
                    : "Failed"}
                </Text>
                <Text textAlign={"center"} maxW={"80%"} pb={3} mt={3}>
                  {result === "success"
                    ? "Liquidity provision 78.1166 GRAM / 0.999999921 TON to GRAM/TON pool"
                    : "Has something happened"}
                </Text>
                <ViewOnTonviewer link="https://tonviewer.com"></ViewOnTonviewer>
                <Button
                  mt={4}
                  mb={4}
                  variant={"big"}
                  onClick={() => setResultModal(false)}
                >
                  Got it
                </Button>
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

export default Stake
