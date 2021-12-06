/* What this Controller does... */
import { Request, Response } from "express"
import { io } from "../App/app"

class createRoomController {
  async handle(req: Request, res: Response) {
    try {
      const { room } = req.body

      io.emit("new_room", room)
      console.log("veio do front end: ", room)

      return res.status(200).json({ result: "ok" })
    } catch (error) {
      return res.status(401).json({ error: error })
    }
  }
}
export { createRoomController }
