import TonWeb from "tonweb"

export const depositBody = async (tonweb: TonWeb) => {
  const a = new tonweb.boc.Cell()
  a.bits.writeUint(0x47d54391, 32)
  a.bits.writeUint(0, 64)
  const payload = tonweb.utils.bytesToBase64(await a.toBoc())
  return payload
}
