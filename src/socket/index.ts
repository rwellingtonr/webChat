import { io } from "../app/app"
import { IDataMsg } from "../interface"
import { formatMessage } from "../utils/messages"
import { listMessages } from "../utils/redisMethods/getFunc"
import { setData, setMessages } from "../utils/redisMethods/setFunc"

type SendMsg = {
	user: string
	room: string
}

io.on("connection", (socket) => {
	socket.on("joinRoom", async ({ user, room }: SendMsg) => {
		try {
			socket.join(room)

			const retrievedMsg = await listMessages(room)
			if (retrievedMsg[0]) {
				const dataToSet: IDataMsg = { ...retrievedMsg[0], user, room }
				await setData(room, dataToSet)
			}
			// Broadcast when a user connects
			io.to(room).emit("new.msg", retrievedMsg)
		} catch (error) {
			throw new Error(`Erro: ${error}`)
		}
	})

	// Listen for chatMessage
	socket.on("user.msg", async (dataMessage: IDataMsg) => {
		console.log(dataMessage)
		const { room } = dataMessage
		io.to(room).emit("new.msg", { dataMessage })
		const message = formatMessage(dataMessage)
		await setMessages(room, message)
	})

	// Runs when client disconnects
	socket.on("disconnect", (reason) => {
		console.log(`Disconnected reason: ${reason}`)
	})
})
