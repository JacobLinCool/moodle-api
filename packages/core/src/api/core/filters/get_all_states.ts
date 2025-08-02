export interface Params {}

export interface ReturnsFiltersItem {
	/** The context level where the filters are: (coursecat, course, module). */
	contextlevel: string | null;
	/** The instance id of item associated with the context. */
	instanceid: number | null;
	/** The context id. */
	contextid: number | null;
	/** Filter plugin name. */
	filter: string | null;
	/** Filter state: 1 for on, -1 for off, -9999 if disabled. */
	state: number | null;
	/** Execution order. */
	sortorder: number | null;
}

/**
 * All filters states
 */
export type ReturnsFilters = ReturnsFiltersItem[];

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
	/** All filters states */
	filters: ReturnsFilters;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
