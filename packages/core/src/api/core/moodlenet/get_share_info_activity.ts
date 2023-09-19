export interface Params {
	/** The cmid of the activity */
	cmid: number | null;
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
	/** Activity name */
	name: string | null;
	/** Activity type */
	type: string | null;
	/** MoodleNet server */
	server: string | null;
	/** Support page URL */
	supportpageurl: string | null;
	/** MoodleNet issuer id */
	issuerid: number | null;
	/** status: true if success */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
