import "dotenv/config"
const { REDIS_PORT, REDIS_HOST, REDIS_FAMILY } = process.env

export const redisConfig = {
	port: +REDIS_PORT, // Redis port
	host: REDIS_HOST, // Redis host
	family: +REDIS_FAMILY,
	retryStrategy(times: number) {
		const delay = Math.min(times * 50, 2000)
		return delay
	},
}
