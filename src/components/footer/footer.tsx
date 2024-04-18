import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react"
// import logo from "./logo.png"

const Footer = () => {
  return (
    <Box
      bg={"secondaryBg"}
      mt={20}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            {/* <Image src={logo} alt="Logo" boxSize="50px" /> */}
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"}>Company</Text>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"}>Legal</Text>
            <Link href={"#"}>Terms of Use</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"}>Follow Us</Text>
            <Link href={"#"}>{/* <FaFacebook /> */}</Link>
            <Link href={"#"}>{/* <FaTwitter /> */}</Link>
            <Link href={"#"}>{/* <FaInstagram /> */}</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Text textAlign={"center"}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
