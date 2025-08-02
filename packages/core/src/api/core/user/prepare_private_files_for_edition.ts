export interface Params {}

export interface ReturnsAreaoptionsItem {
	/** Name of option. */
	name: string | null;
	/** Value of option. */
	value: string | null;
}

/**
 * Draft file area options.
 */
export type ReturnsAreaoptions = ReturnsAreaoptionsItem[];

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
	/** Draft item id for the file area. */
	draftitemid: number | null;
	/** Draft file area options. */
	areaoptions: ReturnsAreaoptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
