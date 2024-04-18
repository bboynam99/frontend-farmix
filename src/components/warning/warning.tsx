import alertIcon from "@assets/svg/alert_24.svg"
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"

import BgBox from "../bgBox/bgBox"

interface WarningProps {
  message: string
  buttonText: string
  buttonLink: string
}

const Warning = ({ message, buttonText, buttonLink }: WarningProps) => {
  return (
    <BgBox px={4} py={4} radius={"12px"} border>
      <Flex align={"start"}>
        <Image src={alertIcon} mr={3} />
        <Box>
          <Text>{message}</Text>
          {!!buttonLink && (
            <Link href={buttonLink} target="_blank">
              {buttonText}
            </Link>
          )}
        </Box>
      </Flex>
    </BgBox>
  )
}

export default Warning
