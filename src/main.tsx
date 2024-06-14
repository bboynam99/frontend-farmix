import "./index.scss"

import { Buffer } from 'buffer';
import process from 'process';

if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
  window.process = process;
}

import { ChakraProvider } from "@chakra-ui/react"
import { TonConnectUIProvider } from "@tonconnect/ui-react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import resources from "virtual:i18next-loader"

import App from "./App.tsx"
import i18n from "./i18n.ts"
import Farmers from "./pages/farmers/farmers.tsx"
import FarmersPool from "./pages/farmers/pool/pool.tsx"
import FarmersPair from "./pages/farmers/position/position.tsx"
import Pair from "./pages/staking/pool/pool.tsx"
import Stake from "./pages/staking/stake/stake.tsx"
import StakingPool from "./pages/staking/staking.tsx"
import rootStore from "./store/rootStore.ts"
import { RootStoreContext } from "./store/rootStoreContext.tsx"
import theme from "./theme/theme.ts"

i18n.init({
  resources: resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <TonConnectUIProvider
      manifestUrl={`https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json`}
      actionsConfiguration={{}}
    >
      <RootStoreContext.Provider value={rootStore}>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route element={<App />}>
              <Route path="/lending" element={<StakingPool />}></Route>
              <Route path="/lending/pair/:id" element={<Pair />}></Route>
              <Route path="/lending/pair/:id/stake" element={<Stake />}></Route>
              <Route path="/farmers" element={<Farmers></Farmers>}></Route>
              <Route path="/farmers/pool/:id" element={<FarmersPool />}></Route>
              <Route path="/farmers/pool/:id/:positionId" element={<FarmersPair />}></Route>
              <Route index path="/*" element={<Navigate to="/lending" />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </RootStoreContext.Provider>
    </TonConnectUIProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
