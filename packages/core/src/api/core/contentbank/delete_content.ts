export type ParamsContentids = (number | null)[];

export interface Params {
	contentids: ParamsContentids;
}

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
	/** The processing result */
	result: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
