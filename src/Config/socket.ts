import { io } from "../App/app"

// Event listener
io.on("connection", (socket) => {
  console.log(`User connected on socket ${socket.id}`)
  socket.on("user", (user) => {
    console.log("Recebido ", user)
  })
})
