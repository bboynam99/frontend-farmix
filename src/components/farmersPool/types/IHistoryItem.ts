export interface IHistoryItem {
  id: number
  symbol: string
  createdAt: string
  quantity: number
  notionalValue: number
  price: number
  fee: number
  status: "executed" | "cancelled" | "partiallyExecuted"
}