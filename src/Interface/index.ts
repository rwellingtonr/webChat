export interface IUsers {
  id?: string
  user: string
  roomId: string
}
export interface IUserData {
  user: { name: string; message: string }
  roomId: string
}

export interface IFormatMessage {
  username: string
  text: string
  time: string
}
