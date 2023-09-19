export interface Params {
	/** Feedback instance id */
	feedbackid: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
}

export interface ReturnsCompleted {
	/** The record id. */
	id: number;
	/** The feedback instance id this records belongs to. */
	feedback: number;
	/** The user who completed the feedback (0 for anonymous). */
	userid: number;
	/** The last time the feedback was completed. */
	timemodified: number;
	/** The response number (used when shuffling anonymous responses). */
	random_response: number;
	/** Whether is an anonymous response. */
	anonymous_response: number;
	/** The course id where the feedback was completed. */
	courseid: number;
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
	completed: ReturnsCompleted;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
