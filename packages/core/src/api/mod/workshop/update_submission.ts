export interface Params {
	/** Submission id */
	submissionid: number | null;
	/** Submission title */
	title: string | null;
	/** Submission text content */
	content?: string | null;
	/** The format used for the content */
	contentformat?: number | null;
	/** The draft file area id for inline attachments in the content */
	inlineattachmentsid?: number | null;
	/** The draft file area id for attachments */
	attachmentsid?: number | null;
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
	/** True if the submission was updated false otherwise. */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
