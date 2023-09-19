export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** lesson attempt number */
	lessonattempt: number | null;
	/** the user id (empty for current user) */
	userid?: number | null;
}

/**
 * The content pages viewed.
 */
export interface ReturnsPagesItem {
	/** The attempt id. */
	id: number | null;
	/** The lesson id. */
	lessonid: number | null;
	/** The page id. */
	pageid: number | null;
	/** The user who viewed the page. */
	userid: number | null;
	/** The lesson attempt number. */
	retry: number | null;
	/** 1 if the next page was calculated randomly. */
	flag: number | null;
	/** The time the page was seen. */
	timeseen: number | null;
	/** The next page chosen id. */
	nextpageid: number | null;
}

export type ReturnsPages = ReturnsPagesItem[];

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
	pages: ReturnsPages;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
