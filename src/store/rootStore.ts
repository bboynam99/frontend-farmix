import FarmersStore from "@/pages/farmers/model/farmersStore"
import StakingStore from "@/pages/staking/model/stakingStore"

export class RootStore {
  stakingStore: StakingStore
  farmersStore: FarmersStore

  constructor() {
    this.stakingStore = new StakingStore(this)
    this.farmersStore = new FarmersStore(this)
  }
}
const rootStore = new RootStore()
export default rootStore
