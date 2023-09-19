/**
 * List of grouping id. A grouping id is an integer.
 */
export type ParamsGroupingids = (number | null)[];

export interface Params {
	/** List of grouping id. A grouping id is an integer. */
	groupingids: ParamsGroupingids;
	/** return associated groups */
	returngroups?: boolean | null;
}

export interface ReturnsItemGroupsItem {
	/** group record id */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** group enrol secret phrase */
	enrolmentkey: string | null;
	/** id number */
	idnumber: string | null;
}

/**
 * optional groups
 */
export type ReturnsItemGroups = ReturnsItemGroupsItem[];

export interface ReturnsItem {
	/** grouping record id */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** grouping description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** id number */
	idnumber: string | null;
	/** optional groups */
	groups: ReturnsItemGroups;
}

export type Returns = ReturnsItem[];
