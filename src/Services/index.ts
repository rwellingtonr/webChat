/* What this Service does... */

import { io } from "../App/app"

class sendMessaService {
  execute(msg: string) {
    const data = {
      msg,
    }
    io.emit("new_message", msg)
    return data
  }
}

export { sendMessaService }
