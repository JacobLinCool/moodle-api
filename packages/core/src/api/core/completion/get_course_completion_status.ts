export interface Params {
	/** Course ID */
	courseid: number | null;
	/** User ID */
	userid: number | null;
}

/**
 * details
 */
export interface ReturnsCompletionstatusCompletionsItemDetails {
	/** Type description */
	type: string | null;
	/** Criteria description */
	criteria: string | null;
	/** Requirement description */
	requirement: string | null;
	/** Status description, can be anything */
	status: string | null;
}

/**
 * Completions
 */
export interface ReturnsCompletionstatusCompletionsItem {
	/** Completion criteria type */
	type: number | null;
	/** Completion criteria Title */
	title: string | null;
	/** Completion status (Yes/No) a % or number */
	status: string | null;
	/** Completion status (true/false) */
	complete: boolean | null;
	/** Timestamp for criteria completetion */
	timecompleted: number | null;
	/** details */
	details: ReturnsCompletionstatusCompletionsItemDetails;
}

export type ReturnsCompletionstatusCompletions = ReturnsCompletionstatusCompletionsItem[];

/**
 * Course status
 */
export interface ReturnsCompletionstatus {
	/** true if the course is complete, false otherwise */
	completed: boolean | null;
	/** aggregation method 1 means all, 2 means any */
	aggregation: number | null;
	completions: ReturnsCompletionstatusCompletions;
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

/**
 * Course completion status
 */
export interface Returns {
	/** Course status */
	completionstatus: ReturnsCompletionstatus;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
