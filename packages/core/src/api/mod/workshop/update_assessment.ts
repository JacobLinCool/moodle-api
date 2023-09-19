export interface ParamsDataItem {
	/** The assessment data (use WS get_assessment_form_definition for obtaining the data to sent). Apart from that data, you can optionally send: feedbackauthor (str); the feedback for the submission author feedbackauthorformat (int); the format of the feedbackauthor feedbackauthorinlineattachmentsid (int); the draft file area for the editor attachments feedbackauthorattachmentsid (int); the draft file area id for the feedback attachments */
	name: string | null;
	/** The value of the option. */
	value: string | null;
}

/**
 * Assessment data
 */
export type ParamsData = ParamsDataItem[];

export interface Params {
	/** Assessment id. */
	assessmentid: number | null;
	/** Assessment data */
	data: ParamsData;
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
	/** status: true if the assessment was added or updated false otherwise. */
	status: boolean | null;
	/** Raw percentual grade (0.00000 to 100.00000) for submission. */
	rawgrade: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
