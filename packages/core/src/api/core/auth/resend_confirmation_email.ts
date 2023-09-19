export interface Params {
	/** Username. */
	username: string | null;
	/** Plain text password. */
	password: string | null;
	/** Redirect the user to this site url after confirmation. */
	redirect?: string | null;
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
	/** True if the confirmation email was sent, false otherwise. */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
