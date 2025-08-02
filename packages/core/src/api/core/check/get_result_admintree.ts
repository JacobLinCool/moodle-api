export interface Params {
	/** ID of node in admintree */
	admintreeid: string | null;
	/** Name of setting */
	settingname: string | null;
	/** If the details should be included in the response. Depending on the check, details could be slower to return. */
	includedetails?: boolean | null;
}

export interface Returns {
	/** Result status constant */
	status: string | null;
	/** Summary of result */
	summary: string | null;
	/** Rendered full html result */
	html: string | null;
	/** Details of result (if includedetails was enabled) */
	details: string | null;
}
