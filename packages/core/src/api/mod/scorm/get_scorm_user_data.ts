export interface Params {
	/** scorm instance id */
	scormid: number | null;
	/** attempt number */
	attempt: number | null;
}

export interface ReturnsDataItemUserdataItem {
	/** element name */
	element: string | null;
	/** element value */
	value: string | null;
}

export type ReturnsDataItemUserdata = ReturnsDataItemUserdataItem[];

export interface ReturnsDataItemDefaultdataItem {
	/** element name */
	element: string | null;
	/** element value */
	value: string | null;
}

export type ReturnsDataItemDefaultdata = ReturnsDataItemDefaultdataItem[];

/**
 * SCO data
 */
export interface ReturnsDataItem {
	/** sco id */
	scoid: number | null;
	userdata: ReturnsDataItemUserdata;
	defaultdata: ReturnsDataItemDefaultdata;
}

export type ReturnsData = ReturnsDataItem[];

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
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
