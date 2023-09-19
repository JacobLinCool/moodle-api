export interface Params {
	/** The glossary ID */
	id: number | null;
	/** Start returning records from here */
	from?: number | null;
	/** Number of records to return */
	limit?: number | null;
}

export interface ReturnsCategoriesItem {
	/** The category ID */
	id: number | null;
	/** The glossary ID */
	glossaryid: number | null;
	/** The name of the category */
	name: string | null;
	/** Whether the category is automatically linked */
	usedynalink: boolean | null;
}

export type ReturnsCategories = ReturnsCategoriesItem[];

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
	/** The total number of records. */
	count: number | null;
	categories: ReturnsCategories;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
