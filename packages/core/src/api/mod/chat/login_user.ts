export interface Params {
	/** chat instance id */
	chatid: number | null;
	/** group id, 0 means that the function will determine the user group */
	groupid?: number | null;
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
	/** unique chat session id */
	chatsid: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
