/**
 * restrict results to these areas
 */
export type ParamsFiltersAreaids = (string | null)[];

/**
 * restrict results to these courses
 */
export type ParamsFiltersCourseids = (number | null)[];

/**
 * filters to apply
 */
export interface ParamsFilters {
	/** result title */
	title: string | null;
	/** restrict results to these areas */
	areaids?: ParamsFiltersAreaids;
	/** restrict results to these courses */
	courseids?: ParamsFiltersCourseids;
	/** docs modified after this date */
	timestart?: number | null;
	/** docs modified before this date */
	timeend?: number | null;
}

export interface Params {
	/** the search query */
	query: string | null;
	/** filters to apply */
	filters?: ParamsFilters;
	/** results page number starting from 0, defaults to the first page */
	page?: number | null;
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
	/** status: true if success */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
