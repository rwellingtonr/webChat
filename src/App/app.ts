import express from "express"
import cors from "cors"
import { createServer } from "http"
import { routes } from "../Router/routes"
import "dotenv/config"
import "../Database/connection"
import { Server } from "socket.io"
import path from "path"

// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(routes)
// Set static folder
app.use(express.static(path.join(__dirname, "../public")))

/*Server with http method*/

const serverHttp = createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
})

export { serverHttp, io }
