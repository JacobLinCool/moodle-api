export interface Params {
	/** Chat instance id. */
	chatid: number | null;
	/** Get messages from users in this group. 0 means that the function will determine the user group */
	groupid?: number | null;
	/** Whether to show completed sessions or not. */
	showall?: boolean | null;
}

export interface ReturnsSessionsItemSessionusersItem {
	/** User id. */
	userid: number | null;
	/** Number of messages in the session. */
	messagecount: number | null;
}

/**
 * Session users.
 */
export type ReturnsSessionsItemSessionusers = ReturnsSessionsItemSessionusersItem[];

export interface ReturnsSessionsItem {
	/** Session start time. */
	sessionstart: number | null;
	/** Session end time. */
	sessionend: number | null;
	/** Session users. */
	sessionusers: ReturnsSessionsItemSessionusers;
	/** Whether the session is completed or not. */
	iscomplete: boolean | null;
}

/**
 * list of users
 */
export type ReturnsSessions = ReturnsSessionsItem[];

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
	/** list of users */
	sessions: ReturnsSessions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
