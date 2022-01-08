import { ioredis } from "../../cache"

export const getData = async (key: string): Promise<string | null> => {
	const getter = await ioredis.get(`Queue:${key}`)
	return getter ? JSON.parse(getter) : null
}
export const listMessages = async (key: string): Promise<string[]> => {
	const lrange = await ioredis.lrange(key, 0, -1)
	return lrange
}
