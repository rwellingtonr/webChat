import moment from "moment"
import { IFormatMessage } from "../Interface"

const formatMessage = (username: string, text: string): IFormatMessage => {
  const hora = moment().format("h:mm a")

  return {
    username,
    text,
    time: hora,
  }
}
export { formatMessage }
