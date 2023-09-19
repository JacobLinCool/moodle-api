export interface Params {
	/** The context ID */
	contextid: number | null;
	/** The equation content */
	content: string | null;
}

export interface Returns {
	/** Filtered content */
	content: string | null;
}
