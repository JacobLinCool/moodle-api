export interface Params {
	/** Id of the course */
	courseid: number | null;
	/** Enrolment key */
	password?: string | null;
	/** Instance id of self enrolment plugin. */
	instanceid?: number | null;
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
	/** status: true if the user is enrolled, false otherwise */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
