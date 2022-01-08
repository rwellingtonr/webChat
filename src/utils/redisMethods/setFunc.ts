import { ioredis } from "../../cache"
import { IDataMsg } from "../../interface"

export const setData = async (key: string, data: IDataMsg): Promise<string> => {
	const ttl = 600
	const stringfied = JSON.stringify(data)
	const setter = await ioredis.set(`Queue:${key}`, stringfied, "EX", ttl)
	return setter
}

export const setMessages = async (key: string, data: IDataMsg): Promise<number> => {
	const stringfied = JSON.stringify(data)
	const rpush = await ioredis.rpush(key, stringfied)
	return rpush
}
