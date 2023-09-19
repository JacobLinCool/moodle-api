/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsLtisItemIntrofilesItem {
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
 * Files in the introduction
 */
export type ReturnsLtisItemIntrofiles = ReturnsLtisItemIntrofilesItem[];

/**
 * Tool
 */
export interface ReturnsLtisItem {
	/** Activity instance id */
	id: number | null;
	/** Course module id */
	coursemodule: number | null;
	/** Course id */
	course: number | null;
	/** Activity name */
	name: string | null;
	/** Activity introduction */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction */
	introfiles: ReturnsLtisItemIntrofiles;
	/** Course section id */
	section: number | null;
	/** Visible */
	visible: boolean | null;
	/** Group mode */
	groupmode: number | null;
	/** Group id */
	groupingid: number | null;
	/** Forced activity language */
	lang: string | null;
	/** Time of creation */
	timecreated: number | null;
	/** Time of last modification */
	timemodified: number | null;
	/** Type id */
	typeid: number | null;
	/** Tool url */
	toolurl: string | null;
	/** Secure tool url */
	securetoolurl: string | null;
	/** Instructor choice send name */
	instructorchoicesendname: string | null;
	/** instructor choice send mail address */
	instructorchoicesendemailaddr: number | null;
	/** Instructor choice allow roster */
	instructorchoiceallowroster: number | null;
	/** Instructor choice allow setting */
	instructorchoiceallowsetting: number | null;
	/** instructor custom parameters */
	instructorcustomparameters: string | null;
	/** instructor choice accept grades */
	instructorchoiceacceptgrades: number | null;
	/** Enable grades */
	grade: number | null;
	/** Launch container mode */
	launchcontainer: number | null;
	/** Resource key */
	resourcekey: string | null;
	/** Shared secret */
	password: string | null;
	/** Debug launch */
	debuglaunch: number | null;
	/** Show title launch */
	showtitlelaunch: number | null;
	/** Show description launch */
	showdescriptionlaunch: number | null;
	/** Service salt */
	servicesalt: string | null;
	/** Alternative icon URL */
	icon: string | null;
	/** Secure icon URL */
	secureicon: string | null;
}

export type ReturnsLtis = ReturnsLtisItem[];

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
	ltis: ReturnsLtis;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
