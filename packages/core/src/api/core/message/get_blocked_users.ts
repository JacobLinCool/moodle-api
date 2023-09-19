export interface Params {
	/** the user whose blocked users we want to retrieve */
	userid: number | null;
}

export interface ReturnsUsersItem {
	/** User ID */
	id: number | null;
	/** User full name */
	fullname: string | null;
	/** User picture URL */
	profileimageurl: string | null;
}

/**
 * List of blocked users
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
	/** List of blocked users */
	users: ReturnsUsers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
