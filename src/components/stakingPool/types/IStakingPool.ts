interface Descriptor {
  id: number
  name: string
  symbol: string
  contractAddr: string
  targetJettonMasterAddr: string
  poolJettonMasterAddr: string
  depositFee: string
  isTonPool: boolean
  imgUrl: string
}

interface CurrentDerivs {
  poolId: number
  tvl: string
  apr24: string
  apr168: string
  apr720: string
  apy: string
}

interface Staker {
  poolId: number
  walletAddr: string
  currentDeposits: string
  totalEarnings: string
}

export interface IStakingPool {
  descriptor: Descriptor
  currentDerivs: CurrentDerivs
  staker: Staker
}
