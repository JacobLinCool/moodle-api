export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** the page id */
	pageid: number | null;
	/** optional password (the lesson may be protected) */
	password?: string | null;
	/** if we want to review just after finishing (1 hour margin) */
	review?: boolean | null;
	/** if we must return the complete page contents once rendered */
	returncontents?: boolean | null;
}

/**
 * Page fields
 */
export interface ReturnsPage {
	/** The id of this lesson page */
	id: number | null;
	/** The id of the lesson this page belongs to */
	lessonid: number | null;
	/** The id of the page before this one */
	prevpageid: number | null;
	/** The id of the next page in the page sequence */
	nextpageid: number | null;
	/** Identifies the page type of this page */
	qtype: number | null;
	/** Used to record page type specific options */
	qoption: number | null;
	/** Used to record page specific layout selections */
	layout: number | null;
	/** Used to record page specific display selections */
	display: number | null;
	/** Timestamp for when the page was created */
	timecreated: number | null;
	/** Timestamp for when the page was last modified */
	timemodified: number | null;
	/** The title of this page */
	title: string | null;
	/** The contents of this page */
	contents: string | null;
	/** contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentsformat: number | null;
	/** Toggles display in the left menu block */
	displayinmenublock: boolean | null;
	/** The type of the page [question | structure] */
	type: number | null;
	/** The unique identifier for the page type */
	typeid: number | null;
	/** The string that describes this page type */
	typestring: string | null;
}

/**
 * File.
 */
export interface ReturnsContentfilesItem {
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
 * List of files.
 */
export type ReturnsContentfiles = ReturnsContentfilesItem[];

/**
 * File.
 */
export interface ReturnsAnswersItemAnswerfilesItem {
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
 * List of files.
 */
export type ReturnsAnswersItemAnswerfiles = ReturnsAnswersItemAnswerfilesItem[];

/**
 * File.
 */
export interface ReturnsAnswersItemResponsefilesItem {
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
 * List of files.
 */
export type ReturnsAnswersItemResponsefiles = ReturnsAnswersItemResponsefilesItem[];

/**
 * The page answers
 */
export interface ReturnsAnswersItem {
	/** The ID of this answer in the database */
	id: number | null;
	/** List of files. */
	answerfiles: ReturnsAnswersItemAnswerfiles;
	/** List of files. */
	responsefiles: ReturnsAnswersItemResponsefiles;
	/** Identifies where the user goes upon completing a page with this answer */
	jumpto: number | null;
	/** The grade this answer is worth */
	grade: number | null;
	/** The score this answer will give */
	score: number | null;
	/** Used to store options for the answer */
	flags: number | null;
	/** A timestamp of when the answer was created */
	timecreated: number | null;
	/** A timestamp of when the answer was modified */
	timemodified: number | null;
	/** Possible answer text */
	answer: string | null;
	/** answer format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	answerformat: number | null;
	/** Response text for the answer */
	response: string | null;
	/** response format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	responseformat: number | null;
}

export type ReturnsAnswers = ReturnsAnswersItem[];

/**
 * The lesson generated messages
 */
export interface ReturnsMessagesItem {
	/** Message. */
	message: string | null;
	/** Message type: usually a CSS identifier like: success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess */
	type: string | null;
}

export type ReturnsMessages = ReturnsMessagesItem[];

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
	/** Page fields */
	page: ReturnsPage;
	/** New page id (if a jump was made) */
	newpageid: number | null;
	/** Page html content */
	pagecontent: string | null;
	/** The ongoing score message */
	ongoingscore: string | null;
	/** Progress percentage in the lesson */
	progress: number | null;
	/** List of files. */
	contentfiles: ReturnsContentfiles;
	answers: ReturnsAnswers;
	messages: ReturnsMessages;
	/** Whether we should display the menu or not in this page. */
	displaymenu: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
