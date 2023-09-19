export interface Params {
	/** Course Id */
	courseid: number | null;
	/** Group Id */
	groupid?: number | null;
}

export interface ReturnsUsersItem {
	/** ID of the user */
	id: number | null;
	/** The location of the users larger image */
	profileimage: string | null;
	/** The full name of the user */
	fullname: string | null;
	/** An email address - allow email as root@localhost */
	email: string | null;
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
