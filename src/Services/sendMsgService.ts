/* What this Service does... */

import { io } from "../App/app"
import { IUserData } from "../Interface"
import { storageMsgData } from "../Job/storageMsg"
import { formatMessage } from "../Utils/messages"
import { existKey } from "../Utils/RedisMethods/retrievers"

class sendMsgService {
  async execute(dataMsg: IUserData): Promise<number> {
    const existIt = await existKey(dataMsg.roomId)
    const { roomId, user } = dataMsg
    const msgFormated = formatMessage(user.name, user.message)
    if (existIt) {
      io.in(roomId).emit("msg-do-back", msgFormated)
      //io.to(roomId).emit("msg-do-back2", user.message)
    } else {
      io.emit("new_room", dataMsg)
    }

    const result = await storageMsgData(dataMsg.roomId, msgFormated)
    return result
  }
}

export { sendMsgService }
