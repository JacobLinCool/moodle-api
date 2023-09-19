export interface ParamsUnassignmentsItem {
	/** grouping record id */
	groupingid: number | null;
	/** group record id */
	groupid: number | null;
}

export type ParamsUnassignments = ParamsUnassignmentsItem[];

export interface Params {
	unassignments: ParamsUnassignments;
}
