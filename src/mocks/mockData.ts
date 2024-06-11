import { IFarmersPoolRow } from "@/components/farmersPool/types/IFarmersPoolRow"
import { IHistoryItem } from "@/components/farmersPool/types/IHistoryItem"
import { IPosition } from "@/components/farmersPool/types/IPosition"

export const farmersPools: IFarmersPoolRow[] = [
  {
    id: 1,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "ston.fi",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 2,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "dedust.io",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 3,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "STON",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "ston.fi",
    apr: "$1,000,000",
    volume24: "$9,000",
    pnl: "$0",
  },
  {
    id: 4,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
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
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "ston.fi",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 2,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "dedust.io",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 3,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "STON",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
    tokenSecond: "TON",
    dex: "ston.fi",
    entryPrice: "$1,000,000",
    liquidation: "$9,000",
    netValue: "$9,000",
    pnl: "$0",
  },
  {
    id: 4,
    tokenIcon: "/src/assets/svg/tokens/gram.svg",
    token: "GRAM",
    tokenSecondIcon: "/src/assets/svg/tokens/ton.svg",
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
    id: 2,
    symbol: "GRAM",
    createdAt: "2022-01-01",
    quantity: 1,
    notionalValue: 1,
    price: 1,
    fee: 1,
    status: "executed"
  },
  {
    id: 3,
    symbol: "GRAM",
    createdAt: "2022-01-01",
    quantity: 1,
    notionalValue: 1,
    price: 1,
    fee: 1,
    status: "partiallyExecuted"
  }
]