export interface ParamsGroupingsItem {
	/** id of grouping */
	id: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** grouping description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** id number */
	idnumber: string | null;
}

/**
 * List of grouping object. A grouping has a courseid, a name and a description.
 */
export type ParamsGroupings = ParamsGroupingsItem[];

export interface Params {
	/** List of grouping object. A grouping has a courseid, a name and a description. */
	groupings: ParamsGroupings;
}
