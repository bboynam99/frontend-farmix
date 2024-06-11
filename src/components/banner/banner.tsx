import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface BannerProps {
  title: string
  text: string
  buttonText: string
  buttonLink: string
  image: string
  bgImage: string
}

const Banner = ({
  title,
  text,
  buttonText,
  buttonLink,
  image,
  bgImage
}: BannerProps) => {

  const navigate = useNavigate()

  return (
    <Flex
      p={[8, 8, 16]}
      borderRadius={"36px"}
      bgImage={bgImage}
      bgSize={"cover"}
      w={"100%"}
      alignItems={"center"}
      bgPos={"bottom"}
      pos={"relative"}
    >
      <Box w={["100%", "60%", "60%"]}>
        <Text
          fontSize={[24, null, 44]}
          fontWeight={700}
          color={"white"}
        >
          {title}
        </Text>
        <Text mb={[16, 16, "44px"]} color={"white"}>
          {text}
        </Text>
        <Button
          onClick={() => navigate(buttonLink)}
          bg={"white"}
          color={"black"}
          width={["100%","auto"]}
          px={12}
          h={"46px"}
          _hover={{ bg: "rgba(255,255,255,0.8)" }}
        >
          {buttonText}
        </Button>
      </Box>
      <Spacer hideBelow={"md"} />
      <Image
        pos={["absolute", "relative", "relative"]}
        right={0}
        bottom={[20, 0, 0]}
        src={image}
        w={["114px,", "284px", "284px"]}
        h={["92px", "228px", "228px"]}
      ></Image>
    </Flex>
  )
}

export default Banner
