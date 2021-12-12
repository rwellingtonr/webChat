import { IFormatMessage } from "../Interface"
import { expirationTime } from "../Utils/RedisMethods/deleters"
import { addMessage } from "../Utils/RedisMethods/pushData"

const storageMsgData = async (roomId: string, msgData: IFormatMessage) => {
  await addMessage(roomId, msgData)
  const expResult = await expirationTime(roomId)
  return expResult
}

export { storageMsgData }
