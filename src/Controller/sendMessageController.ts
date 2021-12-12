/* What this Controller does... */
import { Request, Response } from "express"
import { IUserData } from "../Interface"
import { sendMsgService } from "../Services/sendMsgService"

class sendMessageController {
  async handle(req: Request, res: Response) {
    try {
      const { roomId, user }: IUserData = req.body

      const service = new sendMsgService()
      const sendingMsg = await service.execute({ roomId, user })
      if (sendingMsg) {
        return res.status(200).json({ message: "Message deliveried" })
      } else {
        return res.status(500).json({ message: "Ops... something went wrong" })
      }
    } catch (error) {
      return res.status(401).json({ error: error })
    }
  }
}
export { sendMessageController }
