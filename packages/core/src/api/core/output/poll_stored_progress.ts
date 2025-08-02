export type ParamsIds = (number | null)[];

export interface Params {
	ids: ParamsIds;
}

export interface ReturnsItem {
	/** stored_progress record id */
	id: number | null;
	/** unique element id */
	uniqueid: string | null;
	/** percentage progress */
	progress: number | null;
	/** estimated time left string */
	estimated: string | null;
	/** message to be displayed with the bar */
	message: string | null;
	/** error */
	error: string | null;
	/** timeout to use in the polling */
	timeout: string | null;
}

export type Returns = ReturnsItem[];
