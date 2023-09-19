export interface Params {
	/** chat session id (obtained via mod_chat_login_user) */
	chatsid: string | null;
}

export interface ReturnsUsersItem {
	/** user id */
	id: number | null;
	/** user full name */
	fullname: string | null;
	/** user picture URL */
	profileimageurl: string | null;
}

/**
 * list of users
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
	/** list of users */
	users: ReturnsUsers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
