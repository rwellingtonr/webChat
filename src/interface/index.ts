export interface IMsgBody {
	client: string
	content: Content
	sendAt: string
}
export interface IDataMsg {
	client?: string
	user?: string
	content: Content
	sendAt: string
	room?: string
}
type Content = {
	type: string
	message: string
}
