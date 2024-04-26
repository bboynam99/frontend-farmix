import { IFarmersPoolItem } from "@/components/farmersPool/types/IFarmersPoolItem"
import { IHistoryItem } from "@/components/farmersPool/types/IHistoryItem"
import { IPosition } from "@/components/farmersPool/types/IPosition"
import { IStakeItem } from "@/components/stakingPool/types/IStakeItem"

export const pool: IStakeItem[] = [
  {
    id: 1,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    apr: "28.5%",
    tvl: "$1,000,000",
    volume24: "$9,000",
    liquidity: "$0",
    link: "#"
  },

  {
    id: 2,
    tokenIcon: "/src/assets/png/tokens/ton.png",
    token: "STON",
    apr: "28.5%",
    tvl: "$1,000,000",
    volume24: "$9,000",
    liquidity: "$0",
    link: "#"
  },
  {
    id: 3,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "TON",
    apr: "28.5%",
    tvl: "$1,000,000",
    volume24: "$9,000",
    liquidity: "$0",
    link: "#"
  },
  {
    id: 5,
    tokenIcon: "/src/assets/png/tokens/ton.png",
    token: "OTHER",
    apr: "28.5%",
    tvl: "$1,000,000",
    volume24: "$9,000",
    liquidity: "$0",
    link: "#"
  }
]

export const farmersPools: IFarmersPoolItem[] = [
  {
    id: 1,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "ston.fi",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 2,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "dedust.io",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 3,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "STON",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "ston.fi",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 4,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "dedust.io",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  }
]


export const farmersPositions: IPosition[] = [
  {
    id: 1,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "ston.fi",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 2,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "dedust.io",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 3,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "STON",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "ston.fi",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 4,
    tokenIcon: "/src/assets/png/tokens/gram.png",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/png/tokens/ton.png",
    tokenSecond: "TON",
    dex: "dedust.io",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  }
]
export const farmersHistoryItem: IHistoryItem[] = [
  {
    id: 1,
    symbol: "GRAM",
    createdAt: "2022-01-01",
    quantity: 1,
    notionalValue: 1,
    price: 1,
    fee: 1,
    status: "cancelled"
  },
  {
    id: 1,
    symbol: "GRAM",
    createdAt: "2022-01-01",
    quantity: 1,
    notionalValue: 1,
    price: 1,
    fee: 1,
    status: "executed"
  },
  {
    id: 1,
    symbol: "GRAM",
    createdAt: "2022-01-01",
    quantity: 1,
    notionalValue: 1,
    price: 1,
    fee: 1,
    status: "partiallyExecuted"
  }
]

export const staked = [
  {
    id: 2
  },
  {
    id: 4
  }
]