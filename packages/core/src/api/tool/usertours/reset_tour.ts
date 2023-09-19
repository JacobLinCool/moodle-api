export interface Params {
	/** Tour ID */
	tourid: number | null;
	/** Context ID */
	context: number | null;
	/** Current page location */
	pageurl: string | null;
}

export interface Returns {
	/** Tour ID */
	startTour: number | null;
}
