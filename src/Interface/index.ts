export interface Users {
  id?: string
  username: string
  room: string
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
