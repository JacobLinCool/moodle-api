export interface Params {
	/** The course id */
	courseid: number | null;
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
	/** Course short name */
	name: string | null;
	/** Course type */
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
