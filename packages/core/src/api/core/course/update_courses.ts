export interface ParamsCoursesItemCourseformatoptionsItem {
	/** course format option name */
	name: string | null;
	/** course format option value */
	value: string | null;
}

/**
 * additional options for particular course format
 */
export type ParamsCoursesItemCourseformatoptions = ParamsCoursesItemCourseformatoptionsItem[];

export interface ParamsCoursesItemCustomfieldsItem {
	/** The shortname of the custom field */
	shortname: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields
 */
export type ParamsCoursesItemCustomfields = ParamsCoursesItemCustomfieldsItem[];

export interface ParamsCoursesItem {
	/** ID of the course */
	id: number | null;
	/** full name */
	fullname: string | null;
	/** course short name */
	shortname: string | null;
	/** category id */
	categoryid: number | null;
	/** id number */
	idnumber: string | null;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** course format: weeks, topics, social, site,.. */
	format: string | null;
	/** 1 if grades are shown, otherwise 0 */
	showgrades: number | null;
	/** number of recent items appearing on the course page */
	newsitems: number | null;
	/** timestamp when the course start */
	startdate: number | null;
	/** timestamp when the course end */
	enddate: number | null;
	/** (deprecated, use courseformatoptions) number of weeks/topics */
	numsections: number | null;
	/** largest size of file that can be uploaded into the course */
	maxbytes: number | null;
	/** are activity report shown (yes = 1, no =0) */
	showreports: number | null;
	/** 1: available to student, 0:not available */
	visible: number | null;
	/** (deprecated, use courseformatoptions) How the hidden sections in the course are displayed to students */
	hiddensections: number | null;
	/** no group, separate, visible */
	groupmode: number | null;
	/** 1: yes, 0: no */
	groupmodeforce: number | null;
	/** default grouping id */
	defaultgroupingid: number | null;
	/** Enabled, control via completion and activity settings. Disabled, not shown in activity settings. */
	enablecompletion: number | null;
	/** 1: yes 0: no */
	completionnotify: number | null;
	/** forced course language */
	lang: string | null;
	/** name of the force theme */
	forcetheme: string | null;
	/** additional options for particular course format */
	courseformatoptions: ParamsCoursesItemCourseformatoptions;
	/** Custom fields */
	customfields: ParamsCoursesItemCustomfields;
}

/**
 * courses to update
 */
export type ParamsCourses = ParamsCoursesItem[];

export interface Params {
	/** courses to update */
	courses: ParamsCourses;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
