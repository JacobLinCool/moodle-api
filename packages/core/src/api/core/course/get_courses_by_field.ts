export interface Params {
	/** The field to search can be left empty for all courses or: id: course id ids: comma separated course ids shortname: course short name idnumber: course id number category: category id the course belongs to  */
	field?: string | null;
	/** The value to match */
	value?: string | null;
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

export interface ReturnsCoursesItemFiltersItem {
	/** Filter plugin name */
	filter: string | null;
	/** Filter state: 1 for on, -1 for off, 0 if inherit */
	localstate: number | null;
	/** 1 or 0 to use when localstate is set to inherit */
	inheritedstate: number | null;
}

/**
 * Course filters
 */
export type ReturnsCoursesItemFilters = ReturnsCoursesItemFiltersItem[];

export interface ReturnsCoursesItemCourseformatoptionsItem {
	/** Course format option name. */
	name: string | null;
	/** Course format option value. */
	value: string | null;
}

/**
 * Additional options for particular course format.
 */
export type ReturnsCoursesItemCourseformatoptions = ReturnsCoursesItemCourseformatoptionsItem[];

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
	/** Id number */
	idnumber: string | null;
	/** Course format: weeks, topics, social, site,.. */
	format: string | null;
	/** 1 if grades are shown, otherwise 0 */
	showgrades: number | null;
	/** Number of recent items appearing on the course page */
	newsitems: number | null;
	/** Timestamp when the course start */
	startdate: number | null;
	/** Timestamp when the course end */
	enddate: number | null;
	/** Largest size of file that can be uploaded into */
	maxbytes: number | null;
	/** Are activity report shown (yes = 1, no =0) */
	showreports: number | null;
	/** 1: available to student, 0:not available */
	visible: number | null;
	/** no group, separate, visible */
	groupmode: number | null;
	/** 1: yes, 0: no */
	groupmodeforce: number | null;
	/** default grouping id */
	defaultgroupingid: number | null;
	/** Completion enabled? 1: yes 0: no */
	enablecompletion: number | null;
	/** 1: yes 0: no */
	completionnotify: number | null;
	/** Forced course language */
	lang: string | null;
	/** Fame of the forced theme */
	theme: string | null;
	/** Current course marker */
	marker: number | null;
	/** If legacy files are enabled */
	legacyfiles: number | null;
	/** Calendar type */
	calendartype: string | null;
	/** Time when the course was created */
	timecreated: number | null;
	/** Last time  the course was updated */
	timemodified: number | null;
	/** If is a requested course */
	requested: number | null;
	/** Cache revision number */
	cacherev: number | null;
	/** Course filters */
	filters: ReturnsCoursesItemFilters;
	/** Additional options for particular course format. */
	courseformatoptions: ReturnsCoursesItemCourseformatoptions;
}

/**
 * Course
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
	/** Course */
	courses: ReturnsCourses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
