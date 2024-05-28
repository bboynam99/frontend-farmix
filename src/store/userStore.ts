import { makeAutoObservable } from "mobx"

import { RootStore } from "./rootStore"

interface IUser {
  walletAddress: string | undefined
  balance: string | undefined
}

class UserStore {
  public rootStore: RootStore
  public user: IUser = { walletAddress: undefined, balance: undefined }
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  setUserWalletAddress = (walletAddress: string) => {
    this.user.walletAddress = walletAddress
  }

  setUserBalance = (balance: string) => {
    this.user.balance = balance
  }
}

export default UserStore
