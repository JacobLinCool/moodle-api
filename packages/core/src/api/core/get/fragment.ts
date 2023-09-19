export interface ParamsArgsItem {
	/** param name */
	name: string | null;
	/** param value */
	value: string | null;
}

/**
 * args for the callback are optional
 */
export type ParamsArgs = ParamsArgsItem[];

export interface Params {
	/** Component for the callback e.g. mod_assign */
	component: string | null;
	/** Name of the callback to execute */
	callback: string | null;
	/** Context ID that the fragment is from */
	contextid: number | null;
	/** args for the callback are optional */
	args: ParamsArgs;
}

export interface Returns {
	/** HTML fragment. */
	html: string | null;
	/** JavaScript fragment */
	javascript: string | null;
}
