/**
 * restrict results to these areas
 */
export type ParamsFiltersAreaids = (string | null)[];

/**
 * restrict results to these courses
 */
export type ParamsFiltersCourseids = (number | null)[];

/**
 * restrict results to these contexts
 */
export type ParamsFiltersContextids = (number | null)[];

/**
 * restrict results to these users
 */
export type ParamsFiltersUserids = (number | null)[];

/**
 * restrict results to these groups
 */
export type ParamsFiltersGroupids = (number | null)[];

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
	/** restrict results to these contexts */
	contextids?: ParamsFiltersContextids;
	/** category to filter areas */
	cat?: string | null;
	/** restrict results to these users */
	userids?: ParamsFiltersUserids;
	/** restrict results to these groups */
	groupids?: ParamsFiltersGroupids;
	/** only results from my courses */
	mycoursesonly?: boolean | null;
	/** how to order */
	order?: string | null;
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
}

export interface ReturnsResultsItem {
	/** unique id in the search area scope */
	itemid: number;
	/** component name */
	componentname: string;
	/** search area name */
	areaname: string;
	/** result course url */
	courseurl: string;
	/** result course fullname */
	coursefullname: string;
	/** result modified time */
	timemodified: number;
	/** result title */
	title: string;
	/** result url */
	docurl: string;
	/** icon url */
	iconurl: string | null;
	/** result contents */
	content: string | null;
	/** result context id */
	contextid: number;
	/** result context url */
	contexturl: string;
	/** extra result contents, depends on the search area */
	description1: string | null;
	/** extra result contents, depends on the search area */
	description2: string | null;
	/** whether multiple files are returned or not */
	multiplefiles: number;
	/** result file names if present */
	filenames: string;
	/** result file name if present */
	filename: string;
	/** user id */
	userid: number;
	/** user url */
	userurl: string;
	/** user fullname */
	userfullname: string;
	/** text fields format, it is the same for all of them */
	textformat: number;
}

export type ReturnsResults = ReturnsResultsItem[];

export interface Returns {
	results: ReturnsResults;
}
