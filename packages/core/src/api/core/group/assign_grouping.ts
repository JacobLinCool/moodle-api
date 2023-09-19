export interface ParamsAssignmentsItem {
	/** grouping record id */
	groupingid: number | null;
	/** group record id */
	groupid: number | null;
}

export type ParamsAssignments = ParamsAssignmentsItem[];

export interface Params {
	assignments: ParamsAssignments;
}
