export interface ParamsFiltersItem {
	/** Column name to filter by */
	column: string | null;
	/** Value to filter by. Must be exact match */
	value: string | null;
}

export type ParamsFilters = ParamsFiltersItem[];

export interface Params {
	filters: ParamsFilters;
	/** Column to sort by. */
	sort?: string | null;
	/** Sort direction. Should be either ASC or DESC */
	order?: string | null;
	/** Skip this number of records before returning results */
	skip?: number | null;
	/** Return this number of records at most. */
	limit?: number | null;
}

export interface ReturnsItem {
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** description */
	description: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** sortorder */
	sortorder: number;
	/** parentid */
	parentid: number;
	/** path */
	path: string;
	/** ruleoutcome */
	ruleoutcome: number;
	/** ruletype */
	ruletype: string | null;
	/** ruleconfig */
	ruleconfig: string | null;
	/** scaleid */
	scaleid: number | null;
	/** scaleconfiguration */
	scaleconfiguration: string | null;
	/** competencyframeworkid */
	competencyframeworkid: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}

export type Returns = ReturnsItem[];
