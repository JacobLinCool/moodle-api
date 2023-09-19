export interface Params {
	/** course module id */
	cmid: number | null;
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
	/** group mode: 0 for no groups, 1 for separate groups, 2 for visible groups */
	groupmode: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
