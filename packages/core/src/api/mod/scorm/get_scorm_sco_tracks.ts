export interface Params {
	/** sco id */
	scoid: number | null;
	/** user id */
	userid: number | null;
	/** attempt number (0 for last attempt) */
	attempt?: number | null;
}

/**
 * Tracks data
 */
export interface ReturnsDataTracksItem {
	/** Element name */
	element: string | null;
	/** Element value */
	value: string | null;
}

export type ReturnsDataTracks = ReturnsDataTracksItem[];

/**
 * SCO data
 */
export interface ReturnsData {
	/** Attempt number */
	attempt: number | null;
	tracks: ReturnsDataTracks;
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
	/** SCO data */
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
