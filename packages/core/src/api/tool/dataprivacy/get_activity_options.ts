export interface Params {
	/** Whether to fetch all activities or only those without defaults */
	nodefaults?: boolean | null;
}

export interface ReturnsOptionsItem {
	/** The plugin name of the activity */
	name: string | null;
	/** The display name of the activity */
	displayname: string | null;
}

export type ReturnsOptions = ReturnsOptionsItem[];

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
	options: ReturnsOptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
