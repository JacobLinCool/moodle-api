export interface Params {
	/** The question id */
	questionid: number | null;
	/** The editing context id */
	contextid: number | null;
	/** The data from the tag form */
	formdata: string | null;
}

export interface Returns {
	/** status: true if success */
	status: boolean | null;
}
