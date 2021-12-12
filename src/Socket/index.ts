import { io } from "../App/app"
import { IUsers } from "../Interface"
import { formatMessage } from "../Utils/messages"
import { setUserInChat } from "../Utils/RedisMethods/pushData"
//import { getUserInChat } from "../Utils/RedisMethods/retrievers"

const botName = "Robozinho"

// Run when client connects
io.on("connect", (socket) => {
  socket.on("joinRoom", async ({ roomId, user }: IUsers) => {
    socket.join(roomId)
    console.log(`Room id: ${roomId}`)

    // Welcome current user
    socket.emit("message", formatMessage(user, "Welcome to ChatCord!"))
    const userData = {
      id: socket.id,
      roomId,
      user,
    }
    await setUserInChat(roomId, userData)
    // Broadcast when a user connects
    socket.broadcast
      .to(roomId)
      .emit("message", formatMessage(botName, ` ${user} has joined the chat`))

    // Send users and room info
    io.to(roomId).emit("roomUsers", {
      room: roomId,
      users: user,
    })
  })
  socket.on("front-msg", ({ roomId }) => {
    console.log(`Mensagem recebida do front-end: ${roomId} `)
  })
  // Listen for chatMessage
  socket.on("chatMessage", async (data) => {
    const { room, msg } = data
    io.to(room).emit(
      "message",
      formatMessage("nome teste", `Message ${msg} - room: ${room}`)
    )
  })

  // Runs when client disconnects
  /*  socket.on("disconnect", () => {
    const user = userLeave(socket.id)

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, ` ${user.username} has left the chat`)
      )

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      })
    }
  })*/
})
