export interface ParamsOptionsItem {
	/** The allowed keys (value format) are: inlineattachmentsid (int); the draft file area id for inline attachments. Default to 0. attachmentsid (int); the draft file area id for attachments. Default to 0. publishstate (str); the publish state of the entry (draft, site or public). Default to site. courseassoc (int); the course id to associate the entry with. Default to 0. modassoc (int); the module id to associate the entry with. Default to 0. tags (str); the tags to associate the entry with, comma separated. Default to empty. */
	name: string | null;
	/** the value of the option (validated inside the function) */
	value: string | null;
}

/**
 * Optional settings
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** Blog subject */
	subject: string | null;
	/** Blog post content */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN) */
	summaryformat: number | null;
	/** Optional settings */
	options?: ParamsOptions;
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
	/** The new entry id. */
	entryid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
