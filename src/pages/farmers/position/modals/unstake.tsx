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
  Spinner,
  Text
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

import { useInput } from "@/hooks/useInput"
import { useStore } from "@/hooks/useStore"

interface UnstakeModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (value: number) => void
}

const UnstakeModal = ({ isOpen, onClose, onConfirm }: UnstakeModalProps) => {
  const { farmersStore: store } = useStore()
  const amountInput = useInput(0)
  const { t } = useTranslation("positions")

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            {t("closePosition")}
          </Text>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          {store.currentPool ? (
            <Box pb={4}>
              <Divider mb={4} />
              <Box pb={2} mb={4}>
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text fontSize={20} fontWeight={600}>
                    Net value
                  </Text>
                  <Text fontSize={20} fontWeight={600}>
                    ≈{store.currentPool.netValue}
                  </Text>
                </Flex>
              </Box>
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
              <Divider mt={4} />
              <Flex mt={4} justify={"space-between"}>
                <Text color={"text.secondary"} mt={1}>
                  {t("entryPrice")}
                </Text>
                <Text>{store.currentPool.entryPrice}</Text>
              </Flex>
              <Flex mt={2} justify={"space-between"}>
                <Text color={"text.secondary"} mt={1}>
                  {t("marketPrice")}
                </Text>
                <Text>TODO</Text>
              </Flex>
              <Divider mt={5} />

              <Flex mt={2} justify={"space-between"} fontSize={12}>
                <Text color={"text.secondary"} mt={1}>
                  {t("fee")}
                </Text>
                <Text fontSize={12}>TODO</Text>
              </Flex>
              <Flex>
                <Button flex={1} mt={4} variant={"outline"} onClick={onClose}>
                  {t("cancel")}
                </Button>
                <Button flex={1} mt={4} ml={3} onClick={() => onConfirm(+amountInput.value)}>
                  {t("closePosition")}
                </Button>
              </Flex>
            </Box>
          ) : (
            <Spinner />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default UnstakeModal
