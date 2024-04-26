import { makeAutoObservable } from "mobx"

import { IDex } from "@/components/farmersPool/types/IDex"
import { RootStore } from "@/store/rootStore"

interface IFarmSettings {
  asset1Id: number | undefined
  asset2Id: number | undefined
  asset1Amount: number | undefined
  asset2Amount: number | undefined
  leverage: number
  dex: IDex | undefined
}

class FarmersStore {
  public rootStore: RootStore
  public settings: IFarmSettings = {
    asset1Id: undefined,
    asset2Id: undefined,
    asset1Amount: undefined,
    asset2Amount: undefined,
    leverage: 1,
    dex: undefined
  }
  public openStatus: "confirm" | "opened" | undefined = undefined
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  setAsset1Id = (id: number) => {
    this.settings.asset1Id = id
  }

  setAsset2Id = (id: number) => {
    this.settings.asset2Id = id
  }

  setAsset1Amount = (amount: number) => {
    this.settings.asset1Amount = amount
  }

  setAsset2Amount = (amount: number) => {
    this.settings.asset2Amount = amount
  }

  setLeverage = (leverage: number) => {
    this.settings.leverage = leverage
  }

  setOpenStatus = (status: "confirm" | "opened" | undefined) => {
    this.openStatus = status
  }
}

export default FarmersStore
