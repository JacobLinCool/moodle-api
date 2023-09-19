export interface Params {
	/** record entry id */
	entryid: number | null;
	/** Whether to return contents or not. */
	returncontents?: boolean | null;
}

export interface ReturnsEntryContentsItemFilesItem {
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
 * files
 */
export type ReturnsEntryContentsItemFiles = ReturnsEntryContentsItemFilesItem[];

export interface ReturnsEntryContentsItem {
	/** Content id. */
	id: number;
	/** The field type of the content. */
	fieldid: number;
	/** The record this content belongs to. */
	recordid: number;
	/** Contents. */
	content: string | null;
	/** Contents. */
	content1: string | null;
	/** Contents. */
	content2: string | null;
	/** Contents. */
	content3: string | null;
	/** Contents. */
	content4: string | null;
	/** files */
	files: ReturnsEntryContentsItemFiles;
}

/**
 * The record contents.
 */
export type ReturnsEntryContents = ReturnsEntryContentsItem[];

export interface ReturnsEntryTagsItem {
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
export type ReturnsEntryTags = ReturnsEntryTagsItem[];

export interface ReturnsEntry {
	/** Record id. */
	id: number;
	/** The id of the user who created the record. */
	userid: number;
	/** The group id this record belongs to (0 for no groups). */
	groupid: number;
	/** The database id this record belongs to. */
	dataid: number;
	/** Time the record was created. */
	timecreated: number;
	/** Last time the record was modified. */
	timemodified: number;
	/** Whether the entry has been approved (if the database is configured in that way). */
	approved: boolean;
	/** Whether the current user can manage this entry */
	canmanageentry: boolean;
	/** The user who created the entry fullname. */
	fullname: string;
	/** The record contents. */
	contents: ReturnsEntryContents;
	/** Tags. */
	tags: ReturnsEntryTags;
}

export interface ReturnsRatinginfoScalesItemItemsItem {
	/** Scale value/option id. */
	value: number | null;
	/** Scale name. */
	name: string | null;
}

/**
 * Scale items. Only returned for not numerical scales.
 */
export type ReturnsRatinginfoScalesItemItems = ReturnsRatinginfoScalesItemItemsItem[];

/**
 * Scale information
 */
export interface ReturnsRatinginfoScalesItem {
	/** Scale id. */
	id: number | null;
	/** Course id. */
	courseid: number | null;
	/** Scale name (when a real scale is used). */
	name: string | null;
	/** Max value for the scale. */
	max: number | null;
	/** Whether is a numeric scale. */
	isnumeric: boolean | null;
	/** Scale items. Only returned for not numerical scales. */
	items: ReturnsRatinginfoScalesItemItems;
}

/**
 * Different scales used information
 */
export type ReturnsRatinginfoScales = ReturnsRatinginfoScalesItem[];

export interface ReturnsRatinginfoRatingsItem {
	/** Item id. */
	itemid: number | null;
	/** Scale id. */
	scaleid: number | null;
	/** User who rated id. */
	userid: number | null;
	/** Aggregated ratings grade. */
	aggregate: number | null;
	/** Aggregated ratings as string. */
	aggregatestr: string | null;
	/** The aggregation label. */
	aggregatelabel: string | null;
	/** Ratings count (used when aggregating). */
	count: number | null;
	/** The rating the user gave. */
	rating: number | null;
	/** Whether the user can rate the item. */
	canrate: boolean | null;
	/** Whether the user can view the aggregated grade. */
	canviewaggregate: boolean | null;
}

/**
 * The ratings
 */
export type ReturnsRatinginfoRatings = ReturnsRatinginfoRatingsItem[];

/**
 * Rating information
 */
export interface ReturnsRatinginfo {
	/** Context id. */
	contextid: number | null;
	/** Context name. */
	component: string | null;
	/** Rating area name. */
	ratingarea: string | null;
	/** Whether the user can view all the individual ratings. */
	canviewall: boolean | null;
	/** Whether the user can view aggregate of ratings of others. */
	canviewany: boolean | null;
	/** Different scales used information */
	scales: ReturnsRatinginfoScales;
	/** The ratings */
	ratings: ReturnsRatinginfoRatings;
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
	entry: ReturnsEntry;
	/** The entry as is rendered in the site. */
	entryviewcontents: string | null;
	/** Rating information */
	ratinginfo: ReturnsRatinginfo;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
