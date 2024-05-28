import { IDex } from "./IDex"

export interface IFarmersPoolRow {
  id: number
  tokenIcon: string
  token: string
  tokenSecondIcon: string
  tokenSecond: string
  dex: IDex
  apr: string
  volume24: string
  pnl: string
}
