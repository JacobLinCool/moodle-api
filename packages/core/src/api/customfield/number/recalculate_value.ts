export interface Params {
	/** Field id */
	fieldid: number | null;
	/** Instance id */
	instanceid: number | null;
}

export interface Returns {
	/** Recalculated value (prepared for display) */
	value: string | null;
}
