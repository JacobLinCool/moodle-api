export interface Params {
	/** id of the course module */
	cmid: number | null;
	/** id of the group */
	groupid?: number | null;
	/** whether to return only active users or all. */
	onlyactive?: boolean | null;
}

export interface ReturnsUsersItem {
	/** ID of the user */
	id: number | null;
	/** The location of the users larger image */
	profileimage: string | null;
	/** The full name of the user */
	fullname: string | null;
	/** The first name(s) of the user */
	firstname: string | null;
	/** The family name of the user */
	lastname: string | null;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
