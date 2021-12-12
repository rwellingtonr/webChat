import { IFormatMessage } from "../Interface"
import { listMsgs } from "../Utils/RedisMethods/retrievers"

const getAllMsg = async (roomId: string) => {
  const rangeList: IFormatMessage[] = []
  const messages = await listMsgs(roomId)
  for (const message of messages) {
    const msgParsed = JSON.parse(message)
    rangeList.push(...msgParsed)
  }
  return rangeList
}

export { getAllMsg }
