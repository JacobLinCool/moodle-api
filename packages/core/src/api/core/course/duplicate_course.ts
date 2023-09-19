export interface ParamsOptionsItem {
	/** The backup option name: "activities" (int) Include course activites (default to 1 that is equal to yes), "blocks" (int) Include course blocks (default to 1 that is equal to yes), "filters" (int) Include course filters  (default to 1 that is equal to yes), "users" (int) Include users (default to 0 that is equal to no), "enrolments" (int) Include enrolment methods (default to 1 - restore only with users), "role_assignments" (int) Include role assignments  (default to 0 that is equal to no), "comments" (int) Include user comments  (default to 0 that is equal to no), "userscompletion" (int) Include user course completion information  (default to 0 that is equal to no), "logs" (int) Include course logs  (default to 0 that is equal to no), "grade_histories" (int) Include histories  (default to 0 that is equal to no) */
	name: string | null;
	/** the value for the option 1 (yes) or 0 (no) */
	value: string | null;
}

/**
 * Course duplication options
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** course to duplicate id */
	courseid: number | null;
	/** duplicated course full name */
	fullname: string | null;
	/** duplicated course short name */
	shortname: string | null;
	/** duplicated course category parent */
	categoryid: number | null;
	/** duplicated course visible, default to yes */
	visible?: number | null;
	/** Course duplication options */
	options?: ParamsOptions;
}

export interface Returns {
	/** course id */
	id: number | null;
	/** short name */
	shortname: string | null;
}
