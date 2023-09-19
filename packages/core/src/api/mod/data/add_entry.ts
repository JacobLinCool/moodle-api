export interface ParamsDataItem {
	/** The field id. */
	fieldid: number | null;
	/** The subfield name (if required). */
	subfield?: string | null;
	/** The contents for the field always JSON encoded. */
	value: string | null;
}

/**
 * The fields data to be created
 */
export type ParamsData = ParamsDataItem[];

export interface Params {
	/** data instance id */
	databaseid: number | null;
	/** Group id, 0 means that the function will determine the user group */
	groupid?: number | null;
	/** The fields data to be created */
	data: ParamsData;
}

export type ReturnsGeneralnotifications = (string | null)[];

export interface ReturnsFieldnotificationsItem {
	/** The field name. */
	fieldname: string | null;
	/** The notification for the field. */
	notification: string | null;
}

export type ReturnsFieldnotifications = ReturnsFieldnotificationsItem[];

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
	/** True new created entry id. 0 if the entry was not created. */
	newentryid: number | null;
	generalnotifications: ReturnsGeneralnotifications;
	fieldnotifications: ReturnsFieldnotifications;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
