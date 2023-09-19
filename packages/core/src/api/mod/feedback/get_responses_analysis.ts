export interface Params {
	/** Feedback instance id */
	feedbackid: number | null;
	/** Group id, 0 means that the function will determine the user group */
	groupid?: number | null;
	/** The page of records to return. */
	page?: number | null;
	/** The number of records to return per page */
	perpage?: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
}

export interface ReturnsAttemptsItemResponsesItem {
	/** Response id */
	id: number | null;
	/** Response name */
	name: string | null;
	/** Response ready for output */
	printval: string | null;
	/** Response raw value */
	rawval: string | null;
}

export type ReturnsAttemptsItemResponses = ReturnsAttemptsItemResponsesItem[];

export interface ReturnsAttemptsItem {
	/** Completed id */
	id: number | null;
	/** Course id */
	courseid: number | null;
	/** User who responded */
	userid: number | null;
	/** Time modified for the response */
	timemodified: number | null;
	/** User full name */
	fullname: string | null;
	responses: ReturnsAttemptsItemResponses;
}

export type ReturnsAttempts = ReturnsAttemptsItem[];

export interface ReturnsAnonattemptsItemResponsesItem {
	/** Response id */
	id: number | null;
	/** Response name */
	name: string | null;
	/** Response ready for output */
	printval: string | null;
	/** Response raw value */
	rawval: string | null;
}

export type ReturnsAnonattemptsItemResponses = ReturnsAnonattemptsItemResponsesItem[];

export interface ReturnsAnonattemptsItem {
	/** Completed id */
	id: number | null;
	/** Course id */
	courseid: number | null;
	/** Response number */
	number: number | null;
	responses: ReturnsAnonattemptsItemResponses;
}

export type ReturnsAnonattempts = ReturnsAnonattemptsItem[];

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
	attempts: ReturnsAttempts;
	/** Total responses count. */
	totalattempts: number | null;
	anonattempts: ReturnsAnonattempts;
	/** Total anonymous responses count. */
	totalanonattempts: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
