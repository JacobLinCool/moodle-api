/**
 * 1 or more assignment ids
 */
export type ParamsAssignmentids = (number | null)[];

export interface Params {
	/** 1 or more assignment ids */
	assignmentids: ParamsAssignmentids;
}

export interface ReturnsAssignmentsItemUserflagsItem {
	/** user flag id */
	id: number | null;
	/** student id */
	userid: number | null;
	/** locked */
	locked: number | null;
	/** mailed */
	mailed: number | null;
	/** extension due date */
	extensionduedate: number | null;
	/** marking workflow state */
	workflowstate: string | null;
	/** allocated marker */
	allocatedmarker: number | null;
}

export type ReturnsAssignmentsItemUserflags = ReturnsAssignmentsItemUserflagsItem[];

export interface ReturnsAssignmentsItem {
	/** assignment id */
	assignmentid: number | null;
	userflags: ReturnsAssignmentsItemUserflags;
}

/**
 * list of assign user flag information
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
	/** errorcode can be 3 (no user flags found) or 1 (no permission to get user flags) */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	/** list of assign user flag information */
	assignments: ReturnsAssignments;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
