export interface Params {
	/** Instance id of guest enrolment plugin. */
	instanceid: number | null;
}

export interface ReturnsInstanceinfo {
	/** Id of course enrolment instance */
	id: number | null;
	/** Id of course */
	courseid: number | null;
	/** Type of enrolment plugin */
	type: string | null;
	/** Name of enrolment plugin */
	name: string | null;
	/** Is the enrolment enabled? */
	status: boolean | null;
	/** Is a password required? */
	passwordrequired: boolean | null;
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
	instanceinfo: ReturnsInstanceinfo;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
