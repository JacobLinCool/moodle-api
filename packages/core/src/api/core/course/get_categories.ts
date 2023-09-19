export interface ParamsCriteriaItem {
	/** The category column to search, expected keys (value format) are:"id" (int) the category id,"ids" (string) category ids separated by commas,"name" (string) the category name,"parent" (int) the parent category id,"idnumber" (string) category idnumber - user must have 'moodle/category:manage' to search on idnumber,"visible" (int) whether the returned categories must be visible or hidden. If the key is not passed, then the function return all categories that the user can see. - user must have 'moodle/category:manage' or 'moodle/category:viewhiddencategories' to search on visible,"theme" (string) only return the categories having this theme - user must have 'moodle/category:manage' to search on theme */
	key: string | null;
	/** the value to match */
	value: string | null;
}

/**
 * criteria
 */
export type ParamsCriteria = ParamsCriteriaItem[];

export interface Params {
	/** criteria */
	criteria?: ParamsCriteria;
	/** return the sub categories infos (1 - default) otherwise only the category info (0) */
	addsubcategories?: boolean | null;
}

/**
 * List of categories
 */
export interface ReturnsItem {
	/** category id */
	id: number | null;
	/** category name */
	name: string | null;
	/** category id number */
	idnumber: string | null;
	/** category description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** parent category id */
	parent: number | null;
	/** category sorting order */
	sortorder: number | null;
	/** number of courses in this category */
	coursecount: number | null;
	/** 1: available, 0:not available */
	visible: number | null;
	/** 1: available, 0:not available */
	visibleold: number | null;
	/** timestamp */
	timemodified: number | null;
	/** category depth */
	depth: number | null;
	/** category path */
	path: string | null;
	/** category theme */
	theme: string | null;
}

export type Returns = ReturnsItem[];
