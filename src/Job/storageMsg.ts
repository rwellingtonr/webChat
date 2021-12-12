import { IUserData } from "../Interface"
import { formatMessage } from "../Utils/messages"
import { expirationTime } from "../Utils/RedisMethods/deleters"
import { addMessage } from "../Utils/RedisMethods/pushData"

const storageMsgData = async ({ roomId, user }: IUserData) => {
  const { message, name } = user
  const msgFormated = formatMessage(name, message)
  await addMessage(roomId, msgFormated)
  await expirationTime(roomId)
  return msgFormated
}

export { storageMsgData }
