export interface Params {
	/** Feedback instance id */
	feedbackid: number | null;
	/** Group id, 0 means that the function will determine the user group. */
	groupid?: number | null;
	/** Sort param, must be firstname, lastname or lastaccess (default). */
	sort?: string | null;
	/** The page of records to return. */
	page?: number | null;
	/** The number of records to return per page. */
	perpage?: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
}

export interface ReturnsUsersItem {
	/** Course id */
	courseid: number | null;
	/** The user id */
	userid: number | null;
	/** User full name */
	fullname: string | null;
	/** If the user has started the attempt */
	started: boolean | null;
}

export type ReturnsUsers = ReturnsUsersItem[];

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
	users: ReturnsUsers;
	/** Total number of non respondents */
	total: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
