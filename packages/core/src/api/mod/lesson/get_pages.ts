export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** optional password (the lesson may be protected) */
	password?: string | null;
}

/**
 * Page fields
 */
export interface ReturnsPagesItemPage {
	/** The id of this lesson page */
	id: number | null;
	/** The id of the lesson this page belongs to */
	lessonid: number | null;
	/** The id of the page before this one */
	prevpageid: number | null;
	/** The id of the next page in the page sequence */
	nextpageid: number | null;
	/** Identifies the page type of this page */
	qtype: number | null;
	/** Used to record page type specific options */
	qoption: number | null;
	/** Used to record page specific layout selections */
	layout: number | null;
	/** Used to record page specific display selections */
	display: number | null;
	/** Timestamp for when the page was created */
	timecreated: number | null;
	/** Timestamp for when the page was last modified */
	timemodified: number | null;
	/** The title of this page */
	title: string | null;
	/** The contents of this page */
	contents: string | null;
	/** contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentsformat: number | null;
	/** Toggles display in the left menu block */
	displayinmenublock: boolean | null;
	/** The type of the page [question | structure] */
	type: number | null;
	/** The unique identifier for the page type */
	typeid: number | null;
	/** The string that describes this page type */
	typestring: string | null;
}

/**
 * List of answers ids (empty for content pages in  Moodle 1.9)
 */
export type ReturnsPagesItemAnswerids = (number | null)[];

/**
 * List of possible page jumps
 */
export type ReturnsPagesItemJumps = (number | null)[];

/**
 * The lesson pages
 */
export interface ReturnsPagesItem {
	/** Page fields */
	page: ReturnsPagesItemPage;
	/** List of answers ids (empty for content pages in  Moodle 1.9) */
	answerids: ReturnsPagesItemAnswerids;
	/** List of possible page jumps */
	jumps: ReturnsPagesItemJumps;
	/** The total number of files attached to the page */
	filescount: number | null;
	/** The total size of the files */
	filessizetotal: number | null;
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
