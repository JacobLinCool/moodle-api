export interface ParamsCategoriesItem {
	/** new category name */
	name: string | null;
	/** the parent category id inside which the new category will be created - set to 0 for a root category */
	parent?: number | null;
	/** the new category idnumber */
	idnumber: string | null;
	/** the new category description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** the new category theme. This option must be enabled on moodle */
	theme: string | null;
}

export type ParamsCategories = ParamsCategoriesItem[];

export interface Params {
	categories: ParamsCategories;
}

export interface ReturnsItem {
	/** new category id */
	id: number | null;
	/** new category name */
	name: string | null;
}

export type Returns = ReturnsItem[];
