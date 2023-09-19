/**
 * List of cohort id. A cohort id is an integer.
 */
export type ParamsCohortids = (number | null)[];

export interface Params {
	/** List of cohort id. A cohort id is an integer. */
	cohortids?: ParamsCohortids;
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
	/** ID of the cohort */
	id: number | null;
	/** cohort name */
	name: string | null;
	/** cohort idnumber */
	idnumber: string | null;
	/** cohort description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** cohort visible */
	visible: boolean | null;
	/** cohort theme */
	theme: string | null;
	/** Custom fields */
	customfields: ReturnsItemCustomfields;
}

export type Returns = ReturnsItem[];
