export interface Params {
	/** Feedback instance id */
	feedbackid: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
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
	/** The next page to go (-1 if we were already in the last page). 0 for first page. */
	gopage: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
