export interface Params {
	/** The question id */
	questionid: number | null;
	/** The updated question status */
	status: string | null;
}

export interface Returns {
	/** status: true if success */
	status: boolean | null;
	/** statusname: name of the status */
	statusname: string | null;
	/** Error message if error exists */
	error: string | null;
}
