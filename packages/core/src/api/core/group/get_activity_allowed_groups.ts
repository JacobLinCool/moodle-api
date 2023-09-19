export interface Params {
	/** course module id */
	cmid: number | null;
	/** id of user, empty for current user */
	userid?: number | null;
}

export interface ReturnsGroupsItem {
	/** group record id */
	id: number | null;
	/** group name */
	name: string | null;
	/** group description text */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** id number */
	idnumber: string | null;
	/** course id */
	courseid: number | null;
}

export type ReturnsGroups = ReturnsGroupsItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	groups: ReturnsGroups;
	/** Whether the user will be able to access all the activity groups. */
	canaccessallgroups: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
