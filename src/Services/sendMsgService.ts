/* What this Service does... */

import { io } from "../App/app"
import { IUserData } from "../Interface"
import { existKey } from "../Utils/RedisMethods/retrievers"

class sendMsgService {
  async execute(dataMsg: IUserData) {
    const existIt = await existKey(dataMsg.roomId)
    if (existIt) {
      // send message to an existing chat
    } else {
      io.emit("new_user", dataMsg)
    }

    const data = "await data"
    return data
  }
}

export { sendMsgService }
