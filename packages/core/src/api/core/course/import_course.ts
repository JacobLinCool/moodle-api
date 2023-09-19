export interface ParamsOptionsItem {
	/** The backup option name: "activities" (int) Include course activites (default to 1 that is equal to yes), "blocks" (int) Include course blocks (default to 1 that is equal to yes), "filters" (int) Include course filters  (default to 1 that is equal to yes) */
	name: string | null;
	/** the value for the option 1 (yes) or 0 (no) */
	value: string | null;
}

/**
 * Course import options
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** the id of the course we are importing from */
	importfrom: number | null;
	/** the id of the course we are importing to */
	importto: number | null;
	/** whether to delete the course content where we are importing to (default to 0 = No) */
	deletecontent?: number | null;
	/** Course import options */
	options?: ParamsOptions;
}
