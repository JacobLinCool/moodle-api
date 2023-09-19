/**
 * 1 or more assignment ids
 */
export type ParamsAssignmentids = (number | null)[];

export interface Params {
	/** 1 or more assignment ids */
	assignmentids: ParamsAssignmentids;
}

export interface ReturnsAssignmentsItemMappingsItem {
	/** user mapping id */
	id: number | null;
	/** student id */
	userid: number | null;
}

export type ReturnsAssignmentsItemMappings = ReturnsAssignmentsItemMappingsItem[];

export interface ReturnsAssignmentsItem {
	/** assignment id */
	assignmentid: number | null;
	mappings: ReturnsAssignmentsItemMappings;
}

/**
 * list of assign user mapping data
 */
export type ReturnsAssignments = ReturnsAssignmentsItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item is always 'assignment' */
	item: string | null;
	/** when errorcode is 3 then itemid is an assignment id. When errorcode is 1, itemid is a course module id */
	itemid: number | null;
	/** errorcode can be 3 (no user mappings found) or 1 (no permission to get user mappings) */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	/** list of assign user mapping data */
	assignments: ReturnsAssignments;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
