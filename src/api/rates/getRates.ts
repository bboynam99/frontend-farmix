import axios from "axios"

import { IRates } from "@/types/rates"

export const getRates = async (
  symbol: string
): Promise<IRates | undefined> => {
  try {
    const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/rates?tokens=${symbol}`
    )
    return response.data.rates
  } catch (err) {
    console.error(err)
  }
}
