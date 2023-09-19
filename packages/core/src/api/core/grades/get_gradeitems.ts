export interface Params {
	/** Course ID */
	courseid: number | null;
}

export interface ReturnsGradeItemsItem {
	/** An ID for the grade item */
	id: string | null;
	/** The full name of the grade item */
	itemname: string | null;
	/** The grade category of the grade item */
	category: string | null;
}

export type ReturnsGradeItems = ReturnsGradeItemsItem[];

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
	gradeItems: ReturnsGradeItems;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
