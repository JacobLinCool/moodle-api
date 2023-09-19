/**
 * optional category data
 */
export interface ParamsCategoriesItemOptions {
	/** aggregation method */
	aggregation: number | null;
	/** exclude empty grades */
	aggregateonlygraded: boolean | null;
	/** aggregate outcomes */
	aggregateoutcomes: boolean | null;
	/** drop low grades */
	droplow: number | null;
	/** the category total name */
	itemname: string | null;
	/** the category iteminfo */
	iteminfo: string | null;
	/** the category idnumber */
	idnumber: string | null;
	/** the grade type */
	gradetype: number | null;
	/** the grade max */
	grademax: number | null;
	/** the grade min */
	grademin: number | null;
	/** the grade to pass */
	gradepass: number | null;
	/** the display type */
	display: number | null;
	/** the decimal count */
	decimals: number | null;
	/** grades hidden until */
	hiddenuntil: number | null;
	/** lock grades after */
	locktime: number | null;
	/** weight adjusted */
	weightoverride: boolean | null;
	/** weight coefficient */
	aggregationcoef2: string | null;
	/** The parent category id */
	parentcategoryid: number | null;
	/** the parent category idnumber */
	parentcategoryidnumber: string | null;
}

/**
 * Category to create
 */
export interface ParamsCategoriesItem {
	/** fullname of category */
	fullname: string | null;
	/** optional category data */
	options?: ParamsCategoriesItemOptions;
}

/**
 * Categories to create
 */
export type ParamsCategories = ParamsCategoriesItem[];

export interface Params {
	/** id of course */
	courseid: number | null;
	/** Categories to create */
	categories: ParamsCategories;
}

export type ReturnsCategoryids = (number | null)[];

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
	categoryids: ReturnsCategoryids;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
