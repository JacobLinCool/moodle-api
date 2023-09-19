export interface Params {
	/** submission id. */
	submissionid: number | null;
	/** The feedback for the author. */
	feedbacktext?: string | null;
	/** The feedback format for text. */
	feedbackformat?: number | null;
	/** Publish the submission for others?. */
	published?: boolean | null;
	/** The new submission grade. */
	gradeover?: string | null;
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
	/** status: true if the submission was evaluated, false otherwise. */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
