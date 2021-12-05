import express from "express"
import cors from "cors"
import { createServer } from "http"
import { routes } from "../Router/routes"
import "dotenv/config"
import "../Database/connection"
import { Server } from "socket.io"

// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(routes)
//just for test
app.get("/", (req, res) => {
  return res.send("working")
})
/*Server with http method*/
const serverHttp = createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
})
// Event listener
io.on("connection", (socket) => {
  console.log(`User connected on socket ${socket.id}`)
})

export { serverHttp, io }
