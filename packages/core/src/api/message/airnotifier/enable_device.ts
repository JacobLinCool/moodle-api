export interface Params {
	/** The device id */
	deviceid: number | null;
	/** True for enable the device, false otherwise */
	enable: boolean | null;
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
	/** True if success */
	success: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
