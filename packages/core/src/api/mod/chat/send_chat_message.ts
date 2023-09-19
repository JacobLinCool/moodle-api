export interface Params {
	/** chat session id (obtained via mod_chat_login_user) */
	chatsid: string | null;
	/** the message text */
	messagetext: string | null;
	/** the beep id */
	beepid?: string | null;
}

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
	/** message sent id */
	messageid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
