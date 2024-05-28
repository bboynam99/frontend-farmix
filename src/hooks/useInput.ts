import { ChangeEvent, useState } from "react"

export function useInput(
  initialValue: string | number,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    onChange && onChange(e)
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  }

  return inputProps
}
