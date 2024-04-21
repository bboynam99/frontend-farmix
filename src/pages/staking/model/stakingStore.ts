import { makeAutoObservable } from "mobx"

import { RootStore } from "@/store/rootStore"

import { StakeState } from "./types/stakeState"

interface IStakeSettings {
  slippageTolerance: number
  stakeAmount: number | undefined
  stakeTokenId: number | undefined
}

class StakingStore {
  public rootStore: RootStore
  public settings: IStakeSettings = {
    slippageTolerance: 0.5,
    stakeAmount: undefined,
    stakeTokenId: undefined
  }
  public stakeState: StakeState = undefined
  public resultAlertMessage: string | undefined = undefined

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  setStakeState = (state: StakeState) => {
    this.stakeState = state
  }

  setSlippageTolerance(value: number) {
    this.settings.slippageTolerance = value
  }

  setStakeAmount = (amount: number) => {
    this.settings.stakeAmount = amount
  }

  setStakeTokenId = (tokenId: number) => {
    this.settings.stakeTokenId = tokenId
  }

  confirmStake = (confirmed: boolean) => {
    if (confirmed) {
      /* mock fetch */
      this.setStakeState("confirmInWallet")
      setTimeout(() => {
        this.setStakeState("pending")
      }, 2000)
      setTimeout(() => {
        this.setStakeState("success")
      }, 3000)
    } else {
      this.setStakeState(undefined)
    }
  }

  clearStake = () => {
    this.confirmStake(false)
  }
}

export default StakingStore
