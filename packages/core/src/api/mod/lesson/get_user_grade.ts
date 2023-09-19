export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** the user id (empty for current user) */
	userid?: number | null;
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
	/** The lesson final raw grade */
	grade: number | null;
	/** The lesson final grade formatted */
	formattedgrade: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
