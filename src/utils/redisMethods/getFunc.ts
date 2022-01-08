import { ioredis } from "../../cache"
import { IDataMsg } from "../../interface"

export const getData = async (key: string): Promise<string | null> => {
	const getter = await ioredis.get(`Queue:${key}`)
	return getter ? JSON.parse(getter) : null
}

const lrangeFunc = async (key: string): Promise<string[]> => {
	const lrange = await ioredis.lrange(key, 0, -1)
	return lrange
}
export const listMessages = async (id: string): Promise<IDataMsg[]> => {
	const messages = await lrangeFunc(id)
	if (messages[0]) {
		const array: IDataMsg[] = messages.map((message) => JSON.parse(message))
		return array
	} else {
		throw new Error("Error to retrieve messages")
	}
}
