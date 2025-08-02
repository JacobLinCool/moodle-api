export interface ParamsGroupingsItemCustomfieldsItem {
	/** The shortname of the custom field */
	shortname: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ParamsGroupingsItemCustomfields = ParamsGroupingsItemCustomfieldsItem[];

export interface ParamsGroupingsItem {
	/** id of course */
	courseid: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** grouping description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN) */
	descriptionformat?: number | null;
	/** id number */
	idnumber: string | null;
	/** Custom fields */
	customfields: ParamsGroupingsItemCustomfields;
}

/**
 * List of grouping object. A grouping has a courseid, a name and a description.
 */
export type ParamsGroupings = ParamsGroupingsItem[];

export interface Params {
	/** List of grouping object. A grouping has a courseid, a name and a description. */
	groupings: ParamsGroupings;
}

export interface ReturnsItemCustomfieldsItem {
	/** The shortname of the custom field */
	shortname: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ReturnsItemCustomfields = ReturnsItemCustomfieldsItem[];

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
}

/**
 * List of grouping object. A grouping has an id, a courseid, a name and a description.
 */
export type Returns = ReturnsItem[];
