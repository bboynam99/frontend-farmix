import { ChakraStylesConfig, GroupBase, Props, Select, SelectInstance } from "chakra-react-select"
import { forwardRef } from "react"

const SelectUi = forwardRef<SelectInstance<unknown, boolean, GroupBase<unknown>>, Props>((props, ref) => {
  const chakraStyles: ChakraStylesConfig = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer"
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      bg: "transparent"
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: "8px"
    }),
    indicatorSeparator: () => ({ display: "none" })
  }
  return <Select chakraStyles={chakraStyles} {...props} ref={ref} />
})

export default SelectUi
