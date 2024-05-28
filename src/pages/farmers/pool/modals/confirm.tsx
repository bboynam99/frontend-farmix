// ConfirmModal.tsx
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text
} from "@chakra-ui/react"
import React from "react"

import { IFarmersPoolRow } from "@/components/farmersPool/types/IFarmersPoolRow"

interface ConfirmModalProps {
  isOpen: boolean
  item: IFarmersPoolRow
  amount: number
  amount2: number
  leverage: number
  onClose: () => void
  onConfirm: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  item,
  amount,
  amount2,
  leverage,
  onClose,
  onConfirm
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            Open position
          </Text>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <Box pb={4}>
            <Flex align={"center"} justify={"space-between"} mb={4}>
              <Text fontSize={20} fontWeight={600}>
                Net value
              </Text>
              <Text fontSize={20} fontWeight={600}>
                ≈$103.98
              </Text>
            </Flex>
            <Box pb={2} mb={4}>
              <Flex align={"center"}>
                <Flex align={"center"}>
                  <Image mr={2} src={item.tokenIcon} w={6} h={6} />
                  <Text mr={1}>{amount}</Text>
                  <Text>{item.token}</Text>
                </Flex>
                <Spacer />
                <Text color={"text.tetriary"}>≈$103.98</Text>
              </Flex>
              <Flex align={"center"} mt={2}>
                <Flex align={"center"}>
                  <Image mr={2} src={item.tokenSecondIcon} w={6} h={6} />
                  <Text mr={1}>{amount2}</Text>
                  <Text>{item.tokenSecond}</Text>
                </Flex>
                <Spacer />
                <Text color={"text.tetriary"}>≈$103.98</Text>
              </Flex>
            </Box>
            <Divider />
            <Box py={2} my={4}>
              <Flex align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>Total leverage</Text>
                <Text>{leverage}x</Text>
              </Flex>
              <Flex mt={2} align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>Entry price</Text>
                <Text>15 416.12 USD</Text>
              </Flex>
              <Flex mt={2} align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>Liquidation price</Text>
                <Text>15 416.12 USD</Text>
              </Flex>
              <Flex mt={2} align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>Slippage</Text>
                <Text>0.5%</Text>
              </Flex>
              <Flex mt={2} align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>Blockchain fee</Text>
                <Text>0.3-1.6 TON</Text>
              </Flex>
              <Flex mt={2} align={"center"} justify={"space-between"}>
                <Text color={"text.secondary"}>DEX</Text>
                <Text>ston.fi</Text>
              </Flex>
            </Box>
            <Divider />
            <Button mt={4} variant={"big"} onClick={onConfirm}>
              Confirm staking
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
