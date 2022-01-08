import moment from "moment"
import { v4 as uuidv4 } from "uuid"
import { IDataMsg } from "../interface"

export function formatMessage(data: IDataMsg): IDataMsg {
	const time = moment().format("h:mm:ss a")
	if (!data.room) {
		return { ...data, sendAt: time, room: uuidv4() }
	} else {
		return { ...data, sendAt: time }
	}
}
