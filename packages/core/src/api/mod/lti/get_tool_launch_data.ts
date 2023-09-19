export interface Params {
	/** external tool instance id */
	toolid: number | null;
}

export interface ReturnsParametersItem {
	/** Parameter name */
	name: string | null;
	/** Parameter value */
	value: string | null;
}

export type ReturnsParameters = ReturnsParametersItem[];

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
	/** Endpoint URL */
	endpoint: string | null;
	parameters: ReturnsParameters;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
