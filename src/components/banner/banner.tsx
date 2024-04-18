import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"

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
  return (
    <Flex
      p={16}
      borderRadius={"36px"}
      bgImage={bgImage}
      bgSize={"cover"}
      w={"100%"}
      alignItems={"center"}
      bgPos={"bottom"}
    >
      <Box maxW={"60%"}>
        <Text fontSize={"44px"} fontWeight={700} color={"white"}>
          {title}
        </Text>
        <Text mb={"44px"} color={"white"}>
          {text}
        </Text>
        <Button
          onClick={() => (window.location.href = buttonLink)}
          bg={"white"}
          color={"black"}
          px={12}
          h={"46px"}
          _hover={{ bg: "rgba(255,255,255,0.8)" }}
        >
          {buttonText}
        </Button>
      </Box>
      <Spacer />
      <Image src={image} w={"284px"} h={"228px"}></Image>
    </Flex>
  )
}

export default Banner
