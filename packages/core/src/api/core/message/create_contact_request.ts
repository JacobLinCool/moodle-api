export interface Params {
	/** The id of the user making the request */
	userid: number | null;
	/** The id of the user being requested */
	requesteduserid: number | null;
}

/**
 * request record
 */
export interface ReturnsRequest {
	/** Message id */
	id: number | null;
	/** User from id */
	userid: number | null;
	/** User to id */
	requesteduserid: number | null;
	/** Time created */
	timecreated: number | null;
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
	/** request record */
	request: ReturnsRequest;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
