/* What this Controller does... */
import { Request, Response } from "express"
import { IMsgBody } from "../interface"
import { sendMessaService } from "../services"

class sendMessageController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const msgData: IMsgBody = req.body
			const data = { ...msgData, client: msgData.client.toLowerCase() }
			const result = await sendMessaService(data)
			return res.status(200).json({ result: result })
		} catch (error) {
			return res.status(401).json({ error: error })
		}
	}
}
export { sendMessageController }
