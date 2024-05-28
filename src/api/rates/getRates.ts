import axios from "axios"

import { IRates } from "@/types/rates"

export const getRates = async (
  symbol: string
): Promise<IRates | undefined> => {
  const corsAnywhereProxyUrl = "https://cors-anywhere.herokuapp.com/"
  try {
    const response = await axios.get(
      corsAnywhereProxyUrl +
        `${import.meta.env.VITE_API_URL}/api/rates?tokens=${symbol}`
    )
    return response.data.rates
  } catch (err) {
    console.error(err)
  }
}
