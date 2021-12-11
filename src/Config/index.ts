import Redis from "ioredis"
import { dbRedis } from "./redisConfig"

const ioredis = new Redis(dbRedis)

ioredis.on("connect", (): void => {
  console.log("Redis connected!")
})

ioredis.on("ready", (): void => {
  console.log("Redis is ready!")
})
ioredis.on("error", (err): void => {
  console.error(`Error: ${err}  `)
})

ioredis.on("close", (): void => {
  console.log("Redis is closed")
})

ioredis.on("reconnecting", (): void => {
  console.log("Trying to reconnect...")
})

ioredis.on("end", (): void => {
  console.log("Application has ended")
})

export { ioredis }
