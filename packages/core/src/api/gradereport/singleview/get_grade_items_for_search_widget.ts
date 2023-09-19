export interface Params {
	/** Course Id */
	courseid: number | null;
}

export interface ReturnsGradeitemsItem {
	/** ID of the grade item */
	id: number | null;
	/** The full name of the grade item */
	name: string | null;
}

export type ReturnsGradeitems = ReturnsGradeitemsItem[];

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
	gradeitems: ReturnsGradeitems;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
