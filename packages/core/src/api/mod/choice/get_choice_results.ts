export interface Params {
	/** choice instance id */
	choiceid: number | null;
}

/**
 * User responses
 */
export interface ReturnsOptionsItemUserresponsesItem {
	/** user id */
	userid: number | null;
	/** user full name */
	fullname: string | null;
	/** profile user image url */
	profileimageurl: string | null;
	/** answer id */
	answerid: number | null;
	/** time of modification */
	timemodified: number | null;
}

export type ReturnsOptionsItemUserresponses = ReturnsOptionsItemUserresponsesItem[];

/**
 * Options
 */
export interface ReturnsOptionsItem {
	/** choice instance id */
	id: number | null;
	/** text of the choice */
	text: string | null;
	/** maximum number of answers */
	maxanswer: number | null;
	userresponses: ReturnsOptionsItemUserresponses;
	/** number of users answers */
	numberofuser: number | null;
	/** percentage of users answers */
	percentageamount: number | null;
}

export type ReturnsOptions = ReturnsOptionsItem[];

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
	options: ReturnsOptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
