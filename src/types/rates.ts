export interface IRateInfo {
  prices: Record<string, number>
  diff_24h: Record<string, string>
  diff_7d: Record<string, string>
  diff_30d: Record<string, string>
}

export type IRates = Record<string, IRateInfo>
