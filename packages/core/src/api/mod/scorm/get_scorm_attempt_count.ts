export interface Params {
	/** SCORM instance id */
	scormid: number | null;
	/** User id */
	userid: number | null;
	/** Ignores attempts that haven't reported a grade/completion */
	ignoremissingcompletion?: boolean | null;
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
	/** Attempts count */
	attemptscount: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
