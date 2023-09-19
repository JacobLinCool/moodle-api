export interface Params {
	/** Page ID. */
	pageid: number | null;
}

export interface ReturnsPageTagsItem {
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
export type ReturnsPageTags = ReturnsPageTagsItem[];

/**
 * Page
 */
export interface ReturnsPage {
	/** Page ID. */
	id: number | null;
	/** Page's wiki ID. */
	wikiid: number | null;
	/** Page's subwiki ID. */
	subwikiid: number | null;
	/** Page's group ID. */
	groupid: number | null;
	/** Page's user ID. */
	userid: number | null;
	/** Page title. */
	title: string | null;
	/** Page contents. */
	cachedcontent: string | null;
	/** cachedcontent format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentformat: number | null;
	/** True if user can edit the page. */
	caneditpage: boolean | null;
	/** Latest version of the page. */
	version: number | null;
	/** Tags */
	tags: ReturnsPageTags;
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
	/** Page */
	page: ReturnsPage;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
