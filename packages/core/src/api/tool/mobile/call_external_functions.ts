export interface ParamsRequestsItem {
	/** Function name */
	function: string | null;
	/** JSON-encoded object with named arguments */
	arguments?: string | null;
	/** Return raw text */
	settingraw?: boolean | null;
	/** Filter text */
	settingfilter?: boolean | null;
	/** Rewrite plugin file URLs */
	settingfileurl?: boolean | null;
	/** Session language */
	settinglang?: string | null;
}

export type ParamsRequests = ParamsRequestsItem[];

export interface Params {
	requests: ParamsRequests;
}

export interface ReturnsResponsesItem {
	/** Whether an exception was thrown. */
	error: boolean | null;
	/** JSON-encoded response data */
	data: string | null;
	/** JSON-encoed exception info */
	exception: string | null;
}

export type ReturnsResponses = ReturnsResponsesItem[];

export interface Returns {
	responses: ReturnsResponses;
}
