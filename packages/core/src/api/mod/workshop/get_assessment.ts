export interface Params {
	/** Assessment id */
	assessmentid: number | null;
}

export interface ReturnsAssessmentFeedbackcontentfilesItem {
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
 * feedbackcontentfiles
 */
export type ReturnsAssessmentFeedbackcontentfiles = ReturnsAssessmentFeedbackcontentfilesItem[];

export interface ReturnsAssessmentFeedbackattachmentfilesItem {
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
 * feedbackattachmentfiles
 */
export type ReturnsAssessmentFeedbackattachmentfiles =
	ReturnsAssessmentFeedbackattachmentfilesItem[];

export interface ReturnsAssessment {
	/** The primary key of the record. */
	id: number;
	/** The id of the assessed submission */
	submissionid: number;
	/** The id of the reviewer who makes this assessment */
	reviewerid: number;
	/** The weight of the assessment for the purposes of aggregation */
	weight: number;
	/** If 0 then the assessment was allocated but the reviewer has not assessed yet. If greater than 0 then the timestamp of when the reviewer assessed for the first time */
	timecreated: number | null;
	/** If 0 then the assessment was allocated but the reviewer has not assessed yet. If greater than 0 then the timestamp of when the reviewer assessed for the last time */
	timemodified: number | null;
	/** The aggregated grade for submission suggested by the reviewer. The grade 0..100 is computed from the values assigned to the assessment dimensions fields. If NULL then it has not been aggregated yet. */
	grade: number | null;
	/** The computed grade 0..100 for this assessment. If NULL then it has not been computed yet. */
	gradinggrade: number | null;
	/** Grade for the assessment manually overridden by a teacher. Grade is always from interval 0..100. If NULL then the grade is not overriden. */
	gradinggradeover: number | null;
	/** The id of the user who has overridden the grade for submission. */
	gradinggradeoverby: number | null;
	/** The comment/feedback from the reviewer for the author. */
	feedbackauthor: string | null;
	/** feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	feedbackauthorformat?: number | null;
	/** Are there some files attached to the feedbackauthor field? Sets to 1 by file_postupdate_standard_filemanager(). */
	feedbackauthorattachment: number | null;
	/** The comment/feedback from the teacher for the reviewer. For example the reason why the grade for assessment was overridden */
	feedbackreviewer: string | null;
	/** feedbackreviewer format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	feedbackreviewerformat?: number | null;
	/** feedbackcontentfiles */
	feedbackcontentfiles: ReturnsAssessmentFeedbackcontentfiles;
	/** feedbackattachmentfiles */
	feedbackattachmentfiles: ReturnsAssessmentFeedbackattachmentfiles;
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
	assessment: ReturnsAssessment;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
