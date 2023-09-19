export interface Params {
	/** Chat instance id. */
	chatid: number | null;
	/** The session start time (timestamp). */
	sessionstart: number | null;
	/** The session end time (timestamp). */
	sessionend: number | null;
	/** Get messages from users in this group. 0 means that the function will determine the user group */
	groupid?: number | null;
}

export interface ReturnsMessagesItem {
	/** The message record id. */
	id: number;
	/** The chat id. */
	chatid: number;
	/** The user who wrote the message. */
	userid: number;
	/** The group this message belongs to. */
	groupid: number;
	/** Whether is a system message or not. */
	issystem: boolean;
	/** The message text. */
	message: string;
	/** The message timestamp (indicates when the message was sent). */
	timestamp: number;
}

export type ReturnsMessages = ReturnsMessagesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	messages: ReturnsMessages;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
