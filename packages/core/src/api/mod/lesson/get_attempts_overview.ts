export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** group id, 0 means that the function will determine the user group */
	groupid?: number | null;
}

export interface ReturnsDataStudentsItemAttemptsItem {
	/** Attempt number. */
	try: number | null;
	/** Attempt grade. */
	grade: number | null;
	/** Attempt time started. */
	timestart: number | null;
	/** Attempt last time continued. */
	timeend: number | null;
	/** Attempt time ended. */
	end: number | null;
}

export type ReturnsDataStudentsItemAttempts = ReturnsDataStudentsItemAttemptsItem[];

export interface ReturnsDataStudentsItem {
	/** User id. */
	id: number | null;
	/** User full name. */
	fullname: string | null;
	/** Best grade. */
	bestgrade: number | null;
	attempts: ReturnsDataStudentsItemAttempts;
}

/**
 * Students data, including attempts.
 */
export type ReturnsDataStudents = ReturnsDataStudentsItem[];

/**
 * Attempts overview data (empty for no attemps).
 */
export interface ReturnsData {
	/** True if the lesson was scored. */
	lessonscored: boolean | null;
	/** Number of attempts. */
	numofattempts: number | null;
	/** Average score. */
	avescore: number | null;
	/** High score. */
	highscore: number | null;
	/** Low score. */
	lowscore: number | null;
	/** Average time (spent in taking the lesson). */
	avetime: number | null;
	/** High time. */
	hightime: number | null;
	/** Low time. */
	lowtime: number | null;
	/** Students data, including attempts. */
	students: ReturnsDataStudents;
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
	/** Attempts overview data (empty for no attemps). */
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
