export interface Params {
	/** user id */
	userid: number | null;
	/** Include count of enrolled users for each course? This can add several seconds to the response time if a user is on several large courses, so set this to false if the value will not be used to improve performance. */
	returnusercount?: boolean | null;
}

/**
 * File.
 */
export interface ReturnsItemOverviewfilesItem {
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
 * Overview files attached to this course.
 */
export type ReturnsItemOverviewfiles = ReturnsItemOverviewfilesItem[];

export interface ReturnsItem {
	/** id of course */
	id: number | null;
	/** short name of course */
	shortname: string | null;
	/** long name of course */
	fullname: string | null;
	/** course display name for lists. */
	displayname: string | null;
	/** Number of enrolled users in this course */
	enrolledusercount: number | null;
	/** id number of course */
	idnumber: string | null;
	/** 1 means visible, 0 means not yet visible course */
	visible: number | null;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** course format: weeks, topics, social, site */
	format: string | null;
	/** The course image URL */
	courseimage: string | null;
	/** true if grades are shown, otherwise false */
	showgrades: boolean | null;
	/** forced course language */
	lang: string | null;
	/** true if completion is enabled, otherwise false */
	enablecompletion: boolean | null;
	/** If completion criteria is set. */
	completionhascriteria: boolean | null;
	/** If the user is completion tracked. */
	completionusertracked: boolean | null;
	/** course category id */
	category: number | null;
	/** Progress percentage */
	progress: number | null;
	/** Whether the course is completed. */
	completed: boolean | null;
	/** Timestamp when the course start */
	startdate: number | null;
	/** Timestamp when the course end */
	enddate: number | null;
	/** Course section marker. */
	marker: number | null;
	/** Last access to the course (timestamp). */
	lastaccess: number | null;
	/** If the user marked this course a favourite. */
	isfavourite: boolean | null;
	/** If the user hide the course from the dashboard. */
	hidden: boolean | null;
	/** Overview files attached to this course. */
	overviewfiles: ReturnsItemOverviewfiles;
	/** Whether the activity dates are shown or not */
	showactivitydates: boolean | null;
	/** Whether the activity completion conditions are shown or not */
	showcompletionconditions: boolean | null;
	/** Last time course settings were updated (timestamp). */
	timemodified: number | null;
}

export type Returns = ReturnsItem[];
