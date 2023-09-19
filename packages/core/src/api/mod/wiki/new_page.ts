export interface Params {
	/** New page title. */
	title: string | null;
	/** Page contents. */
	content: string | null;
	/** Page contents format. If an invalid format is provided, default wiki format is used. */
	contentformat?: string | null;
	/** Page's subwiki ID. */
	subwikiid?: number | null;
	/** Page's wiki ID. Used if subwiki does not exists. */
	wikiid?: number | null;
	/** Subwiki's user ID. Used if subwiki does not exists. */
	userid?: number | null;
	/** Subwiki's group ID. Used if subwiki does not exists. */
	groupid?: number | null;
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
	/** New page id. */
	pageid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
