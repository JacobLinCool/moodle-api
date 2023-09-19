export interface Params {
	/** quiz instance id */
	quizid: number | null;
	/** attempt id, 0 for the user last attempt if exists */
	attemptid?: number | null;
}

/**
 * list of reasons
 */
export type ReturnsPreventnewattemptreasons = (string | null)[];

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
	/** When the attempt must be submitted (determined by rules). */
	endtime: number | null;
	/** Whether there is no way the user will ever be allowed to attempt. */
	isfinished: boolean | null;
	/** whether a check is required before the user starts/continues his attempt. */
	ispreflightcheckrequired: boolean | null;
	/** list of reasons */
	preventnewattemptreasons: ReturnsPreventnewattemptreasons;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
