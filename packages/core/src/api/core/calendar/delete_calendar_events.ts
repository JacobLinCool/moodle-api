/**
 * List of events to delete
 */
export interface ParamsEventsItem {
	/** Event ID */
	eventid: number;
	/** Delete comeplete series if repeated event */
	repeat: boolean | null;
}

export type ParamsEvents = ParamsEventsItem[];

export interface Params {
	events: ParamsEvents;
}
