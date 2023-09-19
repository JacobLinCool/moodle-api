export interface Params {
	/** id of the notification */
	notificationid: number | null;
	/** timestamp for when the notification should be marked read */
	timeread?: number | null;
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
	/** id of the notification */
	notificationid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
