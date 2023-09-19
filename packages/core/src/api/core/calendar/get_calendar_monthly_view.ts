export interface Params {
	/** Year to be viewed */
	year: number | null;
	/** Month to be viewed */
	month: number | null;
	/** Course being viewed */
	courseid?: number | null;
	/** Category being viewed */
	categoryid?: number | null;
	/** Whether to show course navigation */
	includenavigation?: boolean | null;
	/** Whether to return the mini month view or not */
	mini?: boolean | null;
	/** Day to be viewed */
	day?: number | null;
	/** The view mode of the calendar */
	view?: string | null;
}

/**
 * prepadding
 */
export type ReturnsWeeksItemPrepadding = number[];

/**
 * postpadding
 */
export type ReturnsWeeksItemPostpadding = number[];

export interface ReturnsWeeksItemDaysItemEventsItemIcon {
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

export interface ReturnsWeeksItemDaysItemEventsItemCategory {
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

export interface ReturnsWeeksItemDaysItemEventsItemCourse {
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

export interface ReturnsWeeksItemDaysItemEventsItemSubscription {
	/** displayeventsource */
	displayeventsource: boolean;
	/** subscriptionname */
	subscriptionname: string;
	/** subscriptionurl */
	subscriptionurl: string;
}

export interface ReturnsWeeksItemDaysItemEventsItemAction {
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

export interface ReturnsWeeksItemDaysItemEventsItem {
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
	icon: ReturnsWeeksItemDaysItemEventsItemIcon;
	category: ReturnsWeeksItemDaysItemEventsItemCategory;
	course: ReturnsWeeksItemDaysItemEventsItemCourse;
	subscription: ReturnsWeeksItemDaysItemEventsItemSubscription;
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
	action: ReturnsWeeksItemDaysItemEventsItemAction;
	/** purpose */
	purpose: string;
	/** url */
	url: string;
	/** islastday */
	islastday: boolean;
	/** popupname */
	popupname: string;
	/** mindaytimestamp */
	mindaytimestamp: number;
	/** mindayerror */
	mindayerror: string;
	/** maxdaytimestamp */
	maxdaytimestamp: number;
	/** maxdayerror */
	maxdayerror: string;
	/** draggable */
	draggable: boolean;
}

/**
 * events
 */
export type ReturnsWeeksItemDaysItemEvents = ReturnsWeeksItemDaysItemEventsItem[];

/**
 * calendareventtypes
 */
export type ReturnsWeeksItemDaysItemCalendareventtypes = string[];

export interface ReturnsWeeksItemDaysItem {
	/** seconds */
	seconds: number;
	/** minutes */
	minutes: number;
	/** hours */
	hours: number;
	/** mday */
	mday: number;
	/** wday */
	wday: number;
	/** year */
	year: number;
	/** yday */
	yday: number;
	/** istoday */
	istoday: boolean;
	/** isweekend */
	isweekend: boolean;
	/** timestamp */
	timestamp: number;
	/** neweventtimestamp */
	neweventtimestamp: number;
	/** viewdaylink */
	viewdaylink: string;
	/** viewdaylinktitle */
	viewdaylinktitle: string;
	/** events */
	events: ReturnsWeeksItemDaysItemEvents;
	/** hasevents */
	hasevents: boolean;
	/** calendareventtypes */
	calendareventtypes: ReturnsWeeksItemDaysItemCalendareventtypes;
	/** previousperiod */
	previousperiod: number;
	/** nextperiod */
	nextperiod: number;
	/** navigation */
	navigation: string;
	/** haslastdayofevent */
	haslastdayofevent: boolean;
	/** popovertitle */
	popovertitle: string;
	/** daytitle */
	daytitle: string;
}

/**
 * days
 */
export type ReturnsWeeksItemDays = ReturnsWeeksItemDaysItem[];

export interface ReturnsWeeksItem {
	/** prepadding */
	prepadding: ReturnsWeeksItemPrepadding;
	/** postpadding */
	postpadding: ReturnsWeeksItemPostpadding;
	/** days */
	days: ReturnsWeeksItemDays;
}

/**
 * weeks
 */
export type ReturnsWeeks = ReturnsWeeksItem[];

export interface ReturnsDaynamesItem {
	/** dayno */
	dayno: number;
	/** shortname */
	shortname: string;
	/** fullname */
	fullname: string;
}

/**
 * daynames
 */
export type ReturnsDaynames = ReturnsDaynamesItem[];

export interface ReturnsDate {
	/** seconds */
	seconds: number;
	/** minutes */
	minutes: number;
	/** hours */
	hours: number;
	/** mday */
	mday: number;
	/** wday */
	wday: number;
	/** mon */
	mon: number;
	/** year */
	year: number;
	/** yday */
	yday: number;
	/** weekday */
	weekday: string;
	/** month */
	month: string;
	/** timestamp */
	timestamp: number;
}

export interface ReturnsPreviousperiod {
	/** seconds */
	seconds: number;
	/** minutes */
	minutes: number;
	/** hours */
	hours: number;
	/** mday */
	mday: number;
	/** wday */
	wday: number;
	/** mon */
	mon: number;
	/** year */
	year: number;
	/** yday */
	yday: number;
	/** weekday */
	weekday: string;
	/** month */
	month: string;
	/** timestamp */
	timestamp: number;
}

export interface ReturnsNextperiod {
	/** seconds */
	seconds: number;
	/** minutes */
	minutes: number;
	/** hours */
	hours: number;
	/** mday */
	mday: number;
	/** wday */
	wday: number;
	/** mon */
	mon: number;
	/** year */
	year: number;
	/** yday */
	yday: number;
	/** weekday */
	weekday: string;
	/** month */
	month: string;
	/** timestamp */
	timestamp: number;
}

export interface Returns {
	/** url */
	url: string;
	/** courseid */
	courseid: number;
	/** categoryid */
	categoryid: number;
	/** filter_selector */
	filter_selector: string;
	/** weeks */
	weeks: ReturnsWeeks;
	/** daynames */
	daynames: ReturnsDaynames;
	/** view */
	view: string;
	date: ReturnsDate;
	/** periodname */
	periodname: string;
	/** includenavigation */
	includenavigation: boolean;
	/** initialeventsloaded */
	initialeventsloaded: boolean;
	previousperiod: ReturnsPreviousperiod;
	/** previousperiodlink */
	previousperiodlink: string;
	/** previousperiodname */
	previousperiodname: string;
	nextperiod: ReturnsNextperiod;
	/** nextperiodname */
	nextperiodname: string;
	/** nextperiodlink */
	nextperiodlink: string;
	/** larrow */
	larrow: string;
	/** rarrow */
	rarrow: string;
	/** defaulteventcontext */
	defaulteventcontext: number;
	/** calendarinstanceid */
	calendarinstanceid: number;
	/** viewingmonth */
	viewingmonth: boolean;
	/** showviewselector */
	showviewselector: boolean;
	/** viewinginblock */
	viewinginblock: boolean;
}
