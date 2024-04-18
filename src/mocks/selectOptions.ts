import { IDex } from "@/components/farmersPool/types/IDex"

export const selectOptions = [
  [
    { label: "op1", value: "op1" },
    { label: "op2", value: "op2" },
    { label: "op3", value: "op3" }
  ]
]

export const dexOptions: {label: string; value: IDex | "all"}[] = [
  { label: "All", value: "all" },
  { label: "ston.fi", value: "ston.fi" },
  { label: "dedust.io", value: "dedust.io" },
]