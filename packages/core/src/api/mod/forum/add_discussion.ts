export interface ParamsOptionsItem {
	/** The allowed keys (value format) are: discussionsubscribe (bool); subscribe to the discussion?, default to true discussionpinned    (bool); is the discussion pinned, default to false inlineattachmentsid              (int); the draft file area id for inline attachments attachmentsid       (int); the draft file area id for attachments  */
	name: string | null;
	/** The value of the option, This param is validated in the external function. */
	value: string | null;
}

/**
 * Options
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** Forum instance ID */
	forumid: number | null;
	/** New Discussion subject */
	subject: string | null;
	/** New Discussion message (only html format allowed) */
	message: string | null;
	/** The group, default to 0 */
	groupid?: number | null;
	/** Options */
	options?: ParamsOptions;
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
	/** New Discussion ID */
	discussionid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
