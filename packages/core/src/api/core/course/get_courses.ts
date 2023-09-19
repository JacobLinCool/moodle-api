/**
 * List of course id. If empty return all courses
except front page course.
 */
export type ParamsOptionsIds = (number | null)[];

/**
 * options - operator OR is used
 */
export interface ParamsOptions {
	/** List of course id. If empty return all courses except front page course. */
	ids: ParamsOptionsIds;
}

export interface Params {
	/** options - operator OR is used */
	options?: ParamsOptions;
}

export interface ReturnsItemCourseformatoptionsItem {
	/** course format option name */
	name: string | null;
	/** course format option value */
	value: string | null;
}

/**
 * additional options for particular course format
 */
export type ReturnsItemCourseformatoptions = ReturnsItemCourseformatoptionsItem[];

export interface ReturnsItemCustomfieldsItem {
	/** The name of the custom field */
	name: string | null;
	/** The shortname of the custom field */
	shortname: string | null;
	/** The type of the custom field - text, checkbox... */
	type: string | null;
	/** The raw value of the custom field */
	valueraw: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields and associated values
 */
export type ReturnsItemCustomfields = ReturnsItemCustomfieldsItem[];

/**
 * course
 */
export interface ReturnsItem {
	/** course id */
	id: number | null;
	/** course short name */
	shortname: string | null;
	/** category id */
	categoryid: number | null;
	/** sort order into the category */
	categorysortorder: number | null;
	/** full name */
	fullname: string | null;
	/** course display name */
	displayname: string | null;
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
	/** timestamp when the course have been created */
	timecreated: number | null;
	/** timestamp when the course have been modified */
	timemodified: number | null;
	/** Enabled, control via completion and activity settings. Disbaled, not shown in activity settings. */
	enablecompletion: number | null;
	/** 1: yes 0: no */
	completionnotify: number | null;
	/** forced course language */
	lang: string | null;
	/** name of the force theme */
	forcetheme: string | null;
	/** additional options for particular course format */
	courseformatoptions: ReturnsItemCourseformatoptions;
	/** Whether the activity dates are shown or not */
	showactivitydates: boolean | null;
	/** Whether the activity completion conditions are shown or not */
	showcompletionconditions: boolean | null;
	/** Custom fields and associated values */
	customfields: ReturnsItemCustomfields;
}

export type Returns = ReturnsItem[];
