export interface Params {
	/** Course to check, empty for site. */
	courseid?: number | null;
}

export type ReturnsAllowedeventtypes = (string | null)[];

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
	allowedeventtypes: ReturnsAllowedeventtypes;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
