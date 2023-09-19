export interface Params {
	/** Page ID. */
	pageid: number | null;
	/** Page contents. */
	content: string | null;
	/** Section page title. */
	section?: string | null;
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
	/** Edited page id. */
	pageid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
