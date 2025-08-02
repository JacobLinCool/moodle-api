/**
 * List of group id. A group id is an integer.
 */
export type ParamsGroupids = (number | null)[];

export interface Params {
	/** List of group id. A group id is an integer. */
	groupids: ParamsGroupids;
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

export interface ReturnsItem {
	/** group record id */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** group name */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN) */
	descriptionformat: number | null;
	/** group enrol secret phrase */
	enrolmentkey: string | null;
	/** id number */
	idnumber: string | null;
	/** group visibility mode. 0 = Visible to all. 1 = Visible to members. 2 = See own membership. 3 = Membership is hidden. */
	visibility: number | null;
	/** participation mode */
	participation: boolean | null;
	/** Custom fields */
	customfields: ReturnsItemCustomfields;
}

export type Returns = ReturnsItem[];
