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
  Text} from "@chakra-ui/react"
import React from "react"

import { IStakeItem } from "@/components/stakingPool/types/IStakeItem"
import Warning from "@/components/ui/warning/warning"

interface ConfirmModalProps {
  isOpen: boolean
  item: IStakeItem
  amount: number
  onClose: () => void
  onConfirm: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  item,
  amount,
  onClose,
  onConfirm
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            You staking
          </Text>
          <ModalCloseButton onClick={onClose} />
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
