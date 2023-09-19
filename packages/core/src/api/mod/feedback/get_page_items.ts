export interface Params {
	/** Feedback instance id */
	feedbackid: number | null;
	/** The page to get starting by 0 */
	page: number | null;
	/** Course where user completes the feedback (for site feedbacks only). */
	courseid?: number | null;
}

export interface ReturnsItemsItemItemfilesItem {
	/** contextid */
	contextid: number;
	/** component */
	component: string;
	/** filearea */
	filearea: string;
	/** itemid */
	itemid: number;
	/** filepath */
	filepath: string;
	/** filename */
	filename: string;
	/** isdir */
	isdir: boolean;
	/** isimage */
	isimage: boolean;
	/** timemodified */
	timemodified: number;
	/** timecreated */
	timecreated: number;
	/** filesize */
	filesize: number;
	/** author */
	author: string;
	/** license */
	license: string;
	/** filenameshort */
	filenameshort: string;
	/** filesizeformatted */
	filesizeformatted: string;
	/** icon */
	icon: string;
	/** timecreatedformatted */
	timecreatedformatted: string;
	/** timemodifiedformatted */
	timemodifiedformatted: string;
	/** url */
	url: string;
}

/**
 * itemfiles
 */
export type ReturnsItemsItemItemfiles = ReturnsItemsItemItemfilesItem[];

export interface ReturnsItemsItem {
	/** The record id. */
	id: number;
	/** The feedback instance id this records belongs to. */
	feedback: number;
	/** If it belogns to a template, the template id. */
	template: number;
	/** The item name. */
	name: string;
	/** The item label. */
	label: string;
	/** The text describing the item or the available possible answers. */
	presentation: string;
	/** The type of the item. */
	typ: string;
	/** Whether it has a value or not. */
	hasvalue: number;
	/** The position in the list of questions. */
	position: number;
	/** Whether is a item (question) required or not. */
	required: boolean;
	/** The item id this item depend on. */
	dependitem: number;
	/** The depend value. */
	dependvalue: string;
	/** Different additional settings for the item (question). */
	options: string;
	/** itemfiles */
	itemfiles: ReturnsItemsItemItemfiles;
	/** The item position number */
	itemnumber: number | null;
	/** Additional data that may be required by external functions */
	otherdata: string | null;
}

export type ReturnsItems = ReturnsItemsItem[];

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
	items: ReturnsItems;
	/** Whether is a previous page. */
	hasprevpage: boolean | null;
	/** Whether there are more pages. */
	hasnextpage: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
