export interface Params {
	/** Post to be deleted. It can be a discussion topic post. */
	postid: number | null;
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
	/** True if the post/discussion was deleted, false otherwise. */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
