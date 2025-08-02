export interface Params {
	/** category to filter areas */
	cat?: string | null;
}

/**
 * Search area
 */
export interface ReturnsAreasItem {
	/** search area id */
	id: string | null;
	/** category id */
	categoryid: string | null;
	/** category name */
	categoryname: string | null;
	/** search area name */
	name: string | null;
}

/**
 * Search areas
 */
export type ReturnsAreas = ReturnsAreasItem[];

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
	/** Search areas */
	areas: ReturnsAreas;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
