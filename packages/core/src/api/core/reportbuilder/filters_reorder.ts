export interface Params {
	/** Report ID */
	reportid: number | null;
	/** Filter ID */
	filterid: number | null;
	/** New filter position */
	position: number | null;
}

export interface ReturnsAvailablefiltersItemOptiongroupValuesItem {
	/** value */
	value: string;
	/** visiblename */
	visiblename: string;
}

/**
 * values
 */
export type ReturnsAvailablefiltersItemOptiongroupValues =
	ReturnsAvailablefiltersItemOptiongroupValuesItem[];

export interface ReturnsAvailablefiltersItemOptiongroup {
	/** text */
	text: string;
	/** values */
	values: ReturnsAvailablefiltersItemOptiongroupValues;
}

export interface ReturnsAvailablefiltersItem {
	optiongroup: ReturnsAvailablefiltersItemOptiongroup;
}

/**
 * availablefilters
 */
export type ReturnsAvailablefilters = ReturnsAvailablefiltersItem[];

export interface ReturnsActivefiltersItem {
	/** id */
	id: number;
	/** heading */
	heading: string;
	/** headingeditable */
	headingeditable: string;
	/** sortorder */
	sortorder: number;
	/** movetitle */
	movetitle: string;
	/** entityname */
	entityname: string;
}

/**
 * activefilters
 */
export type ReturnsActivefilters = ReturnsActivefiltersItem[];

export interface Returns {
	/** hasavailablefilters */
	hasavailablefilters: boolean;
	/** availablefilters */
	availablefilters: ReturnsAvailablefilters;
	/** hasactivefilters */
	hasactivefilters: boolean;
	/** activefilters */
	activefilters: ReturnsActivefilters;
	/** helpicon */
	helpicon: string;
}
