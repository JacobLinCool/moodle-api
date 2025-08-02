/**
 * List of hidden columns
 */
export type ParamsColumns = (string | null)[];

export interface Params {
	/** List of hidden columns */
	columns?: ParamsColumns;
	/** Set global config setting, rather than user preference */
	global?: boolean | null;
}
