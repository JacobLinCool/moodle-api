/**
 * Array of course ids.
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids. */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsWikisItemIntrofilesItem {
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
export type ReturnsWikisItemIntrofiles = ReturnsWikisItemIntrofilesItem[];

/**
 * Wikis
 */
export interface ReturnsWikisItem {
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
	introfiles: ReturnsWikisItemIntrofiles;
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
	/** Time of creation. */
	timecreated: number | null;
	/** Time of last modification. */
	timemodified: number | null;
	/** First page title. */
	firstpagetitle: string | null;
	/** Wiki mode (individual, collaborative). */
	wikimode: string | null;
	/** Wiki's default format (html, creole, nwiki). */
	defaultformat: string | null;
	/** 1 if format is forced, 0 otherwise. */
	forceformat: number | null;
	/** Edit begin. */
	editbegin: number | null;
	/** Edit end. */
	editend: number | null;
	/** True if user can create pages. */
	cancreatepages: boolean | null;
}

export type ReturnsWikis = ReturnsWikisItem[];

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
	wikis: ReturnsWikis;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
