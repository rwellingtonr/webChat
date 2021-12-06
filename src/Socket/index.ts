import { io } from "../App/app"
import { Users } from "../Interface"
import { formatMessage } from "../utils/messages"
import {
  getCurrentUser,
  getRoomUsers,
  userJoin,
  userLeave,
} from "../utils/users"

const botName = "Robozinho"

// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }: Users) => {
    const user = userJoin(socket.id, username, room)

    socket.join(user.room)

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"))

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, ` ${user.username} has joined the chat`)
      )

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    })
  })

  // Listen for chatMessage
  socket.on("chatMessage", (msg: string) => {
    const user = getCurrentUser(socket.id)

    io.to(user.room).emit("message", formatMessage(user.username, msg))
  })

  // Runs when client disconnects
  socket.on("disconnect", () => {
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
  })
})
