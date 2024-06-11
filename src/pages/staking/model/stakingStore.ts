import { Address, toNano } from "@ton/ton"
import { CHAIN, SendTransactionRequest, TonConnectUI } from "@tonconnect/ui-react"
import { makeAutoObservable, runInAction } from "mobx"

import { getStakingPool } from "@/api/staking/getStakingPool"
import { IStakingPool } from "@/components/stakingPool/types/IStakingPool"
import { RootStore } from "@/store/rootStore"
import { createDepositMessage, createLendNativeTokenMessage } from "@/utils/createTonconnectMessage"

import { StakeState } from "./types/stakeState"

const txValidUntil = 5 * 60
interface IStakeSettings {
  slippageTolerance: number
  stakeAmount: number | undefined
  stakeError: "slippage" | "amount" | undefined
  stakeTokenId: number | undefined
}

class StakingStore {
  public rootStore: RootStore
  public settings: IStakeSettings = {
    slippageTolerance: 0.5,
    stakeAmount: undefined,
    stakeTokenId: undefined,
    stakeError: undefined
  }
  public stakeState: StakeState = undefined
  public resultAlertMessage: string | undefined = undefined
  public currentPool: IStakingPool | undefined = undefined

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
    if (
      (this.rootStore.userStore.user.balance &&
        amount > Number(this.rootStore.fromNano(this.rootStore.userStore.user.balance))) ||
      amount <= 0
    ) {
      this.settings.stakeError = "amount"
    } else {
      this.settings.stakeError = undefined
      this.settings.stakeAmount = amount
    }
  }

  setStakeTokenId = (tokenId: number) => {
    this.settings.stakeTokenId = tokenId
  }

  confirmStake = (confirmed: boolean, tonConnectUI?: TonConnectUI) => {
    if (confirmed && tonConnectUI) {
      this.setStakeState("confirmInWallet")
      this.lendNativeToken(tonConnectUI)
      // setTimeout(() => {
      //   this.setStakeState("pending")
      // }, 2000)
      // setTimeout(() => {
      //   this.setStakeState("success")
      // }, 3000)
    } else {
      this.setStakeState(undefined)
    }
  }

  clearStake = () => {
    this.confirmStake(false)
  }

  fetchPool = async (symbol: string, walletAddr?: string) => {
    const response = walletAddr ? await getStakingPool(symbol, walletAddr) : await getStakingPool(symbol)
    runInAction(() => {
      this.currentPool = response
    })
  }

  sendDeposit = (tonConnectUI: TonConnectUI) => {
    if (
      this.currentPool !== undefined &&
      this.rootStore.userStore.user.walletAddress !== undefined &&
      this.settings.stakeAmount !== undefined
    ) {
      const message = createDepositMessage(
        Address.parse(this.currentPool?.descriptor.contractAddr),
        toNano(this.settings.stakeAmount)
      )
      const tx: SendTransactionRequest = {
        validUntil: Math.floor(Date.now() / 1000) + txValidUntil,
        network: CHAIN.TESTNET,
        from: Address.parse(this.rootStore.userStore.user.walletAddress).toRawString(),
        messages: [message]
      }
      void tonConnectUI.sendTransaction(tx).then(() => {})
    }
  }

  lendNativeToken = async (tonConnectUI: TonConnectUI) => {
    if (
      this.currentPool !== undefined &&
      this.rootStore.userStore.user.walletAddress !== undefined &&
      this.settings.stakeAmount !== undefined
    ) {
      const message = createLendNativeTokenMessage(
        // Address.parse(this.currentPool?.descriptor.contractAddr),
        Address.parse("kQDt1n3Kx6aac90jjoJlkHikkSv6vzIJZvQ6tIYifHpgDWcl"),
        toNano(this.settings.stakeAmount)
      )
      const tx: SendTransactionRequest = {
        validUntil: Math.floor(Date.now() / 1000) + txValidUntil,
        network: CHAIN.TESTNET,
        from: Address.parse(this.rootStore.userStore.user.walletAddress).toRawString(),
        // from: Address.parse("kQDM_zWhr2kSFztRFDGVYJjuHgtCmldNqFEiQsvOKXmjXwuz").toRawString(),
        messages: [message]
      }
      void tonConnectUI.sendTransaction(tx).then(() => {})
    }
  }
}

export default StakingStore
