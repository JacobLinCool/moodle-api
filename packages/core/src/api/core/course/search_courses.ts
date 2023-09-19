/**
 * Optional list of required capabilities (used to filter the list)
 */
export type ParamsRequiredcapabilities = (string | null)[];

export interface Params {
	/** criteria name (search, modulelist (only admins), blocklist (only admins), tagid) */
	criterianame: string | null;
	/** criteria value */
	criteriavalue: string | null;
	/** page number (0 based) */
	page?: number | null;
	/** items per page */
	perpage?: number | null;
	/** Optional list of required capabilities (used to filter the list) */
	requiredcapabilities?: ParamsRequiredcapabilities;
	/** limit to enrolled courses */
	limittoenrolled?: boolean | null;
	/** limit to courses where completion is enabled */
	onlywithcompletion?: boolean | null;
}

/**
 * File.
 */
export interface ReturnsCoursesItemSummaryfilesItem {
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
 * summary files in the summary field
 */
export type ReturnsCoursesItemSummaryfiles = ReturnsCoursesItemSummaryfilesItem[];

/**
 * File.
 */
export interface ReturnsCoursesItemOverviewfilesItem {
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
 * additional overview files attached to this course
 */
export type ReturnsCoursesItemOverviewfiles = ReturnsCoursesItemOverviewfilesItem[];

export interface ReturnsCoursesItemContactsItem {
	/** contact user id */
	id: number | null;
	/** contact user fullname */
	fullname: string | null;
}

/**
 * contact users
 */
export type ReturnsCoursesItemContacts = ReturnsCoursesItemContactsItem[];

/**
 * enrollment methods list
 */
export type ReturnsCoursesItemEnrollmentmethods = (string | null)[];

export interface ReturnsCoursesItemCustomfieldsItem {
	/** The name of the custom field */
	name: string | null;
	/** The shortname of the custom field - to be able to build the field class in the code */
	shortname: string | null;
	/** The type of the custom field - text field, checkbox... */
	type: string | null;
	/** The raw value of the custom field */
	valueraw: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ReturnsCoursesItemCustomfields = ReturnsCoursesItemCustomfieldsItem[];

export interface ReturnsCoursesItem {
	/** course id */
	id: number | null;
	/** course full name */
	fullname: string | null;
	/** course display name */
	displayname: string | null;
	/** course short name */
	shortname: string | null;
	/** Course image */
	courseimage: string | null;
	/** category id */
	categoryid: number | null;
	/** category name */
	categoryname: string | null;
	/** Sort order in the category */
	sortorder: number | null;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** summary files in the summary field */
	summaryfiles: ReturnsCoursesItemSummaryfiles;
	/** additional overview files attached to this course */
	overviewfiles: ReturnsCoursesItemOverviewfiles;
	/** Whether the activity dates are shown or not */
	showactivitydates: boolean | null;
	/** Whether the activity completion conditions are shown or not */
	showcompletionconditions: boolean | null;
	/** contact users */
	contacts: ReturnsCoursesItemContacts;
	/** enrollment methods list */
	enrollmentmethods: ReturnsCoursesItemEnrollmentmethods;
	/** Custom fields */
	customfields: ReturnsCoursesItemCustomfields;
}

/**
 * course
 */
export type ReturnsCourses = ReturnsCoursesItem[];

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
	/** total course count */
	total: number | null;
	/** course */
	courses: ReturnsCourses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
