export interface Params {
	/** id of course */
	courseid: number | null;
}

export interface ReturnsItem {
	/** group record id */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** group name */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** group enrol secret phrase */
	enrolmentkey: string | null;
	/** id number */
	idnumber: string | null;
	/** group visibility mode. 0 = Visible to all. 1 = Visible to members. 2 = See own membership. 3 = Membership is hidden. */
	visibility: number | null;
	/** participation mode */
	participation: boolean | null;
}

export type Returns = ReturnsItem[];
