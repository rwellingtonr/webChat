import { promisify } from "util"
import { ioredis } from "../../Config"
import { IFormatMessage, IUsers } from "../../Interface"

const addMessage = (roomId: string, msg: IFormatMessage): Promise<number> => {
  const parsedMsg = JSON.stringify(msg)
  const pushMsg = promisify(ioredis.rpush).bind(ioredis)
  return pushMsg(roomId, parsedMsg)
}

const setUserInChat = (key: string, usrData: IUsers): Promise<string> => {
  const { TTL } = process.env
  const stringfiedData = JSON.stringify(usrData)
  const setter = promisify(ioredis.set).bind(ioredis)
  return setter(`Key:${key}`, stringfiedData, "EX", TTL)
}

export { addMessage, setUserInChat }
