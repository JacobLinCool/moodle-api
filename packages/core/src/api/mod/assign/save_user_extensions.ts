/**
 * 1 or more user ids
 */
export type ParamsUserids = (number | null)[];

/**
 * 1 or more extension dates (timestamp)
 */
export type ParamsDates = (number | null)[];

export interface Params {
	/** The assignment id to operate on */
	assignmentid: number | null;
	/** 1 or more user ids */
	userids: ParamsUserids;
	/** 1 or more extension dates (timestamp) */
	dates: ParamsDates;
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
