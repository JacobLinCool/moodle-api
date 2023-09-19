export interface Params {
	/** id of course */
	courseid: number | null;
}

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
}

export type Returns = ReturnsItem[];
