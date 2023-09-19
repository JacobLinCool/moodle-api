export interface ParamsMessagesItem {
	/** id of the user to send the private message */
	touserid: number | null;
	/** the text of the message */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	textformat?: number | null;
	/** your own client id for the message. If this id is provided, the fail message id will be returned to you */
	clientmsgid: string | null;
}

export type ParamsMessages = ParamsMessagesItem[];

export interface Params {
	messages: ParamsMessages;
}

export interface ReturnsItem {
	/** test this to know if it succeeds:  id of the created message if it succeeded, -1 when failed */
	msgid: number | null;
	/** your own id for the message */
	clientmsgid: string | null;
	/** error message - if it failed */
	errormessage: string | null;
	/** The text of the message */
	text: string | null;
	/** The timecreated timestamp for the message */
	timecreated: number | null;
	/** The conversation id for this message */
	conversationid: number | null;
	/** The user id who sent the message */
	useridfrom: number | null;
	/** If the user can delete messages in the conversation for all users */
	candeletemessagesforallusers?: boolean | null;
}

export type Returns = ReturnsItem[];
