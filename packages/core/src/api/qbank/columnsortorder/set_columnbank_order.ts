/**
 * List of column in the desired order
 */
export type ParamsColumns = (string | null)[];

export interface Params {
	/** List of column in the desired order */
	columns?: ParamsColumns;
	/** Set global config setting, rather than user preference */
	global?: boolean | null;
}
