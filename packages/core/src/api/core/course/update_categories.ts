export interface ParamsCategoriesItem {
	/** course id */
	id: number | null;
	/** category name */
	name: string | null;
	/** category id number */
	idnumber: string | null;
	/** parent category id */
	parent: number | null;
	/** category description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** the category theme. This option must be enabled on moodle */
	theme: string | null;
}

export type ParamsCategories = ParamsCategoriesItem[];

export interface Params {
	categories: ParamsCategories;
}
