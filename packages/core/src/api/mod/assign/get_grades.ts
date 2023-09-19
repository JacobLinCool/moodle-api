/**
 * 1 or more assignment ids
 */
export type ParamsAssignmentids = (number | null)[];

export interface Params {
	/** 1 or more assignment ids */
	assignmentids: ParamsAssignmentids;
	/** timestamp, only return records where timemodified >= since */
	since?: number | null;
}

/**
 * grade information
 */
export interface ReturnsAssignmentsItemGradesItem {
	/** grade id */
	id: number | null;
	/** assignment id */
	assignment: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** grade creation time */
	timecreated: number | null;
	/** grade last modified time */
	timemodified: number | null;
	/** grader, -1 if grader is hidden */
	grader: number | null;
	/** grade */
	grade: string | null;
	/** grade rendered into a format suitable for display */
	gradefordisplay: string | null;
}

export type ReturnsAssignmentsItemGrades = ReturnsAssignmentsItemGradesItem[];

export interface ReturnsAssignmentsItem {
	/** assignment id */
	assignmentid: number | null;
	grades: ReturnsAssignmentsItemGrades;
}

/**
 * list of assignment grade information
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
	/** errorcode can be 3 (no grades found) or 1 (no permission to get grades) */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	/** list of assignment grade information */
	assignments: ReturnsAssignments;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
