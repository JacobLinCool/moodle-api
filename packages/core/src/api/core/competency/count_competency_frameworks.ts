export interface ParamsContext {
	/** Context ID. Either use this value, or level and instanceid. */
	contextid?: number | null;
	/** Context level. To be used with instanceid. */
	contextlevel?: string | null;
	/** Context instance ID. To be used with level */
	instanceid?: number | null;
}

export interface Params {
	context: ParamsContext;
	/** What other contextes to fetch the frameworks from. (children, parents, self) */
	includes?: string | null;
}
