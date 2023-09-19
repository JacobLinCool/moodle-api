export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** lesson attempt number */
	attempt: number | null;
	/** only fetch correct attempts */
	correct?: boolean | null;
	/** only fetch attempts at the given page */
	pageid?: number | null;
	/** only fetch attempts of the given user */
	userid?: number | null;
}

/**
 * The question page attempts
 */
export interface ReturnsAttemptsItem {
	/** The attempt id */
	id: number | null;
	/** The attempt lessonid */
	lessonid: number | null;
	/** The attempt pageid */
	pageid: number | null;
	/** The user who did the attempt */
	userid: number | null;
	/** The attempt answerid */
	answerid: number | null;
	/** The lesson attempt number */
	retry: number | null;
	/** If it was the correct answer */
	correct: number | null;
	/** The complete user answer */
	useranswer: string | null;
	/** The time the question was seen */
	timeseen: number | null;
}

export type ReturnsAttempts = ReturnsAttemptsItem[];

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
	attempts: ReturnsAttempts;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
