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
export interface ReturnsChoicesItemIntrofilesItem {
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
export type ReturnsChoicesItemIntrofiles = ReturnsChoicesItemIntrofilesItem[];

/**
 * Choices
 */
export interface ReturnsChoicesItem {
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
	introfiles: ReturnsChoicesItemIntrofiles;
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
	/** If choice is published */
	publish: boolean | null;
	/** 0 never, 1 after answer, 2 after close, 3 always */
	showresults: number | null;
	/** Display mode (vertical, horizontal) */
	display: number | null;
	/** Allow update */
	allowupdate: boolean | null;
	/** Allow multiple choices */
	allowmultiple: boolean | null;
	/** Show users who not answered yet */
	showunanswered: boolean | null;
	/** Include inactive users */
	includeinactive: boolean | null;
	/** Limit unswers */
	limitanswers: boolean | null;
	/** Date of opening validity */
	timeopen: number | null;
	/** Date of closing validity */
	timeclose: number | null;
	/** Show preview before timeopen */
	showpreview: boolean | null;
	/** Time of last modification */
	timemodified: number | null;
	/** Completion on user submission */
	completionsubmit: boolean | null;
	/** Show available spaces */
	showavailable: boolean | null;
}

export type ReturnsChoices = ReturnsChoicesItem[];

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
	choices: ReturnsChoices;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
