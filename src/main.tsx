import "./index.scss"

import { ChakraProvider } from "@chakra-ui/react"
import { TonConnectUIProvider } from "@tonconnect/ui-react"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import resources from "virtual:i18next-loader"

import App from "./App.tsx"
import i18n from "./i18n.ts"
import Farmers from "./pages/farmers/farmers.tsx"
import FarmersPool from "./pages/farmers/pool/pool.tsx"
import Pair from "./pages/staking/pair/pair.tsx"
import Stake from "./pages/staking/stake/stake.tsx"
import StakingPool from "./pages/staking/staking.tsx"
import theme from "./theme/theme.ts"

i18n.init({
  resources: resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TonConnectUIProvider
        manifestUrl={`https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json`}
        // manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}
        actionsConfiguration={{}}
      >
        <ChakraProvider theme={theme}>
          <Routes>
            <Route element={<App />}>
              <Route path="/staking" element={<StakingPool />}></Route>
              <Route path="/staking/pair/:id" element={<Pair />}></Route>
              <Route path="/staking/pair/:id/stake" element={<Stake />}></Route>
              <Route path="/farmers" element={<Farmers></Farmers>}></Route>
              <Route
                path="/farmers/pool/:id"
                element={<FarmersPool></FarmersPool>}
              ></Route>
              <Route index path="/*" element={<Navigate to="/staking" />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </TonConnectUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
