export interface Params {
	/** future, inprogress, or past */
	classification: string | null;
	/** Result set limit */
	limit?: number | null;
	/** Result set offset */
	offset?: number | null;
	/** Sort string */
	sort?: string | null;
	/** Used when classification = customfield */
	customfieldname?: string | null;
	/** Used when classification = customfield */
	customfieldvalue?: string | null;
	/** The value a user wishes to search against */
	searchvalue?: string | null;
	/** Optional starting timestamp for action events */
	eventsfrom?: number | null;
	/** Optional ending timestamp for action events */
	eventsto?: number | null;
}

export interface ReturnsCoursesItem {
	/** id */
	id: number;
	/** fullname */
	fullname: string;
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** startdate */
	startdate: number;
	/** enddate */
	enddate: number;
	/** visible */
	visible: boolean;
	/** showactivitydates */
	showactivitydates: boolean | null;
	/** showcompletionconditions */
	showcompletionconditions: boolean | null;
	/** pdfexportfont */
	pdfexportfont: string | null;
	/** fullnamedisplay */
	fullnamedisplay: string;
	/** viewurl */
	viewurl: string;
	/** courseimage */
	courseimage: string;
	/** progress */
	progress: number;
	/** hasprogress */
	hasprogress: boolean;
	/** isfavourite */
	isfavourite: boolean;
	/** hidden */
	hidden: boolean;
	/** timeaccess */
	timeaccess: number;
	/** showshortname */
	showshortname: boolean;
	/** coursecategory */
	coursecategory: string;
}

/**
 * Course
 */
export type ReturnsCourses = ReturnsCoursesItem[];

export interface Returns {
	/** Course */
	courses: ReturnsCourses;
	/** Offset for the next request */
	nextoffset: number | null;
	/** Whether more courses with events exist within the provided parameters */
	morecoursesavailable: boolean | null;
}
