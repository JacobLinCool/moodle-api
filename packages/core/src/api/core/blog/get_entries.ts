export interface ParamsFiltersItem {
	/** The expected keys (value format) are: tag      PARAM_NOTAGS blog tag tagid    PARAM_INT    blog tag id userid   PARAM_INT    blog author (userid) cmid    PARAM_INT    course module id entryid  PARAM_INT    entry id groupid  PARAM_INT    group id courseid PARAM_INT    course id search   PARAM_RAW    search term  */
	name: string | null;
	/** The value of the filter. */
	value: string | null;
}

/**
 * Parameters to filter blog listings.
 */
export type ParamsFilters = ParamsFiltersItem[];

export interface Params {
	/** Parameters to filter blog listings. */
	filters?: ParamsFilters;
	/** The blog page to return. */
	page?: number | null;
	/** The number of posts to return per page. */
	perpage?: number | null;
}

export interface ReturnsEntriesItemSummaryfilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * summaryfiles
 */
export type ReturnsEntriesItemSummaryfiles = ReturnsEntriesItemSummaryfilesItem[];

export interface ReturnsEntriesItemAttachmentfilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * attachmentfiles
 */
export type ReturnsEntriesItemAttachmentfiles = ReturnsEntriesItemAttachmentfilesItem[];

export interface ReturnsEntriesItemTagsItem {
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
 * Tags.
 */
export type ReturnsEntriesItemTags = ReturnsEntriesItemTagsItem[];

export interface ReturnsEntriesItem {
	/** Post/entry id. */
	id: number | null;
	/** Where it was published the post (blog, blog_external...). */
	module: string;
	/** Post author. */
	userid: number;
	/** Course where the post was created. */
	courseid: number;
	/** Group post was created for. */
	groupid: number;
	/** Module id where the post was created (not used anymore). */
	moduleid: number;
	/** Course module id where the post was created. */
	coursemoduleid: number;
	/** Post subject. */
	subject: string;
	/** Post summary. */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat?: number | null;
	/** Post content. */
	content: string | null;
	/** Post unique hash. */
	uniquehash: string;
	/** Post rating. */
	rating: number;
	/** Post content format. */
	format: number;
	/** Post atachment. */
	attachment: string | null;
	/** Post publish state. */
	publishstate: string;
	/** When it was last modified. */
	lastmodified: number;
	/** When it was created. */
	created: number;
	/** User that updated the post. */
	usermodified: number | null;
	/** summaryfiles */
	summaryfiles: ReturnsEntriesItemSummaryfiles;
	/** attachmentfiles */
	attachmentfiles: ReturnsEntriesItemAttachmentfiles;
	/** Tags. */
	tags: ReturnsEntriesItemTags;
}

export type ReturnsEntries = ReturnsEntriesItem[];

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
	entries: ReturnsEntries;
	/** The total number of entries found. */
	totalentries: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
