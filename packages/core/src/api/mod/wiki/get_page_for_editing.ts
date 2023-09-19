export interface Params {
	/** Page ID to edit. */
	pageid: number | null;
	/** Section page title. */
	section?: string | null;
	/** Just renew lock and not return content. */
	lockonly?: boolean | null;
}

/**
 * warning
 */
export interface ReturnsPagesectionWarningsItem {
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
export type ReturnsPagesectionWarnings = ReturnsPagesectionWarningsItem[];

export interface ReturnsPagesection {
	/** The contents of the page-section to be edited. */
	content: string | null;
	/** Format of the original content of the page. */
	contentformat: string | null;
	/** Latest version of the page. */
	version: number | null;
	/** list of warnings */
	warnings: ReturnsPagesectionWarnings;
}

export interface Returns {
	pagesection: ReturnsPagesection;
}
