import TonWeb from "tonweb"

export const toHex = async (tonweb: TonWeb, value: string) => {
  const a = new tonweb.boc.Cell()
  a.bits.writeUint(0, 32)
  a.bits.writeString(value)
  a.bits.toHex()
  console.log(a);
  
  const payload = tonweb.utils.bytesToBase64(await a.toBoc())
  return payload
}
