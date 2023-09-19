/**
 * Array of response ids
 */
export type ParamsResponses = (number | null)[];

export interface Params {
	/** choice instance id */
	choiceid: number | null;
	/** Array of response ids */
	responses: ParamsResponses;
}

/**
 * Answers
 */
export interface ReturnsAnswersItem {
	/** answer id */
	id: number | null;
	/** choiceid */
	choiceid: number | null;
	/** user id */
	userid: number | null;
	/** optionid */
	optionid: number | null;
	/** time of last modification */
	timemodified: number | null;
}

export type ReturnsAnswers = ReturnsAnswersItem[];

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
	answers: ReturnsAnswers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
