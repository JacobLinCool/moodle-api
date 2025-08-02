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

export interface ReturnsItemCustomfieldsItem {
	/** The name of the custom field */
	name: string | null;
	/** The shortname of the custom field - to be able to build the field class in the code */
	shortname: string | null;
	/** The type of the custom field - text field, checkbox... */
	type: string | null;
	/** The raw value of the custom field */
	valueraw: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ReturnsItemCustomfields = ReturnsItemCustomfieldsItem[];

export interface ReturnsItemGroupsItemCustomfieldsItem {
	/** The name of the custom field */
	name: string | null;
	/** The shortname of the custom field - to be able to build the field class in the code */
	shortname: string | null;
	/** The type of the custom field - text field, checkbox... */
	type: string | null;
	/** The raw value of the custom field */
	valueraw: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ReturnsItemGroupsItemCustomfields = ReturnsItemGroupsItemCustomfieldsItem[];

export interface ReturnsItemGroupsItem {
	/** group record id */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN) */
	descriptionformat: number | null;
	/** group enrol secret phrase */
	enrolmentkey: string | null;
	/** id number */
	idnumber: string | null;
	/** Custom fields */
	customfields: ReturnsItemGroupsItemCustomfields;
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
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN) */
	descriptionformat: number | null;
	/** id number */
	idnumber: string | null;
	/** Custom fields */
	customfields: ReturnsItemCustomfields;
	/** optional groups */
	groups: ReturnsItemGroups;
}

export type Returns = ReturnsItem[];
