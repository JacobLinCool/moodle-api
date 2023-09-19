export interface Params {
	/** the device UUID */
	uuid: string | null;
	/** The app id, something like com.moodle.moodlemobile */
	appid: string | null;
	/** the app generated public key */
	publickey: string | null;
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
	/** Whether the request was successful */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
