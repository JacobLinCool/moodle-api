export interface Params {
	/** Course Id */
	courseid: number | null;
	/** Return grades only for this user (optional) */
	userid?: number | null;
	/** Get users from this group only */
	groupid?: number | null;
}

/**
 * The item returned data
 */
export interface ReturnsTablesItemTabledataItemItemname {
	/** class */
	class: string | null;
	/** col span */
	colspan: number | null;
	/** cell content */
	content: string | null;
	/** id */
	id: string | null;
}

/**
 * The item returned data
 */
export interface ReturnsTablesItemTabledataItemLeader {
	/** class */
	class: string | null;
	/** row span */
	rowspan: number | null;
}

/**
 * weight column
 */
export interface ReturnsTablesItemTabledataItemWeight {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * grade column
 */
export interface ReturnsTablesItemTabledataItemGrade {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * range column
 */
export interface ReturnsTablesItemTabledataItemRange {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * percentage column
 */
export interface ReturnsTablesItemTabledataItemPercentage {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * lettergrade column
 */
export interface ReturnsTablesItemTabledataItemLettergrade {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * rank column
 */
export interface ReturnsTablesItemTabledataItemRank {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * average column
 */
export interface ReturnsTablesItemTabledataItemAverage {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * feedback column
 */
export interface ReturnsTablesItemTabledataItemFeedback {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

/**
 * contributiontocoursetotal column
 */
export interface ReturnsTablesItemTabledataItemContributiontocoursetotal {
	/** class */
	class: string | null;
	/** cell content */
	content: string | null;
	/** headers */
	headers: string | null;
}

export type ReturnsTablesItemTabledataItemParentcategories = (number | null)[];

/**
 * table
 */
export interface ReturnsTablesItemTabledataItem {
	/** The item returned data */
	itemname: ReturnsTablesItemTabledataItemItemname;
	/** The item returned data */
	leader: ReturnsTablesItemTabledataItemLeader;
	/** weight column */
	weight: ReturnsTablesItemTabledataItemWeight;
	/** grade column */
	grade: ReturnsTablesItemTabledataItemGrade;
	/** range column */
	range: ReturnsTablesItemTabledataItemRange;
	/** percentage column */
	percentage: ReturnsTablesItemTabledataItemPercentage;
	/** lettergrade column */
	lettergrade: ReturnsTablesItemTabledataItemLettergrade;
	/** rank column */
	rank: ReturnsTablesItemTabledataItemRank;
	/** average column */
	average: ReturnsTablesItemTabledataItemAverage;
	/** feedback column */
	feedback: ReturnsTablesItemTabledataItemFeedback;
	/** contributiontocoursetotal column */
	contributiontocoursetotal: ReturnsTablesItemTabledataItemContributiontocoursetotal;
	parentcategories: ReturnsTablesItemTabledataItemParentcategories;
}

export type ReturnsTablesItemTabledata = ReturnsTablesItemTabledataItem[];

export interface ReturnsTablesItem {
	/** course id */
	courseid: number | null;
	/** user id */
	userid: number | null;
	/** user fullname */
	userfullname: string | null;
	/** table max depth (needed for printing it) */
	maxdepth: number | null;
	tabledata: ReturnsTablesItemTabledata;
}

export type ReturnsTables = ReturnsTablesItem[];

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
	tables: ReturnsTables;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
