/* What this Service does... */

import { io } from "../App/app"
import { IUserData } from "../Interface"
import { storageMsgData } from "../Job/storageMsg"
import { existKey } from "../Utils/RedisMethods/retrievers"

class sendMsgService {
  async execute(dataMsg: IUserData) {
    const existIt = await existKey(dataMsg.roomId)
    if (existIt) {
      const { roomId, user } = dataMsg

      io.in(roomId).emit("msg-do-back", user.message)
      io.to(roomId).emit("msg-do-back2", user.message)
    } else {
      io.emit("new_room", dataMsg)
    }

    const result = await storageMsgData(dataMsg)
    return result
  }
}

export { sendMsgService }
