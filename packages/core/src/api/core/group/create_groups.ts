export interface ParamsGroupsItem {
	/** id of course */
	courseid: number | null;
	/** multilang compatible name, course unique */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** group enrol secret phrase */
	enrolmentkey: string | null;
	/** id number */
	idnumber: string | null;
	/** group visibility mode. 0 = Visible to all. 1 = Visible to members. 2 = See own membership. 3 = Membership is hidden. default: 0 */
	visibility?: number | null;
	/** activity participation enabled? Only for "all" and "members" visibility. Default true. */
	participation?: boolean | null;
}

/**
 * List of group object. A group has a courseid, a name, a description and an enrolment key.
 */
export type ParamsGroups = ParamsGroupsItem[];

export interface Params {
	/** List of group object. A group has a courseid, a name, a description and an enrolment key. */
	groups: ParamsGroups;
}

export interface ReturnsItem {
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
	/** group visibility mode. 0 = Visible to all. 1 = Visible to members. 2 = See own membership. 3 = Membership is hidden. */
	visibility: number | null;
	/** participation mode */
	participation: boolean | null;
}

/**
 * List of group object. A group has an id, a courseid, a name, a description and an enrolment key.
 */
export type Returns = ReturnsItem[];
