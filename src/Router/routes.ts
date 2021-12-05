import { Router } from "express"
import { sendMessageController } from "../Controller/teste"

const routes = Router()

routes.post("/message", new sendMessageController().handle)

export { routes }
