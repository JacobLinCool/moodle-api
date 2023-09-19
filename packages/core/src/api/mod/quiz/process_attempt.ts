export interface ParamsDataItem {
	/** data name */
	name: string | null;
	/** data value */
	value: string | null;
}

/**
 * the data to be saved
 */
export type ParamsData = ParamsDataItem[];

export interface ParamsPreflightdataItem {
	/** data name */
	name: string | null;
	/** data value */
	value: string | null;
}

/**
 * Preflight required data (like passwords)
 */
export type ParamsPreflightdata = ParamsPreflightdataItem[];

export interface Params {
	/** attempt id */
	attemptid: number | null;
	/** the data to be saved */
	data?: ParamsData;
	/** whether to finish or not the attempt */
	finishattempt?: boolean | null;
	/** whether the WS was called by a timer when the time is up */
	timeup?: boolean | null;
	/** Preflight required data (like passwords) */
	preflightdata?: ParamsPreflightdata;
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
	/** state: the new attempt state: inprogress, finished, overdue, abandoned */
	state: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
