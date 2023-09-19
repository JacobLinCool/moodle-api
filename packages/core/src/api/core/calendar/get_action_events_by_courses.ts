export type ParamsCourseids = (number | null)[];

export interface Params {
	courseids: ParamsCourseids;
	/** Time sort from */
	timesortfrom?: number | null;
	/** Time sort to */
	timesortto?: number | null;
	/** Limit number */
	limitnum?: number | null;
	/** The value a user wishes to search against */
	searchvalue?: string | null;
}

export interface ReturnsGroupedbycourseItemEventsItemIcon {
	/** key */
	key: string;
	/** component */
	component: string;
	/** alttext */
	alttext: string;
	/** iconurl */
	iconurl: string;
	/** iconclass */
	iconclass: string;
}

export interface ReturnsGroupedbycourseItemEventsItemCategory {
	/** id */
	id: number;
	/** name */
	name: string;
	/** idnumber */
	idnumber: string | null;
	/** description */
	description: string;
	/** parent */
	parent: number;
	/** coursecount */
	coursecount: number;
	/** visible */
	visible: number;
	/** timemodified */
	timemodified: number;
	/** depth */
	depth: number;
	/** nestedname */
	nestedname: string;
	/** url */
	url: string;
}

export interface ReturnsGroupedbycourseItemEventsItemCourse {
	/** id */
	id: number;
	/** fullname */
	fullname: string;
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** startdate */
	startdate: number;
	/** enddate */
	enddate: number;
	/** visible */
	visible: boolean;
	/** showactivitydates */
	showactivitydates: boolean | null;
	/** showcompletionconditions */
	showcompletionconditions: boolean | null;
	/** pdfexportfont */
	pdfexportfont: string | null;
	/** fullnamedisplay */
	fullnamedisplay: string;
	/** viewurl */
	viewurl: string;
	/** courseimage */
	courseimage: string;
	/** progress */
	progress: number;
	/** hasprogress */
	hasprogress: boolean;
	/** isfavourite */
	isfavourite: boolean;
	/** hidden */
	hidden: boolean;
	/** timeaccess */
	timeaccess: number;
	/** showshortname */
	showshortname: boolean;
	/** coursecategory */
	coursecategory: string;
}

export interface ReturnsGroupedbycourseItemEventsItemSubscription {
	/** displayeventsource */
	displayeventsource: boolean;
	/** subscriptionname */
	subscriptionname: string;
	/** subscriptionurl */
	subscriptionurl: string;
}

export interface ReturnsGroupedbycourseItemEventsItemAction {
	/** name */
	name: string;
	/** url */
	url: string;
	/** itemcount */
	itemcount: number;
	/** actionable */
	actionable: boolean;
	/** showitemcount */
	showitemcount: boolean;
}

export interface ReturnsGroupedbycourseItemEventsItem {
	/** id */
	id: number;
	/** name */
	name: string;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** location */
	location: string | null;
	/** categoryid */
	categoryid: number | null;
	/** groupid */
	groupid: number | null;
	/** userid */
	userid: number | null;
	/** repeatid */
	repeatid: number | null;
	/** eventcount */
	eventcount: number | null;
	/** component */
	component: string | null;
	/** modulename */
	modulename: string | null;
	/** activityname */
	activityname: string | null;
	/** activitystr */
	activitystr: string | null;
	/** instance */
	instance: number | null;
	/** eventtype */
	eventtype: string;
	/** timestart */
	timestart: number;
	/** timeduration */
	timeduration: number;
	/** timesort */
	timesort: number;
	/** timeusermidnight */
	timeusermidnight: number;
	/** visible */
	visible: number;
	/** timemodified */
	timemodified: number;
	/** overdue */
	overdue: boolean | null;
	icon: ReturnsGroupedbycourseItemEventsItemIcon;
	category: ReturnsGroupedbycourseItemEventsItemCategory;
	course: ReturnsGroupedbycourseItemEventsItemCourse;
	subscription: ReturnsGroupedbycourseItemEventsItemSubscription;
	/** canedit */
	canedit: boolean;
	/** candelete */
	candelete: boolean;
	/** deleteurl */
	deleteurl: string;
	/** editurl */
	editurl: string;
	/** viewurl */
	viewurl: string;
	/** formattedtime */
	formattedtime: string;
	/** formattedlocation */
	formattedlocation: string;
	/** isactionevent */
	isactionevent: boolean;
	/** iscourseevent */
	iscourseevent: boolean;
	/** iscategoryevent */
	iscategoryevent: boolean;
	/** groupname */
	groupname: string | null;
	/** normalisedeventtype */
	normalisedeventtype: string;
	/** normalisedeventtypetext */
	normalisedeventtypetext: string;
	action: ReturnsGroupedbycourseItemEventsItemAction;
	/** purpose */
	purpose: string;
	/** url */
	url: string;
}

/**
 * events
 */
export type ReturnsGroupedbycourseItemEvents = ReturnsGroupedbycourseItemEventsItem[];

export interface ReturnsGroupedbycourseItem {
	/** events */
	events: ReturnsGroupedbycourseItemEvents;
	/** firstid */
	firstid: number | null;
	/** lastid */
	lastid: number | null;
	/** courseid */
	courseid: number;
}

/**
 * groupedbycourse
 */
export type ReturnsGroupedbycourse = ReturnsGroupedbycourseItem[];

export interface Returns {
	/** groupedbycourse */
	groupedbycourse: ReturnsGroupedbycourse;
}
