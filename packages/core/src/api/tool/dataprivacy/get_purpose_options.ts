export interface Params {
	/** Include option "Inherit" */
	includeinherit?: boolean | null;
	/** Include option "Not set" */
	includenotset?: boolean | null;
}

export interface ReturnsOptionsItem {
	/** The purpose ID */
	id: number | null;
	/** The purpose name */
	name: string | null;
}

export type ReturnsOptions = ReturnsOptionsItem[];

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
	options: ReturnsOptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
