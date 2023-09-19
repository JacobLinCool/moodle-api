export interface Params {
	/** quiz instance id */
	quizid: number | null;
	/** the grade to check */
	grade: number | null;
}

/**
 * File.
 */
export interface ReturnsFeedbackinlinefilesItem {
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
 * feedback inline files
 */
export type ReturnsFeedbackinlinefiles = ReturnsFeedbackinlinefilesItem[];

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
	/** the comment that corresponds to this grade (empty for none) */
	feedbacktext: string | null;
	/** feedbacktext format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	feedbacktextformat: number | null;
	/** feedback inline files */
	feedbackinlinefiles: ReturnsFeedbackinlinefiles;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
