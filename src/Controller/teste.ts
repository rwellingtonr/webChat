/* What this Controller does... */
import { Request, Response } from "express"
import { sendMessaService } from "../Services"

class sendMessageController {
  async handle(req: Request, res: Response) {
    try {
      const { msg } = req.body

      const service = new sendMessaService()
      const result = service.execute(msg)
      return res.status(200).json({ result: result })
    } catch (error) {
      return res.status(401).json({ error: error })
    }
  }
}
export { sendMessageController }
