import { listMsgs } from "../Utils/RedisMethods/retrievers"

const getAllMsg = async (roomId: string) => {
  const messages = await listMsgs(roomId)
  let rangeList = {}
  for (const message of messages) {
    const msgParsed = JSON.parse(message)
    rangeList = { ...msgParsed }
  }
  return rangeList
}

export { getAllMsg }
