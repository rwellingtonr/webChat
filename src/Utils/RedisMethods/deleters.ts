import { promisify } from "util"
import { ioredis } from "../../Config"

const expirationTime = (key: string) => {
  const { TTL } = process.env
  const expirete = promisify(ioredis.expire).bind(ioredis)
  return expirete(key, TTL)
}
export { expirationTime }
