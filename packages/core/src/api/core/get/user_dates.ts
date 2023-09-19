export interface ParamsTimestampsItem {
	/** unix timestamp */
	timestamp: number | null;
	/** format string */
	format: string | null;
	/** The calendar type */
	type?: string | null;
	/** Remove leading zero for day */
	fixday?: number | null;
	/** Remove leading zero for hour */
	fixhour?: number | null;
}

export type ParamsTimestamps = ParamsTimestampsItem[];

export interface Params {
	/** Context ID. Either use this value, or level and instanceid. */
	contextid?: number | null;
	/** Context level. To be used with instanceid. */
	contextlevel?: string | null;
	/** Context instance ID. To be used with level */
	instanceid?: number | null;
	timestamps: ParamsTimestamps;
}

export type ReturnsDates = (string | null)[];

export interface Returns {
	dates: ReturnsDates;
}
