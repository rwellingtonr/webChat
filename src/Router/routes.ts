import { Router } from "express"
import { createRoomController } from "../Controller/createRoomController"
import { sendMessageController } from "../Controller/sendMessageController"

const routes = Router()

routes.post("/message", new sendMessageController().handle)

routes.post("/createRoom", new createRoomController().handle)

export { routes }
