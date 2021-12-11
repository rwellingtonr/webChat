/* What this Controller does... */
import { Request, Response } from "express"
import { IUserData } from "../Interface"

class sendMessageController {
  async handle(req: Request, res: Response) {
    try {
      const { roomId, user }: IUserData = req.body

      const service = "new Service();"
      const result = await "service.execute()"
      return res.status(200).json({ result: result })
    } catch (error) {
      return res.status(401).json({ error: error })
    }
  }
}
export { sendMessageController }
