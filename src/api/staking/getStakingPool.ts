import axios from "axios"

import { IStakingPool } from "@/components/stakingPool/types/IStakingPool"

export const getStakingPool = async (
  symbol: string,
  walletAddr?: string
): Promise<IStakingPool | undefined> => {
  const corsAnywhereProxyUrl = "https://cors-anywhere.herokuapp.com/"
  try {
    const response = await axios.get(
      // corsAnywhereProxyUrl +
        `${import.meta.env.VITE_API_URL}/api/staking/pool/${symbol}${
          walletAddr ? "?walletAddr=" + walletAddr : ""
        }`
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}
