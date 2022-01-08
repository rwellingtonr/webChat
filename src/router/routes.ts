import { Router } from "express"
import { sendMessageController } from "../Controller/sendMessageController"

const routes = Router()

routes.post("/message", new sendMessageController().handle)

export { routes }
