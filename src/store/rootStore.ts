import { runInAction } from "mobx"
import TonWeb from "tonweb"

import { getRates } from "@/api/rates/getRates"
import FarmersStore from "@/pages/farmers/model/farmersStore"
import StakingStore from "@/pages/staking/model/stakingStore"
import { IRates } from "@/types/rates"

import UserStore from "./userStore"
export class RootStore {
  stakingStore: StakingStore
  farmersStore: FarmersStore
  userStore: UserStore
  tonweb: TonWeb | null = null
  rates: IRates = {}

  constructor() {
    this.stakingStore = new StakingStore(this)
    this.farmersStore = new FarmersStore(this)
    this.userStore = new UserStore(this)
    this.initTonWeb()
    this.setRates("ton")
  }

  async initTonWeb() {
    try {
      this.tonweb = new TonWeb(
        new TonWeb.HttpProvider(import.meta.env.VITE_TON_TESTNET_URL, {
          apiKey: import.meta.env.VITE_TON_TESTNET_API_KEY
        })
      )
    } catch (error) {
      console.error("Error initializing TonWeb:", error)
    }
  }

  getJettonBalance = async () => {
    if (this.tonweb) {
      const jettonMinter = new TonWeb.token.jetton.JettonMinter(this.tonweb.provider, {
        adminAddress: new TonWeb.utils.Address("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"),
        jettonContentUri: "",
        jettonWalletCodeHex: ""
      })
      const address = await jettonMinter.getJettonWalletAddress(
        new TonWeb.utils.Address("UQA0m675UeqSuX0OPY-wg5v7FPMNaa-YunISE-As_wlor78C")
      )
      // It is important to always check that wallet indeed is attributed to desired Jetton Master:
      const jettonWallet = new TonWeb.token.jetton.JettonWallet(this.tonweb.provider, {
        address: "EQDHKnmBh7GSPIM63yidXwhWpUf3AlIe1jZoGK1BIhNdP6n_"
      })
      const jettonData = await jettonWallet.getData()
      if (jettonData.jettonMinterAddress.toString(false) !== new TonWeb.utils.Address(address).toString(false)) {
        throw new Error("jetton minter address from jetton wallet doesnt match config")
      }

      console.log("Jetton wallet address:", address.toString(true, true, true))
    }
  }

  getBalance = async (address: string) => {
    if (this.tonweb) {
      return await this.tonweb.getBalance(address)
    }
  }

  setRates = async (token: string) => {
    try {
      const response = await getRates(token)
      runInAction(() => {
        response !== undefined && (this.rates = response)
      })
    } catch (error) {
      console.error("Error getting rates:", error)
    }
  }

  fromNano = (value: string) => {
    if (this.tonweb) {
      return this.tonweb.utils.fromNano(value)
    }
  }
}
const rootStore = new RootStore()
export default rootStore
