/* What this Service does... */
import { io } from "../app/app"
import { IMsgBody } from "../interface"
import { formatMessage } from "../utils/messages"
import { getData } from "../utils/redisMethods/getFunc"
import { setData, setMessages } from "../utils/redisMethods/setFunc"

const sendMessaService = async (data: IMsgBody) => {
	const dataFormated = formatMessage(data)
	const { room } = dataFormated
	const exitClient = await getData(room)

	if (!exitClient) {
		await setData(room, dataFormated)
		io.emit("new.chat", { dataFormated })
		console.log("created new chat room")
	} else {
		io.to(room).emit("new.msg", { dataFormated })
		console.log("sent message")
	}
	await setMessages(room, dataFormated)
	return dataFormated
}

export { sendMessaService }
