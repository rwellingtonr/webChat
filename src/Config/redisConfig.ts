import "dotenv/config"
const { REDIS_PORT, REDIS_HOST } = process.env
export const dbRedis = {
  port: Number(REDIS_PORT),
  host: REDIS_HOST,
  retryStrategy(times: number) {
    const delay = Math.min(times * 50, 2000)
    return delay
  },
}
