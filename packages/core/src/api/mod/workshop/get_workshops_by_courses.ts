/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

export interface ReturnsWorkshopsItemIntrofilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * introfiles
 */
export type ReturnsWorkshopsItemIntrofiles = ReturnsWorkshopsItemIntrofilesItem[];

export interface ReturnsWorkshopsItemInstructauthorsfilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * instructauthorsfiles
 */
export type ReturnsWorkshopsItemInstructauthorsfiles =
	ReturnsWorkshopsItemInstructauthorsfilesItem[];

export interface ReturnsWorkshopsItemInstructreviewersfilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * instructreviewersfiles
 */
export type ReturnsWorkshopsItemInstructreviewersfiles =
	ReturnsWorkshopsItemInstructreviewersfilesItem[];

export interface ReturnsWorkshopsItemConclusionfilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * conclusionfiles
 */
export type ReturnsWorkshopsItemConclusionfiles = ReturnsWorkshopsItemConclusionfilesItem[];

export interface ReturnsWorkshopsItem {
	/** The primary key of the record. */
	id: number;
	/** Course id this workshop is part of. */
	course: number;
	/** Workshop name. */
	name: string;
	/** Workshop introduction text. */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat?: number | null;
	/** Forced activity language */
	lang: string | null;
	/** Instructions for the submission phase. */
	instructauthors: string | null;
	/** instructauthors format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	instructauthorsformat?: number | null;
	/** Instructions for the assessment phase. */
	instructreviewers: string | null;
	/** instructreviewers format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	instructreviewersformat?: number | null;
	/** The timestamp when the module was modified. */
	timemodified: number;
	/** The current phase of workshop (0 = not available, 1 = submission, 2 = assessment, 3 = closed). */
	phase: number;
	/** Optional feature: students practise evaluating on example submissions from teacher. */
	useexamples: boolean;
	/** Optional feature: students perform peer assessment of others' work. */
	usepeerassessment: boolean;
	/** Optional feature: students perform self assessment of their own work. */
	useselfassessment: boolean;
	/** The maximum grade for submission. */
	grade: number;
	/** The maximum grade for assessment. */
	gradinggrade: number;
	/** The type of the current grading strategy used in this workshop. */
	strategy: string;
	/** The recently used grading evaluation method. */
	evaluation: string;
	/** Number of digits that should be shown after the decimal point when displaying grades. */
	gradedecimals: number;
	/** Indicates whether text is required as part of each submission. 0 for no, 1 for optional, 2 for required. */
	submissiontypetext: number;
	/** Indicates whether a file upload is required as part of each submission. 0 for no, 1 for optional, 2 for required. */
	submissiontypefile: number;
	/** Maximum number of submission attachments. */
	nattachments: number;
	/** Comma separated list of file extensions. */
	submissionfiletypes: string | null;
	/** Allow submitting the work after the deadline. */
	latesubmissions: boolean;
	/** Maximum size of the one attached file. */
	maxbytes: number;
	/** 0 = example assessments are voluntary, 1 = examples must be assessed before submission, 2 = examples are available after own submission and must be assessed before peer/self assessment phase. */
	examplesmode: number;
	/** 0 = will be started manually, greater than 0 the timestamp of the start of the submission phase. */
	submissionstart: number;
	/** 0 = will be closed manually, greater than 0 the timestamp of the end of the submission phase. */
	submissionend: number;
	/** 0 = will be started manually, greater than 0 the timestamp of the start of the assessment phase. */
	assessmentstart: number;
	/** 0 = will be closed manually, greater than 0 the timestamp of the end of the assessment phase. */
	assessmentend: number;
	/** Automatically switch to the assessment phase after the submissions deadline. */
	phaseswitchassessment: boolean;
	/** A text to be displayed at the end of the workshop. */
	conclusion: string | null;
	/** conclusion format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	conclusionformat?: number | null;
	/** Mode of the overall feedback support. */
	overallfeedbackmode: number;
	/** Number of allowed attachments to the overall feedback. */
	overallfeedbackfiles: number;
	/** Comma separated list of file extensions. */
	overallfeedbackfiletypes: string | null;
	/** Maximum size of one file attached to the overall feedback. */
	overallfeedbackmaxbytes: number;
	/** coursemodule */
	coursemodule: number;
	/** introfiles */
	introfiles: ReturnsWorkshopsItemIntrofiles;
	/** instructauthorsfiles */
	instructauthorsfiles: ReturnsWorkshopsItemInstructauthorsfiles;
	/** instructreviewersfiles */
	instructreviewersfiles: ReturnsWorkshopsItemInstructreviewersfiles;
	/** conclusionfiles */
	conclusionfiles: ReturnsWorkshopsItemConclusionfiles;
}

export type ReturnsWorkshops = ReturnsWorkshopsItem[];

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
	workshops: ReturnsWorkshops;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
