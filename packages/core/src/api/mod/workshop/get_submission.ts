export interface Params {
	/** Submission id */
	submissionid: number | null;
}

export interface ReturnsSubmissionContentfilesItem {
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
 * contentfiles
 */
export type ReturnsSubmissionContentfiles = ReturnsSubmissionContentfilesItem[];

export interface ReturnsSubmissionAttachmentfilesItem {
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
 * attachmentfiles
 */
export type ReturnsSubmissionAttachmentfiles = ReturnsSubmissionAttachmentfilesItem[];

export interface ReturnsSubmission {
	/** The primary key of the record. */
	id: number;
	/** The id of the workshop instance. */
	workshopid: number;
	/** Is this submission an example from teacher. */
	example: boolean | null;
	/** The author of the submission. */
	authorid: number;
	/** Timestamp when the work was submitted for the first time. */
	timecreated: number;
	/** Timestamp when the submission has been updated. */
	timemodified: number;
	/** The submission title. */
	title: string;
	/** Submission text. */
	content: string | null;
	/** content format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentformat?: number | null;
	/** The trust mode of the data. */
	contenttrust: number;
	/** Used by File API file_postupdate_standard_filemanager. */
	attachment: number | null;
	/** Aggregated grade for the submission. The grade is a decimal number from interval 0..100. If NULL then the grade for submission has not been aggregated yet. */
	grade: number | null;
	/** Grade for the submission manually overridden by a teacher. Grade is always from interval 0..100. If NULL then the grade is not overriden. */
	gradeover: number | null;
	/** The id of the user who has overridden the grade for submission. */
	gradeoverby: number | null;
	/** Teacher comment/feedback for the author of the submission, for example describing the reasons for the grade overriding. */
	feedbackauthor: string | null;
	/** feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	feedbackauthorformat?: number | null;
	/** The timestamp when grade or gradeover was recently modified. */
	timegraded: number | null;
	/** Shall the submission be available to other when the workshop is closed. */
	published: boolean | null;
	/** Has this submission been submitted after the deadline or during the assessment phase? */
	late: number;
	/** contentfiles */
	contentfiles: ReturnsSubmissionContentfiles;
	/** attachmentfiles */
	attachmentfiles: ReturnsSubmissionAttachmentfiles;
}

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
	submission: ReturnsSubmission;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
