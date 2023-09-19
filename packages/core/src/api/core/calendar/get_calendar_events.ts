/**
 * List of event ids
 */
export type ParamsEventsEventids = (number | null)[];

/**
 * List of course ids for which events will be returned
 */
export type ParamsEventsCourseids = (number | null)[];

/**
 * List of group ids for which events should be returned
 */
export type ParamsEventsGroupids = (number | null)[];

/**
 * List of category ids for which events will be returned
 */
export type ParamsEventsCategoryids = (number | null)[];

/**
 * Event details
 */
export interface ParamsEvents {
	/** List of event ids */
	eventids?: ParamsEventsEventids;
	/** List of course ids for which events will be returned */
	courseids?: ParamsEventsCourseids;
	/** List of group ids for which events should be returned */
	groupids?: ParamsEventsGroupids;
	/** List of category ids for which events will be returned */
	categoryids?: ParamsEventsCategoryids;
}

/**
 * Options
 */
export interface ParamsOptions {
	/** Set to true to return current user's user events */
	userevents?: boolean | null;
	/** Set to true to return site events */
	siteevents?: boolean | null;
	/** Time from which events should be returned */
	timestart?: number | null;
	/** Time to which the events should be returned. We treat 0 and null as no end */
	timeend?: number | null;
	/** Ignore hidden events or not */
	ignorehidden?: boolean | null;
}

export interface Params {
	/** Event details */
	events?: ParamsEvents;
	/** Options */
	options?: ParamsOptions;
}

/**
 * event
 */
export interface ReturnsEventsItem {
	/** event id */
	id: number | null;
	/** event name */
	name: string | null;
	/** Description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
	/** course id */
	courseid: number | null;
	/** Category id (only for category events). */
	categoryid: number | null;
	/** group id */
	groupid: number | null;
	/** user id */
	userid: number | null;
	/** repeat id */
	repeatid: number | null;
	/** module name */
	modulename: string | null;
	/** instance id */
	instance: number | null;
	/** Event type */
	eventtype: string | null;
	/** timestart */
	timestart: number | null;
	/** time duration */
	timeduration: number | null;
	/** visible */
	visible: number | null;
	/** unique id of ical events */
	uuid: string;
	/** sequence */
	sequence: number | null;
	/** time modified */
	timemodified: number | null;
	/** Subscription id */
	subscriptionid: number | null;
}

export type ReturnsEvents = ReturnsEventsItem[];

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
	events: ReturnsEvents;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
