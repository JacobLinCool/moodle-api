/**
 * An array of options
 */
export interface ParamsOptions {
	/** When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve. */
	includenotapproved?: boolean | null;
}

export interface Params {
	/** Glossary entry ID */
	id: number | null;
	/** Order the records by: 'CREATION' or 'UPDATE'. */
	order?: string | null;
	/** The direction of the order: 'ASC' or 'DESC' */
	sort?: string | null;
	/** Start returning records from here */
	from?: number | null;
	/** Number of records to return */
	limit?: number | null;
	/** An array of options */
	options?: ParamsOptions;
}

/**
 * File.
 */
export interface ReturnsEntriesItemDefinitioninlinefilesItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * entry definition inline files
 */
export type ReturnsEntriesItemDefinitioninlinefiles = ReturnsEntriesItemDefinitioninlinefilesItem[];

/**
 * File.
 */
export interface ReturnsEntriesItemAttachmentsItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * attachments
 */
export type ReturnsEntriesItemAttachments = ReturnsEntriesItemAttachmentsItem[];

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
 * Tags
 */
export type ReturnsEntriesItemTags = ReturnsEntriesItemTagsItem[];

export interface ReturnsEntriesItem {
	/** The entry ID */
	id: number | null;
	/** The glossary ID */
	glossaryid: number | null;
	/** Author ID */
	userid: number | null;
	/** Author full name */
	userfullname: string | null;
	/** Author picture */
	userpictureurl: string | null;
	/** The concept */
	concept: string | null;
	/** The definition */
	definition: string | null;
	/** definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	definitionformat: number | null;
	/** The definition trust flag */
	definitiontrust: boolean | null;
	/** entry definition inline files */
	definitioninlinefiles: ReturnsEntriesItemDefinitioninlinefiles;
	/** Whether or not the entry has attachments */
	attachment: boolean | null;
	/** attachments */
	attachments: ReturnsEntriesItemAttachments;
	/** Time created */
	timecreated: number | null;
	/** Time modified */
	timemodified: number | null;
	/** The entry was created by a teacher, or equivalent. */
	teacherentry: boolean | null;
	/** The source glossary ID */
	sourceglossaryid: number | null;
	/** Whether the concept should be automatically linked */
	usedynalink: boolean | null;
	/** When true, the matching is case sensitive */
	casesensitive: boolean | null;
	/** When true, the matching is done on full words only */
	fullmatch: boolean | null;
	/** Whether the entry was approved */
	approved: boolean | null;
	/** Tags */
	tags: ReturnsEntriesItemTags;
}

export type ReturnsEntries = ReturnsEntriesItem[];

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
	/** The total number of records matching the request. */
	count: number | null;
	entries: ReturnsEntries;
	/** Rating information */
	ratinginfo: ReturnsRatinginfo;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
