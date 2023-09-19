export interface Params {
	/** Report ID */
	reportid: number | null;
	/** Whether editing mode is enabled */
	editmode?: boolean | null;
	/** Page size */
	pagesize?: number | null;
}

export interface ReturnsAttributesItem {
	/** name */
	name: string;
	/** value */
	value: string;
}

/**
 * attributes
 */
export type ReturnsAttributes = ReturnsAttributesItem[];

export interface ReturnsSidebarmenucardsMenucardsItemItemsItem {
	/** name */
	name: string;
	/** identifier */
	identifier: string;
	/** title */
	title: string;
	/** action */
	action: string;
	/** disabled */
	disabled: boolean;
}

/**
 * items
 */
export type ReturnsSidebarmenucardsMenucardsItemItems =
	ReturnsSidebarmenucardsMenucardsItemItemsItem[];

export interface ReturnsSidebarmenucardsMenucardsItem {
	/** name */
	name: string;
	/** key */
	key: string;
	/** items */
	items: ReturnsSidebarmenucardsMenucardsItemItems;
}

/**
 * menucards
 */
export type ReturnsSidebarmenucardsMenucards = ReturnsSidebarmenucardsMenucardsItem[];

export interface ReturnsSidebarmenucards {
	/** menucards */
	menucards: ReturnsSidebarmenucardsMenucards;
}

export interface ReturnsConditionsAvailableconditionsItemOptiongroupValuesItem {
	/** value */
	value: string;
	/** visiblename */
	visiblename: string;
}

/**
 * values
 */
export type ReturnsConditionsAvailableconditionsItemOptiongroupValues =
	ReturnsConditionsAvailableconditionsItemOptiongroupValuesItem[];

export interface ReturnsConditionsAvailableconditionsItemOptiongroup {
	/** text */
	text: string;
	/** values */
	values: ReturnsConditionsAvailableconditionsItemOptiongroupValues;
}

export interface ReturnsConditionsAvailableconditionsItem {
	optiongroup: ReturnsConditionsAvailableconditionsItemOptiongroup;
}

/**
 * availableconditions
 */
export type ReturnsConditionsAvailableconditions = ReturnsConditionsAvailableconditionsItem[];

export interface ReturnsConditions {
	/** hasavailableconditions */
	hasavailableconditions: boolean;
	/** availableconditions */
	availableconditions: ReturnsConditionsAvailableconditions;
	/** hasactiveconditions */
	hasactiveconditions: boolean;
	/** activeconditionsform */
	activeconditionsform: string;
	/** helpicon */
	helpicon: string;
	/** javascript */
	javascript: string;
}

export interface ReturnsFiltersAvailablefiltersItemOptiongroupValuesItem {
	/** value */
	value: string;
	/** visiblename */
	visiblename: string;
}

/**
 * values
 */
export type ReturnsFiltersAvailablefiltersItemOptiongroupValues =
	ReturnsFiltersAvailablefiltersItemOptiongroupValuesItem[];

export interface ReturnsFiltersAvailablefiltersItemOptiongroup {
	/** text */
	text: string;
	/** values */
	values: ReturnsFiltersAvailablefiltersItemOptiongroupValues;
}

export interface ReturnsFiltersAvailablefiltersItem {
	optiongroup: ReturnsFiltersAvailablefiltersItemOptiongroup;
}

/**
 * availablefilters
 */
export type ReturnsFiltersAvailablefilters = ReturnsFiltersAvailablefiltersItem[];

export interface ReturnsFiltersActivefiltersItem {
	/** id */
	id: number;
	/** heading */
	heading: string;
	/** headingeditable */
	headingeditable: string;
	/** sortorder */
	sortorder: number;
	/** movetitle */
	movetitle: string;
	/** entityname */
	entityname: string;
}

/**
 * activefilters
 */
export type ReturnsFiltersActivefilters = ReturnsFiltersActivefiltersItem[];

export interface ReturnsFilters {
	/** hasavailablefilters */
	hasavailablefilters: boolean;
	/** availablefilters */
	availablefilters: ReturnsFiltersAvailablefilters;
	/** hasactivefilters */
	hasactivefilters: boolean;
	/** activefilters */
	activefilters: ReturnsFiltersActivefilters;
	/** helpicon */
	helpicon: string;
}

export interface ReturnsSortingSortablecolumnsItemSorticon {
	/** key */
	key: string;
	/** component */
	component: string;
	/** title */
	title: string;
}

export interface ReturnsSortingSortablecolumnsItem {
	/** id */
	id: number;
	/** title */
	title: string;
	/** heading */
	heading: string;
	/** sortdirection */
	sortdirection: number;
	/** sortenabled */
	sortenabled: boolean;
	/** sortorder */
	sortorder: number;
	sorticon: ReturnsSortingSortablecolumnsItemSorticon;
	/** movetitle */
	movetitle: string;
	/** sortenabledtitle */
	sortenabledtitle: string;
}

/**
 * sortablecolumns
 */
export type ReturnsSortingSortablecolumns = ReturnsSortingSortablecolumnsItem[];

export interface ReturnsSorting {
	/** hassortablecolumns */
	hassortablecolumns: boolean;
	/** sortablecolumns */
	sortablecolumns: ReturnsSortingSortablecolumns;
	/** helpicon */
	helpicon: string;
}

export interface ReturnsCardview {
	/** form */
	form: string;
	/** helpicon */
	helpicon: string;
}

export interface Returns {
	/** name */
	name: string | null;
	/** source */
	source: string;
	/** type */
	type: number;
	/** uniquerows */
	uniquerows: boolean;
	/** conditiondata */
	conditiondata: string | null;
	/** settingsdata */
	settingsdata: string | null;
	/** contextid */
	contextid: number;
	/** component */
	component: string;
	/** area */
	area: string;
	/** itemid */
	itemid: number;
	/** usercreated */
	usercreated: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** table */
	table: string;
	/** filtersapplied */
	filtersapplied: number;
	/** filterspresent */
	filterspresent: boolean;
	/** filtersform */
	filtersform: string;
	/** attributes */
	attributes: ReturnsAttributes;
	/** classes */
	classes: string;
	/** editmode */
	editmode: boolean;
	sidebarmenucards: ReturnsSidebarmenucards;
	conditions: ReturnsConditions;
	filters: ReturnsFilters;
	sorting: ReturnsSorting;
	cardview: ReturnsCardview;
	/** javascript */
	javascript: string;
}
