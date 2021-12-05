import { serverHttp } from "./App/app"

const { SERVER_PORT } = process.env

serverHttp.listen(SERVER_PORT, (): void => {
  console.log(`Running on port: ${SERVER_PORT}`)
})
