export interface Params {
	/** quiz instance id */
	quizid: number | null;
	/** user id */
	userid?: number | null;
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
	/** Whether the user has a grade on the given quiz. */
	hasgrade: boolean | null;
	/** The grade (only if the user has a grade). */
	grade: number | null;
	/** The grade to pass the quiz (only if set). */
	gradetopass: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
