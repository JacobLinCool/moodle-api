export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** optional password (the lesson may be protected) */
	password?: string | null;
	/** page id to continue from (only when continuing an attempt) */
	pageid?: number | null;
	/** if we want to review just after finishing */
	review?: boolean | null;
}

/**
 * The lesson generated messages
 */
export interface ReturnsMessagesItem {
	/** Message. */
	message: string | null;
	/** Message type: usually a CSS identifier like: success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess */
	type: string | null;
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
