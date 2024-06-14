import {
  Box,
  Button,
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
  Spinner,
  Text
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

import { useStore } from "@/hooks/useStore"

interface UnstakeModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const UnstakeModal = ({ isOpen, onClose, onConfirm }: UnstakeModalProps) => {
  const { stakingStore: store } = useStore()
  const { t } = useTranslation("stakingPool")
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            {t("table.claimAndUnstake")}
          </Text>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          {store.currentPool ? (
            <Box pb={4}>
              <Box pb={2} mb={4}>
                <Flex align={"flex-start"}>
                  <Flex align={"center"}>
                    {store.currentPool.descriptor.imgUrl && (
                      <Image mr={3} src={store.currentPool.descriptor.imgUrl} w={8} h={8} />
                    )}
                    <Box>
                      <Text color={"text.secondary"} fontSize={12}>
                        {t("table.staked")}
                      </Text>
                      <Text fontWeight={500}>
                        {store.currentPool.staker?.currentDeposits} {store.currentPool.descriptor.symbol}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
              <InputGroup>
                <Input
                  placeholder={"Enter amount"}
                  onChange={(e) => store.setUnstakeAmount(Number(e.target.value))}
                  value={store.unstakeAmount}
                ></Input>
                <InputRightElement w={"auto"}>
                  <Text color={"text.link"} fontSize={"12px"} cursor={"pointer"} px={5} fontWeight={500}>
                    {/* TODO calc max including commissions */}
                    MAX
                  </Text>
                </InputRightElement>
              </InputGroup>
              <Divider mt={5} />
              <Flex mt={4} justify={"space-between"}>
                <Text color={"text.secondary"} fontSize={12} mt={1}>
                  {t("table.fee")}
                </Text>
                <Text fontSize={12}>0.08-0.8 TON</Text>
              </Flex>
              <Button mt={4} variant={"big"} onClick={onConfirm}>
                {t("table.confirmUnstake")}
              </Button>
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
