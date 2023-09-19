export interface Params {
	/** Id of course (empty or 0 for all the courses where the user is enrolled). */
	courseid?: number | null;
	/** Id of user (empty or 0 for current user). */
	userid?: number | null;
	/** returns only groups in the specified grouping */
	groupingid?: number | null;
}

export interface ReturnsGroupsItem {
	/** group record id */
	id: number | null;
	/** group name */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** id number */
	idnumber: string | null;
	/** course id */
	courseid: number | null;
}

export type ReturnsGroups = ReturnsGroupsItem[];

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
	groups: ReturnsGroups;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
