import errorAnimation from "@assets/lottie/error.json"
import successAnimation from "@assets/lottie/success.json"
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react"
import Lottie from "lottie-react"

import { IStakingPool } from "@/components/stakingPool/types/IStakingPool"
import ViewOnTonviewer from "@/components/ui/viewOnTonviewer/viewOnTonviewer"

interface ResultModalProps {
  result: "success" | "error" | undefined
  item: IStakingPool
  amount: number
  isOpen: boolean
  onClose: () => void
}

const ResultModal = ({
  result,
  item,
  amount,
  isOpen,
  onClose
}: ResultModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"sm"} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton onClick={onClose} />
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
              ? `Confirm staking ${amount} ${item.descriptor.symbol}`
              : "Has something happened"}
          </Text>
          <ViewOnTonviewer addr={item.descriptor.contractAddr}></ViewOnTonviewer>
          <Button mt={4} mb={4} variant={"big"} onClick={onClose}>
            Got it
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ResultModal
