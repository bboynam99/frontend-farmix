import tooltipIcon from "@assets/svg/info-fill_16.svg"
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
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
  Switch,
  Text,
  Tooltip} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"

import { useStore } from "@/hooks/useStore"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

const SettingsModal = observer(({ isOpen, onClose }: SettingsModalProps) => {
  const { stakingStore: store } = useStore()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"sm"} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={24} fontWeight={700}>
            Settings
          </Text>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <Flex align={"center"} mb={3}>
            <Text mr={2}>Slippage tolerance</Text>
            <Tooltip
              label="Slippage tolerance"
              fontSize="md"
              borderRadius={"md"}
            >
              <Image src={tooltipIcon} w={"16px"} h={"16px"} />
            </Tooltip>
          </Flex>
          <InputGroup>
            <Input
              value={store.settings.slippageTolerance}
              onChange={(e) => store.setSlippageTolerance(+e.target.value)}
              type="number"
            ></Input>
            <InputRightElement>
              <Text>%</Text>
            </InputRightElement>
          </InputGroup>
          <Flex gap={3} py={5}>
            <Button
              onClick={() => store.setSlippageTolerance(0.1)}
              flex={1}
              size={"sm"}
              variant={"outline"}
            >
              0.1%
            </Button>
            <Button
              onClick={() => store.setSlippageTolerance(0.5)}
              flex={1}
              size={"sm"}
              variant={"outline"}
            >
              0.5%
            </Button>
            <Button
              onClick={() => store.setSlippageTolerance(1)}
              flex={1}
              size={"sm"}
              variant={"outline"}
            >
              1%
            </Button>
          </Flex>
          <Divider></Divider>
          <Flex gap={3} pt={5} pb={6}>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <FormLabel htmlFor="staked" mb="0">
                <Flex align={"center"} mb={3}>
                  <Text mr={2}>Custom price impact limit</Text>
                  <Tooltip
                    label="Custom price impact limit"
                    fontSize="md"
                    borderRadius={"md"}
                  >
                    <Image src={tooltipIcon} w={"16px"} h={"16px"} />
                  </Tooltip>
                </Flex>
              </FormLabel>
              <Switch id="staked" />
            </FormControl>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})

export default SettingsModal
