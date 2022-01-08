import express from "express"
import cors from "cors"
import { createServer } from "http"
import { routes } from "../router/routes"
import { Server } from "socket.io"
import { ioredis } from "../cache"
import { createAdapter } from "@socket.io/redis-adapter"

import "dotenv/config"

// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(routes)

/*Server with http method*/
const serverHttp = createServer(app)

const pubClient = ioredis
const subClient = pubClient.duplicate()
const io = new Server(serverHttp, {
	adapter: createAdapter(pubClient, subClient),
	cors: {
		origin: "*",
	},
})

export { serverHttp, io }
