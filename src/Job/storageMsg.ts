import { IUserData } from "../Interface"
import { formatMessage } from "../Utils/messages"
import { expirationTime } from "../Utils/RedisMethods/deleters"
import { addMessage } from "../Utils/RedisMethods/pushData"

const storageMsgData = async ({ roomId, user }: IUserData): Promise<number> => {
  const { message, name } = user
  const msgFormated = formatMessage(name, message)
  await addMessage(roomId, msgFormated)
  const dataSorage = await expirationTime(roomId)
  return dataSorage
}

export { storageMsgData }
