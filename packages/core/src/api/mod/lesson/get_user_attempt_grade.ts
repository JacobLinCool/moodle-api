export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** lesson attempt number */
	lessonattempt: number | null;
	/** the user id (empty for current user) */
	userid?: number | null;
}

/**
 * Attempt grade
 */
export interface ReturnsGrade {
	/** Number of questions answered */
	nquestions: number | null;
	/** Number of question attempts */
	attempts: number | null;
	/** Max points possible */
	total: number | null;
	/** Points earned by student */
	earned: number | null;
	/** Calculated percentage grade */
	grade: number | null;
	/** Number of manually graded questions */
	nmanual: number | null;
	/** Point value for manually graded questions */
	manualpoints: number | null;
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
	/** Attempt grade */
	grade: ReturnsGrade;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
