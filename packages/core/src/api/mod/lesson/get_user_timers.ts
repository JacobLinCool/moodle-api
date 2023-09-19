export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** the user id (empty for current user) */
	userid?: number | null;
}

/**
 * The timers
 */
export interface ReturnsTimersItem {
	/** The attempt id */
	id: number | null;
	/** The lesson id */
	lessonid: number | null;
	/** The user id */
	userid: number | null;
	/** First access time for a new timer session */
	starttime: number | null;
	/** Last access time to the lesson during the timer session */
	lessontime: number | null;
	/** If the lesson for this timer was completed */
	completed: number | null;
	/** Last modified time via webservices. */
	timemodifiedoffline: number | null;
}

export type ReturnsTimers = ReturnsTimersItem[];

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
	timers: ReturnsTimers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
