export interface Params {
	/** Feedback instance id. */
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
	/** Whether the user can view the analysis or not. */
	canviewanalysis: boolean | null;
	/** Whether the user can complete the feedback or not. */
	cancomplete: boolean | null;
	/** Whether the user can submit the feedback or not. */
	cansubmit: boolean | null;
	/** Whether the user can delete submissions or not. */
	candeletesubmissions: boolean | null;
	/** Whether the user can view the feedback reports or not. */
	canviewreports: boolean | null;
	/** Whether the user can edit feedback items or not. */
	canedititems: boolean | null;
	/** Whether the feedback has questions or not. */
	isempty: boolean | null;
	/** Whether the feedback has active access time restrictions or not. */
	isopen: boolean | null;
	/** Whether the feedback is already submitted or not. */
	isalreadysubmitted: boolean | null;
	/** Whether the feedback is anonymous or not. */
	isanonymous: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
