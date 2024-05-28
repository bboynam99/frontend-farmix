import { Flex, Text } from "@chakra-ui/react"
import { useTonWallet } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import Footer from "./components/footer/footer"
import Navbar, { NavbarLink } from "./components/ui/navbar/navbar"
import { useStore } from "./hooks/useStore"

const paths = [
  { id: "staking", path: "/" },
  { id: "farmers", path: "/farmers" }
]

const App = observer(() => {
  const wallet = useTonWallet()
  const { userStore, getBalance } = useStore()
  
  useEffect(() => {
    if (wallet) {
      userStore.setUserWalletAddress(wallet.account.address)
      getBalance(wallet.account.address).then((balance) => {
        balance && userStore.setUserBalance(balance)
      })
    }
  }, [wallet])

  return (
    <>
      <Navbar
        links={paths.map((r) => {
          return { name: r.id, path: r.path } as NavbarLink
        })}
      ></Navbar>
      <ErrorBoundary
        fallback={
          <Flex w={"100%"} height={"100%"} minH={"240px"}>
            <Text fontSize={24} fontWeight={600}>
              Something went wrong
            </Text>
          </Flex>
        }
      >
        <Outlet />
      </ErrorBoundary>
      <Footer></Footer>
    </>
  )
})

export default App
