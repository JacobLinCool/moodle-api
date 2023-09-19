export interface ParamsAssignmentsItem {
	/** Role to assign to the user */
	roleid: number | null;
	/** The user that is going to be assigned */
	userid: number | null;
	/** The context to assign the user role in */
	contextid: number | null;
	/** The context level to assign the user role in (block, course, coursecat, system, user, module) */
	contextlevel: string | null;
	/** The Instance id of item where the role needs to be assigned */
	instanceid: number | null;
}

export type ParamsAssignments = ParamsAssignmentsItem[];

export interface Params {
	assignments: ParamsAssignments;
}
