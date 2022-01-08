import Redis from "ioredis"
import { redisConfig } from "./config"

const ioredis = new Redis(redisConfig)

ioredis.on("connect", (): void => console.log("Connected"))

ioredis.on("error", (e): void => console.log(`Redis error: ${e}`))

ioredis.on("reconnecting", (): void => console.log("Reconnecting redis ..."))

ioredis.on("end", (): void => console.log("Redis ended"))

export { ioredis }
