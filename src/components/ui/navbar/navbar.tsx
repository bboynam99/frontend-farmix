import darkTheme from "@assets/svg/dark-theme_32.svg"
import langIcon from "@assets/svg/language_20.svg"
import langDarkIcon from "@assets/svg/language_dark_20.svg"
import lightTheme from "@assets/svg/light-theme_32.svg"
import {
  Box,
  Container,
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
import {
  Locales,
  THEME,
  TonConnectButton,
  useIsConnectionRestored,
  useTonConnectUI,
  useTonWallet
} from "@tonconnect/ui-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

import styles from "./tonbutton.module.scss"
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
  const [tabIndex, setTabIndex] = useState(
    pathname?.includes("/farmers") ? 1 : 0 || 0
  )

  const { toggleColorMode, colorMode } = useColorMode()
  const { t, i18n } = useTranslation("navbar")
  const currentLang = i18n.language

  const onLanguageChange = (lang: string) => {
    setOptions({ language: lang as Locales })
  }

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang)
    onLanguageChange(lang)
  }
  const [tonConnectUI, setOptions] = useTonConnectUI()
  const wallet = useTonWallet()
  console.log(wallet, tonConnectUI.account?.walletStateInit);
  const info = fetch(`https://tonapi.io/v2/accounts/${wallet?.account.address}`)
  info.then((res) => console.log(res.json()))
  
  // const sendTransactionHandler = (address: string, amount: string) => {
  //   const transaction: SendTransactionRequest = {
  //     messages: [
  //       {
  //         address: address,
  //         amount: amount
  //       }
  //     ],
  //     validUntil: Math.floor(new Date().getTime() / 1000) + 360,
  //     from: wallet?.account.address,
  //     network: CHAIN.TESTNET
  //   }

  //   tonConnectUI.sendTransaction(transaction)
  // }

  setOptions({
    uiPreferences: {
      borderRadius: "m",
      theme: colorMode === "light" ? THEME.LIGHT : THEME.DARK
    }
  })

  const connectionRestored = useIsConnectionRestored()

  return (
    <Flex w={"100%"} bg={"secondaryBg"} p={3} justifyContent={"space-between"}>
      <Container
        maxW={"container.xl"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Tabs
          onChange={(index) => setTabIndex(index)}
          index={tabIndex}
          isManual
          position="relative"
          variant="unstyled"
        >
          <TabList>
            {links.map((link) => (
              <Tab
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
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
        </Tabs>
        <Flex alignItems={"center"}>
          {!connectionRestored ? (
            <Flex
              w={"148px"}
              h={"40px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner></Spinner>
            </Flex>
          ) : (
            <div className={styles.button}>
              <TonConnectButton style={{ height: "42px" }} />
            </div>
          )}
          <Select
            ml={6}
            cursor={"pointer"}
            icon={
              <Image src={colorMode === "dark" ? langIcon : langDarkIcon} />
            }
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
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
