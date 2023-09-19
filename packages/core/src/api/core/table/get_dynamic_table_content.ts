export interface ParamsSortdataItem {
	/** The name of a sortable column */
	sortby: string | null;
	/** The direction that this column should be sorted by */
	sortorder: string | null;
}

/**
 * The combined sort order of the table. Multiple fields can be specified.
 */
export type ParamsSortdata = ParamsSortdataItem[];

/**
 * The value to filter on
 */
export type ParamsFiltersItemValues = (string | null)[];

export interface ParamsFiltersItem {
	/** Name of the filter */
	name: string | null;
	/** Type of join for filter values */
	jointype: number | null;
	/** The value to filter on */
	values: ParamsFiltersItemValues;
}

/**
 * The filters that will be applied in the request
 */
export type ParamsFilters = ParamsFiltersItem[];

export type ParamsHiddencolumns = (string | null)[];

export interface Params {
	/** Component */
	component: string | null;
	/** Handler */
	handler: string | null;
	/** Unique ID for the container */
	uniqueid: string | null;
	/** The combined sort order of the table. Multiple fields can be specified. */
	sortdata: ParamsSortdata;
	/** The filters that will be applied in the request */
	filters: ParamsFilters;
	/** Type of join to join all filters together */
	jointype: number | null;
	/** The first initial to sort filter on */
	firstinitial: string | null;
	/** The last initial to sort filter on */
	lastinitial: string | null;
	/** The page number */
	pagenumber: number | null;
	/** The number of records per page */
	pagesize: number | null;
	hiddencolumns: ParamsHiddencolumns;
	/** Whether the table preferences should be reset */
	resetpreferences: boolean | null;
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
	/** The raw html of the requested table. */
	html: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
