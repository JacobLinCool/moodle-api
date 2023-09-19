export interface Params {
	/** The context level */
	contextlevel: number | null;
	/** The default category for the given context level */
	category: number | null;
	/** The default purpose for the given context level */
	purpose: number | null;
	/** The plugin name of the activity */
	activity?: string | null;
	/** Whether to override existing instances with the defaults */
	override?: boolean | null;
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
	/** Whether the context defaults were successfully set or not */
	result: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
