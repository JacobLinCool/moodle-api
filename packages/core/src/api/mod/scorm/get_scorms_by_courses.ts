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
export interface ReturnsScormsItemIntrofilesItem {
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
export type ReturnsScormsItemIntrofiles = ReturnsScormsItemIntrofilesItem[];

/**
 * SCORM
 */
export interface ReturnsScormsItem {
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
	introfiles: ReturnsScormsItemIntrofiles;
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
	/** SCORM zip package size */
	packagesize: number | null;
	/** SCORM zip package URL */
	packageurl: string | null;
	/** SCORM version (SCORM_12, SCORM_13, SCORM_AICC) */
	version: string | null;
	/** Max grade */
	maxgrade: number | null;
	/** Grade method */
	grademethod: number | null;
	/** What grade */
	whatgrade: number | null;
	/** Maximum number of attemtps */
	maxattempt: number | null;
	/** Status current attempt is forced to "completed" */
	forcecompleted: boolean | null;
	/** Controls re-entry behaviour */
	forcenewattempt: number | null;
	/** Prevents to launch new attempts once finished */
	lastattemptlock: boolean | null;
	/** How to display attempt status */
	displayattemptstatus: number | null;
	/** Display contents structure */
	displaycoursestructure: boolean | null;
	/** Package content or ext path hash */
	sha1hash: string | null;
	/** MD5 Hash of package file */
	md5hash: string | null;
	/** Revison number */
	revision: number | null;
	/** First content to launch */
	launch: number | null;
	/** How to skip the content structure page */
	skipview: number | null;
	/** Disable preview mode? */
	hidebrowse: boolean | null;
	/** How to display the SCORM structure in player */
	hidetoc: number | null;
	/** Show navigation buttons */
	nav: number | null;
	/** Navigation position left */
	navpositionleft: number | null;
	/** Navigation position top */
	navpositiontop: number | null;
	/** Auto continue? */
	auto: boolean | null;
	/** Display in current or new window */
	popup: number | null;
	/** Frame width */
	width: number | null;
	/** Frame height */
	height: number | null;
	/** Available from */
	timeopen: number | null;
	/** Available to */
	timeclose: number | null;
	/** SCORM type */
	scormtype: string | null;
	/** Reference to the package */
	reference: string | null;
	/** Protect package downloads? */
	protectpackagedownloads: boolean | null;
	/** Auto-update frequency for remote packages */
	updatefreq: number | null;
	/** Additional options */
	options: string | null;
	/** Status passed/completed required? */
	completionstatusrequired: number | null;
	/** Minimum score required */
	completionscorerequired: number | null;
	/** Require all scos to return completion status */
	completionstatusallscos: number | null;
	/** Save track data automatically? */
	autocommit: boolean | null;
	/** Time of last modification */
	timemodified: number | null;
}

export type ReturnsScorms = ReturnsScormsItem[];

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
	scorms: ReturnsScorms;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
