export interface Params {
	/** Lesson instance id. */
	lessonid: number | null;
	/** Optional password (the lesson may be protected). */
	password?: string | null;
	/** If the user run out of time. */
	outoftime?: boolean | null;
	/** If we want to review just after finishing (1 hour margin). */
	review?: boolean | null;
}

export interface ReturnsDataItem {
	/** Data name. */
	name: string | null;
	/** Data value. */
	value: string | null;
	/** Data message (translated string). */
	message: string | null;
}

/**
 * The EOL page information data.
 */
export type ReturnsData = ReturnsDataItem[];

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
	/** The EOL page information data. */
	data: ReturnsData;
	messages: ReturnsMessages;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
