import successIcon from "@assets/svg/alert/success.svg"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  CloseButton,
  Fade,
  Flex,
  Image
} from "@chakra-ui/react"

interface AlertProps {
  status: "info" | "warning" | "success" | "error"
  title: string
  description: string
  show: boolean
  onClose?: () => void
}

const AlertBox = ({
  status,
  title,
  description,
  show,
  onClose
}: AlertProps) => {
  return (
    <Fade in={show} unmountOnExit={true}>
      <Flex
        position={"fixed"}
        justifyContent={"center"}
        left={"50%"}
        transform={"translateX(-50%)"}
        bottom={12}
      >
        <Alert status={status} py={4} transition="all 0.2s ease" pr={"64px"}>
          <Image src={successIcon} w={"48px"} h={"48px"} mr={4} />
          <Box>
            <AlertTitle fontSize="24px" fontWeight="700">
              {title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">{description}</AlertDescription>
          </Box>
          {onClose && (
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={onClose} 
            />
          )}
        </Alert>
      </Flex>
    </Fade>
  )
}

export default AlertBox
