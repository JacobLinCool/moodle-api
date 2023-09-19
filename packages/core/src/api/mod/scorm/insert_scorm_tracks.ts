export interface ParamsTracksItem {
	/** element name */
	element: string | null;
	/** element value */
	value: string | null;
}

export type ParamsTracks = ParamsTracksItem[];

export interface Params {
	/** SCO id */
	scoid: number | null;
	/** attempt number */
	attempt: number | null;
	tracks: ParamsTracks;
}

export type ReturnsTrackids = (number | null)[];

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
	trackids: ReturnsTrackids;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
