import express from "express"
import cors from "cors"
import { createServer } from "http"
import { routes } from "../Router/routes"
import { Server, Socket } from "socket.io"
import { createAdapter } from "@socket.io/redis-adapter"
import path from "path"
import { ioredis } from "../Config"

import "dotenv/config"
import "../Database/connection"

// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(routes)
// Set static folder
app.use(express.static(path.join(__dirname, "../Public")))

/*Server with http method*/

const serverHttp = createServer(app)
const pubClient = ioredis
const subClient = pubClient.duplicate()

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
  adapter: createAdapter(pubClient, subClient),
})

io.on("connetion", (socket: Socket) => {
  console.log(`Socket id: ${socket.id}`)
})

export { serverHttp, io }
