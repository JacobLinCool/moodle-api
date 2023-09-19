export interface ParamsTocheckItem {
	/** The context level for the file location. Only module supported right now. */
	contextlevel: string | null;
	/** Context instance id */
	id: number | null;
	/** Check updates since this time stamp */
	since: number | null;
}

/**
 * Instances to check
 */
export type ParamsTocheck = ParamsTocheckItem[];

/**
 * Check only for updates in these areas
 */
export type ParamsFilter = (string | null)[];

export interface Params {
	/** Course id to check */
	courseid: number | null;
	/** Instances to check */
	tocheck: ParamsTocheck;
	/** Check only for updates in these areas */
	filter?: ParamsFilter;
}

/**
 * The ids of the items updated
 */
export type ReturnsInstancesItemUpdatesItemItemids = (number | null)[];

export interface ReturnsInstancesItemUpdatesItem {
	/** Name of the area updated. */
	name: string | null;
	/** Last time was updated */
	timeupdated: number | null;
	/** The ids of the items updated */
	itemids: ReturnsInstancesItemUpdatesItemItemids;
}

export type ReturnsInstancesItemUpdates = ReturnsInstancesItemUpdatesItem[];

export interface ReturnsInstancesItem {
	/** The context level */
	contextlevel: string | null;
	/** Instance id */
	id: number | null;
	updates: ReturnsInstancesItemUpdates;
}

export type ReturnsInstances = ReturnsInstancesItem[];

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
	instances: ReturnsInstances;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
