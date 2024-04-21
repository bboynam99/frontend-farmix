import StakingStore from "@/pages/staking/model/stakingStore"

export class RootStore {
  stakingStore: StakingStore

  constructor() {
    this.stakingStore = new StakingStore(this)
  }
}
const rootStore = new RootStore()
export default rootStore