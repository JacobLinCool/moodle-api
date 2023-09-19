export interface Params {
	/** The id of the user who is blocking */
	userid: number | null;
	/** The id of the user being blocked */
	blockeduserid: number | null;
}

/**
 * warning
 */
export interface ReturnsItem {
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
export type Returns = ReturnsItem[];
