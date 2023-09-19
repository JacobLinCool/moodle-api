export interface ParamsFiltersItem {
	/** Column name to filter by */
	column: string | null;
	/** Value to filter by. Must be exact match */
	value: string | null;
}

export type ParamsFilters = ParamsFiltersItem[];

export interface Params {
	filters: ParamsFilters;
}
