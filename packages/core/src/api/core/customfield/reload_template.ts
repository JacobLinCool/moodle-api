export interface Params {
	/** component */
	component: string | null;
	/** area */
	area: string | null;
	/** itemid */
	itemid: number | null;
}

export interface ReturnsCategoriesItemFieldsItem {
	/** name */
	name: string | null;
	/** shortname */
	shortname: string | null;
	/** type */
	type: string | null;
	/** id */
	id: number | null;
}

export type ReturnsCategoriesItemFields = ReturnsCategoriesItemFieldsItem[];

export interface ReturnsCategoriesItem {
	/** id */
	id: number | null;
	/** inplace editable name */
	nameeditable: string | null;
	/** addfieldmenu */
	addfieldmenu: string | null;
	fields: ReturnsCategoriesItemFields;
}

export type ReturnsCategories = ReturnsCategoriesItem[];

export interface Returns {
	/** component */
	component: string | null;
	/** area */
	area: string | null;
	/** itemid */
	itemid: number | null;
	/** view has categories */
	usescategories: boolean | null;
	categories: ReturnsCategories;
}
