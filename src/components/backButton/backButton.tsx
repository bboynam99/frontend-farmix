import ChevronLeft from "@assets/svg/chevron-left_24.svg"
import ChevronLeftLight from "@assets/svg/chevron-left_24_light.svg"
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
const BackButton = () => {
  const img = useColorModeValue(ChevronLeft, ChevronLeftLight)

  const navigate = useNavigate()
  return (
    <Box onClick={() => navigate(-1)}>
      <Flex alignItems={"center"} cursor={"pointer"}>
        <Image src={img} width={6} height={6} />
        <Text ml={1} letterSpacing={"0.2px"}>
          Back
        </Text>
      </Flex>
    </Box>
  )
}

export default BackButton
