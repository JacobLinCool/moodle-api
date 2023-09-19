export interface ParamsTagsItem {
	/** tag id */
	id: number | null;
	/** tag raw name (may contain capital letters) */
	rawname: string | null;
	/** tag description */
	description: string | null;
	/** tag description format */
	descriptionformat: number | null;
	/** flag */
	flag: number | null;
	/** (deprecated, use isstandard) whether this flag is standard */
	official: number | null;
	/** whether this flag is standard */
	isstandard: number | null;
}

export type ParamsTags = ParamsTagsItem[];

export interface Params {
	tags: ParamsTags;
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
