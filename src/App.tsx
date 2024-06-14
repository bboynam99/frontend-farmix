import { Flex, Text } from "@chakra-ui/react"
import { Address, beginCell, fromNano } from "@ton/core"
import { JettonMaster,TonClient } from "@ton/ton"
import { useTonWallet } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import Footer from "./components/footer/footer"
import Navbar, { NavbarLink } from "./components/ui/navbar/navbar"
import { useStore } from "./hooks/useStore"

const client = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC',
});

const jettonMasterAddress = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs') // for example EQBlqsm144Dq6SjbPI4jjZvA1hqTIP3CvHovbIfW_t-SCALE
const userAddress = Address.parse('UQA0m675UeqSuX0OPY-wg5v7FPMNaa-YunISE-As_wlor78C')

const jettonMaster = client.open(JettonMaster.create(jettonMasterAddress))
const jetwall = await jettonMaster.getWalletAddress(userAddress)
console.log()

const paths = [
  { id: "lending", path: "/" },
  { id: "farmers", path: "/farmers" }
]

const App = observer(() => {
  const wallet = useTonWallet()
  const { userStore, getBalance, tonweb, getJettonBalance } = useStore()
  
  useEffect(() => {
    if (wallet) {
      userStore.setUserWalletAddress(wallet.account.address)
      getBalance(wallet.account.address).then((balance) => {
        balance && userStore.setUserBalance(balance)
      })
      getBalance(jetwall.toString()).then((balance) => {
        console.log(fromNano(balance!))
      })
      // getJettonBalance()
    }
  }, [wallet])

  return (
    <>
      <Navbar
        links={paths.map((r) => {
          return { name: r.id, path: r.path } as NavbarLink
        })}
      ></Navbar>
      {/* <button onClick={()=>lendNativeToken()}>send</button> */}
      <ErrorBoundary
        fallback={
          <Flex w={"100%"} height={"100%"} minH={"240px"} justify={"center"} alignItems={"center"}>
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
