/**
 * Array of prediction ids
 */
export type ParamsPredictionids = (number | null)[];

export interface Params {
	/** The name of the action */
	actionname: string | null;
	/** Array of prediction ids */
	predictionids: ParamsPredictionids;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
