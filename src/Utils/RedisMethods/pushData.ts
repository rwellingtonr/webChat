import { promisify } from "util"
import { ioredis } from "../../Config"
import { IFormatMessage } from "../../Interface"

const addMessage = (roomId: string, msg: IFormatMessage): Promise<number> => {
  const parsedMsg = JSON.stringify(msg)
  const pushMsg = promisify(ioredis.rpush).bind(ioredis)
  return pushMsg(roomId, parsedMsg)
}

export { addMessage }
