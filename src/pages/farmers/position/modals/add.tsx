import plusIconDark from "@assets/svg/plus-outline_32.svg"
import plusIconLight from "@assets/svg/plus-outline_light_32.svg"
import walletIcon from "@assets/svg/wallet_16.svg"
import {
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
  NumberInput,
  NumberInputField,
  Spacer,
  Spinner,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { fromNano } from "@ton/core"
import { useTranslation } from "react-i18next"

import { useInput } from "@/hooks/useInput"
import { useStore } from "@/hooks/useStore"

interface AddModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (value: number) => void
}

const AddModal = ({ isOpen, onClose, onConfirm }: AddModalProps) => {
  const { farmersStore: store, userStore } = useStore()
  const amountInput = useInput(0)
  const { t } = useTranslation("positions")
  const plusIcon = useColorModeValue(plusIconDark, plusIconLight)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            {t("addMargin")}
          </Text>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          {store.currentPool ? (
            <>
              <Flex mb={3}>
                <Text color={"text.secondary"}>Asset 1</Text>
                <Spacer />
                <Flex alignItems={"center"}>
                  <Image src={walletIcon} w={4} h={4}></Image>
                  <Text color={"text.accent"} ml={2}>
                    {userStore.user.balance && Number(fromNano(userStore.user.balance)).toFixed(2)}
                  </Text>
                </Flex>
              </Flex>
              <Flex align={"center"}>
                <Flex align={"center"}>
                  <Image mr={2} src={store.currentPool.tokenIcon} w={8} h={8} />
                  <Text fontSize={24} fontWeight={700}>
                    {store.currentPool.token}
                  </Text>
                </Flex>
                <Spacer />
                <NumberInput min={0}>
                  <NumberInputField
                    id="asset1Amount"
                    pr={0}
                    placeholder="0.00"
                    fontSize={24}
                    fontWeight={700}
                    textAlign={"right"}
                    minW={"100px"}
                    flex={1}
                    border={"none"}
                    type="number"
                    value={store.settings.asset1Amount ?? ""}
                    _focus={{ border: "none" }}
                    _focusVisible={{ border: "none" }}
                    _placeholder={{ opacity: 0.5 }}
                    onChange={(e) => store.setAsset1Amount(Number(e.target.value))}
                  ></NumberInputField>
                </NumberInput>
              </Flex>

              <Flex align={"center"} my={4}>
                <Divider mr={2} />
                <Image src={plusIcon} w={8} h={8} />
                <Divider ml={2} />
              </Flex>

              <Flex mb={3}>
                <Text color={"text.secondary"}>Asset 2</Text>
                <Spacer />
                <Flex alignItems={"center"}>
                  <Image src={walletIcon} w={4} h={4}></Image>
                  <Text color={"text.accent"} ml={2}>
                    {userStore.user.balance && Number(fromNano(userStore.user.balance)).toFixed(2)}
                  </Text>
                </Flex>
              </Flex>
              <Flex mb={8} align={"center"}>
                <Flex align={"center"}>
                  <Image mr={2} src={store.currentPool.tokenSecondIcon} w={8} h={8} />
                  <Text fontSize={24} fontWeight={700}>
                    {store.currentPool.tokenSecond}
                  </Text>
                </Flex>
                <Spacer />
                <NumberInput min={0}>
                  <NumberInputField
                    id="asset1Amount"
                    pr={0}
                    placeholder="0.00"
                    fontSize={24}
                    fontWeight={700}
                    textAlign={"right"}
                    minW={"100px"}
                    flex={1}
                    border={"none"}
                    type="number"
                    value={store.settings.asset2Amount ?? ""}
                    _focus={{ border: "none" }}
                    _focusVisible={{ border: "none" }}
                    _placeholder={{ opacity: 0.5 }}
                    onChange={(e) => store.setAsset2Amount(Number(e.target.value))}
                  ></NumberInputField>
                </NumberInput>
              </Flex>
              <Button mb={4} variant={"big"} onClick={() => onConfirm(+amountInput.value)}>
                Add margin
              </Button>
            </>
          ) : (
            <Flex h={"250px"} align={"center"} justify={"center"}>
              <Spinner></Spinner>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddModal
