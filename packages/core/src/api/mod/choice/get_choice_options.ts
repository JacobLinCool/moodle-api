export interface Params {
	/** choice instance id */
	choiceid: number | null;
}

export interface ReturnsOptionsItem {
	/** option id */
	id: number | null;
	/** text of the choice */
	text: string | null;
	/** maximum number of answers */
	maxanswers: number | null;
	/** true for orizontal, otherwise vertical */
	displaylayout: boolean | null;
	/** number of answers */
	countanswers: number | null;
	/** we already answered */
	checked: boolean | null;
	/** option disabled */
	disabled: boolean | null;
}

/**
 * Options
 */
export type ReturnsOptions = ReturnsOptionsItem[];

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
	/** Options */
	options: ReturnsOptions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
