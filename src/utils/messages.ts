import moment from "moment"

type FormatMessage = {
  username: string
  text: string
  time: string
}

export function formatMessage(username: string, text: string): FormatMessage {
  const hora = moment().format("h:mm a")

  return {
    username,
    text,
    time: hora,
  }
}
