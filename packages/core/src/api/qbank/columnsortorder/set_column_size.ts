export interface Params {
	/** Size for each column, as a JSON string representing [column => size] */
	sizes?: string | null;
	/** Set global config setting, rather than user preference */
	global?: boolean | null;
}
