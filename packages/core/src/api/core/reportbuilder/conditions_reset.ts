export interface Params {
	/** Report ID */
	reportid: number | null;
}

export interface ReturnsAvailableconditionsItemOptiongroupValuesItem {
	/** value */
	value: string;
	/** visiblename */
	visiblename: string;
}

/**
 * values
 */
export type ReturnsAvailableconditionsItemOptiongroupValues =
	ReturnsAvailableconditionsItemOptiongroupValuesItem[];

export interface ReturnsAvailableconditionsItemOptiongroup {
	/** text */
	text: string;
	/** values */
	values: ReturnsAvailableconditionsItemOptiongroupValues;
}

export interface ReturnsAvailableconditionsItem {
	optiongroup: ReturnsAvailableconditionsItemOptiongroup;
}

/**
 * availableconditions
 */
export type ReturnsAvailableconditions = ReturnsAvailableconditionsItem[];

export interface Returns {
	/** hasavailableconditions */
	hasavailableconditions: boolean;
	/** availableconditions */
	availableconditions: ReturnsAvailableconditions;
	/** hasactiveconditions */
	hasactiveconditions: boolean;
	/** activeconditionsform */
	activeconditionsform: string;
	/** helpicon */
	helpicon: string;
	/** javascript */
	javascript: string;
}
