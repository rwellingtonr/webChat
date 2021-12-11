import { promisify } from "util"
import { ioredis } from "../../Config"

const existKey = (key: string): Promise<number> => {
  const existThisOne = promisify(ioredis.exists).bind(ioredis)
  return existThisOne(key)
}

const listMsgs = (key: string) => {
  const rangeList = promisify(ioredis.lrange).bind(ioredis)
  return rangeList(key, 0, -1)
}

export { existKey, listMsgs }
