export interface Params {
	/** the device UUID */
	uuid: string | null;
	/** the app id, if empty devices matching the UUID for the user will be removed */
	appid?: string | null;
}

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
	/** True if removed, false if not removed because it doesn't exists */
	removed: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
