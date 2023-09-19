export interface Params {
	/** bigbluebuttonbn instance id */
	bigbluebuttonbnid: number | null;
	/** a set of enabled tools */
	tools?: string | null;
	/** Group ID */
	groupid?: number | null;
}

export type ReturnsTabledataProfileFeatures = (string | null)[];

export interface ReturnsTabledataColumnsItem {
	key: string | null;
	label: string | null;
	width: string | null;
	/** Column type */
	type: string | null;
	/** Whether this column is sortable */
	sortable: boolean | null;
	/** Whether this column contains HTML */
	allowHTML: boolean | null;
	/** Formatter name */
	formatter: string | null;
}

export type ReturnsTabledataColumns = ReturnsTabledataColumnsItem[];

export interface ReturnsTabledata {
	activity: string | null;
	ping_interval: number | null;
	locale: string | null;
	profile_features: ReturnsTabledataProfileFeatures;
	columns: ReturnsTabledataColumns;
	data: string | null;
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
	/** Whether the fetch was successful */
	status: boolean | null;
	tabledata: ReturnsTabledata;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
