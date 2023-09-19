export interface Params {
	/** User name */
	username?: string | null;
	/** User email */
	email?: string | null;
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
	/** The returned status of the process: dataerror: Error in the sent data (username or email). More information in warnings field. emailpasswordconfirmmaybesent: Email sent or not (depends on user found in database). emailpasswordconfirmnotsent: Failure, user not found. emailpasswordconfirmnoemail: Failure, email not found. emailalreadysent: Email already sent. emailpasswordconfirmsent: User pending confirmation. emailresetconfirmsent: Email sent.  */
	status: string | null;
	/** Important information for the user about the process. */
	notice: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
