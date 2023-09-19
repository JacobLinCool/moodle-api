export interface Params {
	/** Glossary entry ID */
	id: number | null;
}

/**
 * File.
 */
export interface ReturnsEntryDefinitioninlinefilesItem {
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
export type ReturnsEntryDefinitioninlinefiles = ReturnsEntryDefinitioninlinefilesItem[];

/**
 * File.
 */
export interface ReturnsEntryAttachmentsItem {
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
export type ReturnsEntryAttachments = ReturnsEntryAttachmentsItem[];

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
 * Tags
 */
export type ReturnsEntryTags = ReturnsEntryTagsItem[];

export interface ReturnsEntry {
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
	definitioninlinefiles: ReturnsEntryDefinitioninlinefiles;
	/** Whether or not the entry has attachments */
	attachment: boolean | null;
	/** attachments */
	attachments: ReturnsEntryAttachments;
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
 * User permissions for the managing the entry.
 */
export interface ReturnsPermissions {
	/** Whether the user can delete the entry. */
	candelete: boolean | null;
	/** Whether the user can update the entry. */
	canupdate: boolean | null;
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
	/** Rating information */
	ratinginfo: ReturnsRatinginfo;
	/** User permissions for the managing the entry. */
	permissions: ReturnsPermissions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
