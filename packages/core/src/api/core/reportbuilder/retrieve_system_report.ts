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
	/** Page number */
	page?: number | null;
	/** Reports per page */
	perpage?: number | null;
}

/**
 * headers
 */
export type ReturnsDataHeaders = string[];

/**
 * columns
 */
export type ReturnsDataRowsItemColumns = (string | null)[];

export interface ReturnsDataRowsItem {
	/** columns */
	columns: ReturnsDataRowsItemColumns;
}

/**
 * rows
 */
export type ReturnsDataRows = ReturnsDataRowsItem[];

export interface ReturnsData {
	/** headers */
	headers: ReturnsDataHeaders;
	/** rows */
	rows: ReturnsDataRows;
	/** totalrowcount */
	totalrowcount: number;
}

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
