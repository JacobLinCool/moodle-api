export interface ParamsAdvsearchItem {
	/** Field key for search. Use fn or ln for first or last name */
	name: string | null;
	/** JSON encoded value for search */
	value: string | null;
}

/**
 * Advanced search
 */
export type ParamsAdvsearch = ParamsAdvsearchItem[];

export interface Params {
	/** data instance id */
	databaseid: number | null;
	/** Group id, 0 means that the function will determine the user group */
	groupid?: number | null;
	/** Whether to return contents or not. */
	returncontents?: boolean | null;
	/** search string (empty when using advanced) */
	search?: string | null;
	/** Advanced search */
	advsearch?: ParamsAdvsearch;
	/** Sort the records by this field id, reserved ids are: 0: timeadded -1: firstname -2: lastname -3: approved -4: timemodified. Empty for using the default database setting. */
	sort?: number | null;
	/** The direction of the sorting: 'ASC' or 'DESC'. Empty for using the default database setting. */
	order?: string | null;
	/** The page of records to return. */
	page?: number | null;
	/** The number of records to return per page */
	perpage?: number | null;
}

export interface ReturnsEntriesItemContentsItemFilesItem {
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
export type ReturnsEntriesItemContentsItemFiles = ReturnsEntriesItemContentsItemFilesItem[];

export interface ReturnsEntriesItemContentsItem {
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
	files: ReturnsEntriesItemContentsItemFiles;
}

/**
 * The record contents.
 */
export type ReturnsEntriesItemContents = ReturnsEntriesItemContentsItem[];

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
	contents: ReturnsEntriesItemContents;
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
	/** Total count of records returned by the search. */
	totalcount: number | null;
	/** Total count of records that the user could see in the database (if all the search criterias were removed). */
	maxcount: number | null;
	/** The list view contents as is rendered in the site. */
	listviewcontents: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
