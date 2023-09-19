export interface Params {}

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
	/** File area component. */
	component: string | null;
	/** File area context. */
	contextid: number | null;
	/** File area user id. */
	userid: number | null;
	/** File area name. */
	filearea: string | null;
	/** File are item id. */
	itemid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
