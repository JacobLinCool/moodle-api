/**
 * List for course module ids
 */
export type ParamsCmids = (number | null)[];

export interface Params {
	/** OAuth 2 issuer ID */
	issuerid: number | null;
	/** Course ID */
	courseid: number | null;
	/** Share format */
	shareformat: number | null;
	/** List for course module ids */
	cmids?: ParamsCmids;
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
	/** Status: true if success */
	status: boolean | null;
	/** Resource URL from MoodleNet */
	resourceurl: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
