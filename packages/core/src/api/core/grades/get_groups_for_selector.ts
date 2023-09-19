export interface Params {
	/** Course Id */
	courseid: number | null;
}

export interface ReturnsGroupsItem {
	/** An ID for the group */
	id: string | null;
	/** The full name of the group */
	name: string | null;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
