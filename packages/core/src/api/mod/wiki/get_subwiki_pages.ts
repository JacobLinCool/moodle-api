/**
 * Options
 */
export interface ParamsOptions {
	/** Field to sort by (id, title, ...). */
	sortby?: string | null;
	/** Sort direction: ASC or DESC. */
	sortdirection?: string | null;
	/** Include each page contents or just the contents size. */
	includecontent?: number | null;
}

export interface Params {
	/** Wiki instance ID. */
	wikiid: number | null;
	/** Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups. */
	groupid?: number | null;
	/** Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis. */
	userid?: number | null;
	/** Options */
	options?: ParamsOptions;
}

export interface ReturnsPagesItemTagsItem {
	/** Tag id. */
	id: number;
	/** Tag name. */
	name: string;
	/** The raw, unnormalised name for the tag as entered by users. */
	rawname: string;
	/** Whether this tag is standard. */
	isstandard: boolean;
	/** Tag collection id. */
	tagcollid: number;
	/** Tag instance id. */
	taginstanceid: number;
	/** Context the tag instance belongs to. */
	taginstancecontextid: number;
	/** Id of the record tagged. */
	itemid: number;
	/** Tag ordering. */
	ordering: number;
	/** Whether the tag is flagged as inappropriate. */
	flag: number | null;
}

/**
 * Tags
 */
export type ReturnsPagesItemTags = ReturnsPagesItemTagsItem[];

/**
 * Pages
 */
export interface ReturnsPagesItem {
	/** Page ID. */
	id: number | null;
	/** Page's subwiki ID. */
	subwikiid: number | null;
	/** Page title. */
	title: string | null;
	/** Time of creation. */
	timecreated: number | null;
	/** Time of last modification. */
	timemodified: number | null;
	/** Time of last renderization. */
	timerendered: number | null;
	/** ID of the user that last modified the page. */
	userid: number | null;
	/** Number of times the page has been viewed. */
	pageviews: number | null;
	/** 1 if readonly, 0 otherwise. */
	readonly: number | null;
	/** True if user can edit the page. */
	caneditpage: boolean | null;
	/** True if it's the first page. */
	firstpage: boolean | null;
	/** Page contents. */
	cachedcontent: string | null;
	/** cachedcontent format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentformat: number | null;
	/** Size of page contents in bytes (doesn't include size of attached files). */
	contentsize: number | null;
	/** Tags */
	tags: ReturnsPagesItemTags;
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
