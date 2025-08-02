export interface Params {
	/** instance id of guest enrolment plugin */
	instanceid: number | null;
	/** the course password */
	password: string | null;
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
	/** Whether the password was successfully validated */
	validated: boolean | null;
	/** Password hint (if enabled) */
	hint: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
