export interface ParamsDataItem {
	/** key */
	key: string | null;
	/** year */
	year: number | null;
	/** month */
	month: number | null;
	/** day */
	day: number | null;
	/** hour */
	hour: number | null;
	/** minute */
	minute: number | null;
}

export type ParamsData = ParamsDataItem[];

export interface Params {
	data: ParamsData;
}

export interface ReturnsTimestampsItem {
	/** Timestamp key */
	key: string | null;
	/** Unix timestamp */
	timestamp: number | null;
}

export type ReturnsTimestamps = ReturnsTimestampsItem[];

export interface Returns {
	timestamps: ReturnsTimestamps;
}
