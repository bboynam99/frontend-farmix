import { IDex } from "./IDex"

export interface IPosition {
  id: number
  tokenIcon: string
  token: string
  tokenSecondIcon: string
  tokenSecond: string
  dex: IDex
  entryPrice: string,
  liquidation: string,
  netValue: string,
  pnl: string
}
