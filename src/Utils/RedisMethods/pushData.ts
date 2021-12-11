import { promisify } from "util"
import { ioredis } from "../../Config"
import { IUserData } from "../../Interface"

const addMessage = ({ roomId, user }: IUserData): Promise<number> => {
  const parsedMsg = JSON.stringify(user)
  const pushMsg = promisify(ioredis.rpush).bind(ioredis)
  return pushMsg(roomId, parsedMsg)
}

export { addMessage }
