export type ParamsUserids = (number | null)[];

export interface Params {
	userids: ParamsUserids;
}

export interface ReturnsUsersItem {
	/** userid id */
	userid: number | null;
	/** 1 if the user preferences have been configured and 0 if not */
	configured: number | null;
}

/**
 * list of preferences by user
 */
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
	/** list of preferences by user */
	users: ReturnsUsers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
