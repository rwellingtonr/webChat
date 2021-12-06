import { serverHttp } from "./App/app"
import "./Socket"

const { SERVER_PORT } = process.env

serverHttp.listen(SERVER_PORT, (): void => {
  console.log(`Running on port: ${SERVER_PORT}`)
})
