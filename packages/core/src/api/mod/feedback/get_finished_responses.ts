export interface Params {
	/** Feedback instance id. */
	feedbackid: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
}

export interface ReturnsResponsesItem {
	/** The record id. */
	id: number;
	/** The course id this record belongs to. */
	course_id: number;
	/** The item id that was responded. */
	item: number;
	/** Reference to the feedback_completed table. */
	completed: number;
	/** Old field - not used anymore. */
	tmp_completed: number;
	/** The response value. */
	value: string;
}

export type ReturnsResponses = ReturnsResponsesItem[];

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
	responses: ReturnsResponses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
