export interface ParamsOptionsItem {
	/** The allowed keys (value format) are: inlineattachmentsid (int); the draft file area id for inline attachments attachmentsid (int); the draft file area id for attachments categories (comma separated int); comma separated category ids aliases (comma separated str); comma separated aliases usedynalink (bool); whether the entry should be automatically linked. casesensitive (bool); whether the entry is case sensitive. fullmatch (bool); whether to match whole words only. */
	name: string | null;
	/** the value of the option (validated inside the function) */
	value: string | null;
}

/**
 * Optional settings
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** Glossary entry id to update */
	entryid: number | null;
	/** Glossary concept */
	concept: string | null;
	/** Glossary concept definition */
	definition: string | null;
	/** definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	definitionformat: number | null;
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
	/** The update result */
	result: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
