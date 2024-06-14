import { makeAutoObservable, runInAction } from "mobx"

import { IDex } from "@/components/farmersPool/types/IDex"
import { IPosition } from "@/components/farmersPool/types/IPosition"
import { farmersPositions } from "@/mocks/mockData"
import { RootStore } from "@/store/rootStore"

interface IFarmSettings {
  asset1Id: number | undefined
  asset2Id: number | undefined
  asset1Amount: number | undefined
  asset2Amount: number | undefined
  leverage: number
  ableToLever: boolean
  dex: IDex | undefined
}

class FarmersStore {
  public rootStore: RootStore
  public settings: IFarmSettings = {
    asset1Id: undefined,
    asset2Id: undefined,
    asset1Amount: undefined,
    asset2Amount: undefined,
    ableToLever: false,
    leverage: 1,
    dex: undefined
  }
  public openStatus: "confirm" | "opened" | undefined = undefined
  public currentPool: IPosition | undefined = undefined

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

  setAbleToLever = (ableToLever: boolean) => {
    this.settings.ableToLever = ableToLever
  }

  setOpenStatus = (status: "confirm" | "opened" | undefined) => {
    this.openStatus = status
  }

  fetchPool = async (id: number) => {
    // const response = walletAddr ? await getStakingPool(symbol, walletAddr) : await getStakingPool(symbol)
    const response = farmersPositions
    runInAction(() => {
      this.currentPool = response[id]
    })
  }
}

export default FarmersStore
