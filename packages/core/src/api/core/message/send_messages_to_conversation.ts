export interface ParamsMessagesItem {
	/** the text of the message */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	textformat?: number | null;
}

export type ParamsMessages = ParamsMessagesItem[];

export interface Params {
	/** id of the conversation */
	conversationid: number | null;
	messages: ParamsMessages;
}

export interface ReturnsItem {
	/** The id of the message */
	id: number | null;
	/** The id of the user who sent the message */
	useridfrom: number | null;
	/** The text of the message */
	text: string | null;
	/** The timecreated timestamp for the message */
	timecreated: number | null;
}

export type Returns = ReturnsItem[];
