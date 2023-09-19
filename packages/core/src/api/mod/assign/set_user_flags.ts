export interface ParamsUserflagsItem {
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

export type ParamsUserflags = ParamsUserflagsItem[];

export interface Params {
	/** assignment id */
	assignmentid: number | null;
	userflags: ParamsUserflags;
}

export interface ReturnsItem {
	/** id of record if successful, -1 for failure */
	id: number | null;
	/** userid of record */
	userid: number | null;
	/** Failure error message */
	errormessage: string | null;
}

export type Returns = ReturnsItem[];
