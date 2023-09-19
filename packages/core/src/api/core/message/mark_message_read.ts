export interface Params {
	/** id of the message in the messages table */
	messageid: number | null;
	/** timestamp for when the message should be marked read */
	timeread?: number | null;
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
	/** the id of the message in the messages table */
	messageid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
