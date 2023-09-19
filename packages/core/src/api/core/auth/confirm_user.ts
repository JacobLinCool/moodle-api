export interface Params {
	/** User name */
	username: string | null;
	/** Confirmation secret */
	secret: string | null;
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
	/** True if the user was confirmed, false if he was already confirmed */
	success: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
