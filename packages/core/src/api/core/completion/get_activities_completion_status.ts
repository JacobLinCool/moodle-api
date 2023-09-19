export interface Params {
	/** Course ID */
	courseid: number | null;
	/** User ID */
	userid: number | null;
}

export interface ReturnsStatusesItemDetailsItemRulevalue {
	/** Completion status */
	status: number | null;
	/** Completion description */
	description: string | null;
}

export interface ReturnsStatusesItemDetailsItem {
	/** Rule name */
	rulename: string | null;
	rulevalue: ReturnsStatusesItemDetailsItemRulevalue;
}

/**
 * Completion status details
 */
export type ReturnsStatusesItemDetails = ReturnsStatusesItemDetailsItem[];

/**
 * Activity
 */
export interface ReturnsStatusesItem {
	/** course module ID */
	cmid: number | null;
	/** activity module name */
	modname: string | null;
	/** instance ID */
	instance: number | null;
	/** Completion state value: 0 means incomplete, 1 complete, 2 complete pass, 3 complete fail */
	state: number | null;
	/** timestamp for completed activity */
	timecompleted: number | null;
	/** type of tracking: 0 means none, 1 manual, 2 automatic */
	tracking: number | null;
	/** The user id who has overriden the status, or null */
	overrideby: number | null;
	/** Whether the completion status affects the availability of another activity. */
	valueused: boolean | null;
	/** Whether this activity module has completion enabled */
	hascompletion: boolean | null;
	/** Whether this activity module instance tracks completion automatically. */
	isautomatic: boolean | null;
	/** Whether completion is being tracked for this user. */
	istrackeduser: boolean | null;
	/** Whether this activity is visible to the user. */
	uservisible: boolean | null;
	/** Completion status details */
	details?: ReturnsStatusesItemDetails;
}

/**
 * List of activities status
 */
export type ReturnsStatuses = ReturnsStatusesItem[];

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
	/** List of activities status */
	statuses: ReturnsStatuses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
