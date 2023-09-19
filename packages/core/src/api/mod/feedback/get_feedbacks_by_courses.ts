/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

export interface ReturnsFeedbacksItemIntrofilesItem {
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
export type ReturnsFeedbacksItemIntrofiles = ReturnsFeedbacksItemIntrofilesItem[];

export interface ReturnsFeedbacksItemPageaftersubmitfilesItem {
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
 * pageaftersubmitfiles
 */
export type ReturnsFeedbacksItemPageaftersubmitfiles =
	ReturnsFeedbacksItemPageaftersubmitfilesItem[];

export interface ReturnsFeedbacksItem {
	/** The primary key of the record. */
	id: number;
	/** Course id this feedback is part of. */
	course: number;
	/** Feedback name. */
	name: string;
	/** Feedback introduction text. */
	intro: string;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat?: number | null;
	/** Forced activity language */
	lang: string | null;
	/** Whether the feedback is anonymous. */
	anonymous: number;
	/** Whether email notifications will be sent to teachers. */
	email_notification: boolean;
	/** Whether multiple submissions are allowed. */
	multiple_submit: boolean;
	/** Whether questions should be auto-numbered. */
	autonumbering: boolean;
	/** Link to next page after submission. */
	site_after_submit: string;
	/** Text to display after submission. */
	page_after_submit: string;
	/** page_after_submit format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	page_after_submitformat?: number | null;
	/** Whether stats should be published. */
	publish_stats: boolean;
	/** Allow answers from this time. */
	timeopen: number;
	/** Allow answers until this time. */
	timeclose: number;
	/** The time this record was modified. */
	timemodified: number;
	/** If this field is set to 1, then the activity will be automatically marked as complete on submission. */
	completionsubmit: boolean;
	/** coursemodule */
	coursemodule: number;
	/** introfiles */
	introfiles: ReturnsFeedbacksItemIntrofiles;
	/** pageaftersubmitfiles */
	pageaftersubmitfiles: ReturnsFeedbacksItemPageaftersubmitfiles;
}

export type ReturnsFeedbacks = ReturnsFeedbacksItem[];

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
	feedbacks: ReturnsFeedbacks;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
