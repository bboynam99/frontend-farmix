// ConfirmModal.tsx
import loadingAnimation from "@assets/lottie/loading.json"
import {
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
import React from "react"

import { IStakingPool } from "@/components/stakingPool/types/IStakingPool"

interface ConfirmWalletModalProps {
  isOpen: boolean
  item: IStakingPool
  amount: number
  confirmed: boolean
  onClose: () => void
}

const ConfirmWalletModal: React.FC<ConfirmWalletModalProps> = ({
  isOpen,
  item,
  amount,
  confirmed,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"sm"}>
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
            {confirmed
              ? "One more second"
              : "Confirm transaction in your wallet"}
          </Text>
          <Text textAlign={"center"} maxW={"80%"} pb={"84px"} mt={3}>
            Confirm staking {amount} {item.descriptor.symbol}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmWalletModal
