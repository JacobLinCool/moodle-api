export interface ParamsContext {
	/** Context ID. Either use this value, or level and instanceid. */
	contextid?: number | null;
	/** Context level. To be used with instanceid. */
	contextlevel?: string | null;
	/** Context instance ID. To be used with level */
	instanceid?: number | null;
}

export interface ParamsParametersItem {
	name: string | null;
	value: string | null;
}

/**
 * Report parameters
 */
export type ParamsParameters = ParamsParametersItem[];

export interface Params {
	/** Report class path */
	source: string | null;
	context: ParamsContext;
	/** Report component */
	component?: string | null;
	/** Report area */
	area?: string | null;
	/** Report item ID */
	itemid?: number | null;
	/** Report parameters */
	parameters?: ParamsParameters;
}
