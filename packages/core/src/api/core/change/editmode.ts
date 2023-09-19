export interface Params {
	/** Set edit mode to */
	setmode: boolean | null;
	/** Page context id */
	context: number | null;
}

/**
 * editmode
 */
export interface Returns {
	/** The edit mode was changed */
	success: boolean | null;
}
