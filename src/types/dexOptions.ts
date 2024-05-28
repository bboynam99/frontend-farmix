import { IDex } from "@/components/farmersPool/types/IDex"

export interface IDexOptions {
  label: string
  value: IDex | "all"
}

export const dexOptions: IDexOptions[] = [
  { label: "All", value: "all" },
  { label: "ston.fi", value: "ston.fi" },
  { label: "dedust.io", value: "dedust.io" }
]
