export interface Params {
	/** Workshop instance id. */
	workshopid: number | null;
	/** User id (empty or 0 for current user). */
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
	/** The assessment raw (numeric) grade. */
	assessmentrawgrade: number | null;
	/** The assessment string grade. */
	assessmentlongstrgrade: string | null;
	/** Whether the grade is hidden or not. */
	assessmentgradehidden: boolean | null;
	/** The submission raw (numeric) grade. */
	submissionrawgrade: number | null;
	/** The submission string grade. */
	submissionlongstrgrade: string | null;
	/** Whether the grade is hidden or not. */
	submissiongradehidden: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
