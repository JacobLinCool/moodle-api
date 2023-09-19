/**
 * Array of response ids, empty for deleting all the current user responses.
 */
export type ParamsResponses = (number | null)[];

export interface Params {
	/** choice instance id */
	choiceid: number | null;
	/** Array of response ids, empty for deleting all the current user responses. */
	responses?: ParamsResponses;
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
	/** status, true if everything went right */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
