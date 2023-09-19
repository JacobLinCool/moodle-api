export interface Params {
	/** quiz instance id */
	quizid: number | null;
	/** user id (empty for current user) */
	userid?: number | null;
}

export interface ReturnsSomeoptionsItem {
	/** option name */
	name: string | null;
	/** option value */
	value: number | null;
}

export type ReturnsSomeoptions = ReturnsSomeoptionsItem[];

export interface ReturnsAlloptionsItem {
	/** option name */
	name: string | null;
	/** option value */
	value: number | null;
}

export type ReturnsAlloptions = ReturnsAlloptionsItem[];

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
	someoptions: ReturnsSomeoptions;
	alloptions: ReturnsAlloptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
