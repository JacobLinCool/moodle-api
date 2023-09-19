export interface ParamsGroupsItem {
	/** ID of the group */
	id: number | null;
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
	/** group visibility mode. 0 = Visible to all. 1 = Visible to members. 2 = See own membership. 3 = Membership is hidden. */
	visibility: string | null;
	/** activity participation enabled? Only for "all" and "members" visibility */
	participation: boolean | null;
}

/**
 * List of group objects. A group is found by the id, then all other details provided will be updated.
 */
export type ParamsGroups = ParamsGroupsItem[];

export interface Params {
	/** List of group objects. A group is found by the id, then all other details provided will be updated. */
	groups: ParamsGroups;
}
