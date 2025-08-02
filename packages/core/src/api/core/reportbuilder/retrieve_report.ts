export interface Params {
	/** Report ID */
	reportid: number | null;
	/** Page number */
	page?: number | null;
	/** Reports per page */
	perpage?: number | null;
}

export interface ReturnsDetailsTagsItem {
	/** Tag id. */
	id: number;
	/** Tag name. */
	name: string;
	/** The raw, unnormalised name for the tag as entered by users. */
	rawname: string;
	/** Whether this tag is standard. */
	isstandard: boolean;
	/** Tag collection id. */
	tagcollid: number;
	/** Tag instance id. */
	taginstanceid: number;
	/** Context the tag instance belongs to. */
	taginstancecontextid: number;
	/** Id of the record tagged. */
	itemid: number;
	/** Tag ordering. */
	ordering: number;
	/** Whether the tag is flagged as inappropriate. */
	flag: number | null;
	/** The url to view the tag. */
	viewurl: string | null;
}

/**
 * tags
 */
export type ReturnsDetailsTags = ReturnsDetailsTagsItem[];

export interface ReturnsDetailsCustomfieldsDataItem {
	/** value */
	value: string | null;
	/** type */
	type: string;
	/** shortname */
	shortname: string;
	/** name */
	name: string;
	/** hasvalue */
	hasvalue: boolean;
	/** instanceid */
	instanceid: number;
}

/**
 * data
 */
export type ReturnsDetailsCustomfieldsData = ReturnsDetailsCustomfieldsDataItem[];

export interface ReturnsDetailsCustomfields {
	/** data */
	data: ReturnsDetailsCustomfieldsData;
}

export interface ReturnsDetailsModifiedby {
	/** id */
	id: number;
	/** email */
	email: string;
	/** idnumber */
	idnumber: string;
	/** phone1 */
	phone1: string;
	/** phone2 */
	phone2: string;
	/** department */
	department: string;
	/** institution */
	institution: string;
	/** fullname */
	fullname: string;
	/** identity */
	identity: string;
	/** profileurl */
	profileurl: string;
	/** profileimageurl */
	profileimageurl: string;
	/** profileimageurlsmall */
	profileimageurlsmall: string;
}

export interface ReturnsDetails {
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
	/** sourcename */
	sourcename: string | null;
	/** tags */
	tags: ReturnsDetailsTags;
	customfields: ReturnsDetailsCustomfields;
	modifiedby: ReturnsDetailsModifiedby;
}

/**
 * headers
 */
export type ReturnsDataHeaders = string[];

/**
 * columns
 */
export type ReturnsDataRowsItemColumns = (string | null)[];

export interface ReturnsDataRowsItem {
	/** columns */
	columns: ReturnsDataRowsItemColumns;
}

/**
 * rows
 */
export type ReturnsDataRows = ReturnsDataRowsItem[];

export interface ReturnsData {
	/** headers */
	headers: ReturnsDataHeaders;
	/** rows */
	rows: ReturnsDataRows;
	/** totalrowcount */
	totalrowcount: number;
}

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
	details: ReturnsDetails;
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
