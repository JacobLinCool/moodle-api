export interface Params {
	/** chat session id (obtained via mod_chat_login_user) */
	chatsid: string | null;
	/** last time messages were retrieved (epoch time) */
	chatlasttime?: number | null;
}

export interface ReturnsMessagesItem {
	/** message id */
	id: number | null;
	/** user id */
	userid: number | null;
	/** true if is a system message (like user joined) */
	system: boolean | null;
	/** message text */
	message: string | null;
	/** timestamp for the message */
	timestamp: number | null;
}

/**
 * list of users
 */
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
	/** list of users */
	messages: ReturnsMessages;
	/** new last time */
	chatnewlasttime: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
