import { observer } from "mobx-react-lite"

import { useStore } from "@/hooks/useStore"

const ToUsd = observer(({ value, symbol }: { value: number, symbol: string }) => {
  const { rates } = useStore()
  return (
    <span>
      ${(value && Number(value) * Number(rates[symbol.toUpperCase()]?.prices["USD"].toFixed(2))).toFixed(0)}
    </span>
  )
})

export default ToUsd
