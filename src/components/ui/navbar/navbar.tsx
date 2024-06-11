import close from "@assets/svg/close_24.svg"
import closeLight from "@assets/svg/close_24_light.svg"
import darkTheme from "@assets/svg/dark-theme_32.svg"
import langIcon from "@assets/svg/language_20.svg"
import langDarkIcon from "@assets/svg/language_dark_20.svg"
import lightTheme from "@assets/svg/light-theme_32.svg"
import menu from "@assets/svg/menu_24.svg"
import menuLight from "@assets/svg/menu_24_light.svg"
import {
  Box,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Select,
  Spinner,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useColorMode
} from "@chakra-ui/react"
import { Locales, THEME, TonConnectButton, useIsConnectionRestored, useTonConnectUI } from "@tonconnect/ui-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

import styles from "./tonbutton.module.scss"

const drawerLinks: NavbarLink[] = [
  { name: "About us", path: "#" },
  { name: "Company", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Contact us", path: "#" },
  { name: "Privacy policy", path: "#" },
  { name: "Terms of service", path: "#" }
]

export interface NavbarLink {
  name: string
  path: string
}

interface NavbarProps {
  links: NavbarLink[]
}

const Navbar = ({ links }: NavbarProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const connectionRestored = useIsConnectionRestored()
  const { toggleColorMode, colorMode } = useColorMode()
  const { t, i18n } = useTranslation("navbar")
  const [_, setOptions] = useTonConnectUI()
  const [tabIndex, setTabIndex] = useState(pathname?.includes("/farmers") ? 1 : 0 || 0)
  const [opened, setOpened] = useState(false)

  const currentLang = i18n.language

  setOptions({
    uiPreferences: {
      borderRadius: "m",
      theme: colorMode === "light" ? THEME.LIGHT : THEME.DARK
    }
  })

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang)
    setOptions({ language: lang as Locales })
  }

  const SelectLang = () => {
    return (
      <>
        <Select
          cursor={"pointer"}
          icon={<Image src={colorMode === "dark" ? langIcon : langDarkIcon} />}
          maxW={"75px"}
          border={"none"}
          _focus={{ boxShadow: "none" }}
          onChange={(e) => changeLanguageHandler(e.target.value)}
          defaultValue={currentLang}
        >
          <option style={{ cursor: "pointer" }} value={"en"}>
            Eng
          </option>
          <option style={{ cursor: "pointer" }} value={"ru"}>
            Rus
          </option>
        </Select>
        <Box
          as="button"
          borderRadius="md"
          h={8}
          w={8}
          bgImg={colorMode === "dark" ? lightTheme : darkTheme}
          bgSize={32}
          bgPos={"center"}
          ml={6}
          onClick={toggleColorMode}
        ></Box>
      </>
    )
  }

  return (
    <Flex w={"100%"} bg={"secondaryBg"} p={3} justifyContent={"space-between"}>
      <Container
        maxW={"container.xl"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={["wrap", "wrap", "nowrap"]}
      >
        <Box hideFrom={"md"}>
          {opened ? (
            <Image src={colorMode === "light" ? close : closeLight} onClick={() => setOpened(false)} />
          ) : (
            <Image src={colorMode === "light" ? menu : menuLight} onClick={() => setOpened(true)} />
          )}
        </Box>
        <Tabs
          order={["1", "1", "0"]}
          onChange={(index) => setTabIndex(index)}
          index={tabIndex}
          isManual
          position="relative"
          variant="unstyled"
          w={["100%", "100%", "auto"]}
          mt={[4, 4, 0]}
        >
          <TabList w={["100%", "100%", "auto"]}>
            {links.map((link) => (
              <Tab
                flex={["1", "1", "0"]}
                key={link.path}
                p={0}
                _first={{ ml: 0 }}
                ml={10}
                my={1}
                onClick={() => navigate(link.path)}
              >
                {t("paths." + link.name)}
              </Tab>
            ))}
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
        </Tabs>
        <Flex alignItems={"center"}>
          {!connectionRestored ? (
            <Flex w={"148px"} h={"40px"} alignItems={"center"} justifyContent={"center"}>
              <Spinner></Spinner>
            </Flex>
          ) : (
            <div className={styles.button}>
              <TonConnectButton style={{ height: "42px" }} />
            </div>
          )}
          <Flex hideBelow={"md"} ml={4} alignItems={"center"}>
            {SelectLang()}
          </Flex>
        </Flex>
        <Drawer onClose={() => setOpened(false)} isOpen={opened} isFullHeight={true} size={"full"} placement="left">
          <DrawerOverlay mt={"66px"} hideFrom={"md"} />
          <DrawerContent mt={"66px"} hideFrom={"md"}>
            <DrawerBody>
              <Flex align={"center"} justify={"space-between"} mb={4}>
                {SelectLang()}
              </Flex>
              <Divider mb={6} />
              {drawerLinks.map((link) => (
                <Flex
                  fontSize={16}
                  fontWeight={600}
                  key={link.name}
                  mb={8}
                  onClick={() => {
                    navigate(link.path)
                  }}
                >
                  {link.name}
                </Flex>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Flex>
  )
}

export default Navbar
