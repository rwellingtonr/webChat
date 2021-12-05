import { Schema, model } from "mongoose"

interface IMessage {
  user: string
  message: string
  date: Date
}

const messages = new Schema<IMessage>({
  user: { type: String, required: true },
  message: { type: String, required: true },
  date: Date,
})

// 3. Create a Model.
const MessageModel = model<IMessage>("User", messages)

export { MessageModel }
