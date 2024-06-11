import axios from "axios"

export const getStakingPools = async (sort?: string, q?: string | number) => {
  const corsAnywhereProxyUrl = "https://cors-anywhere.herokuapp.com/"
  try {
    const response = await axios.get(
      // corsAnywhereProxyUrl +
        `${import.meta.env.VITE_API_URL}/api/staking/pool/list?q=${q ?? "TON"}&sortBy=${
          sort ?? "tvl"
        }&sortDirection=ASC&walletAddr=0QBqZd4MRHZacq6v_s_s0v85AVq4eXlUE4gj386BAi-GV5RR&limit=50`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET",
            "Content-Type": "application/json"
          }
        }
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}
