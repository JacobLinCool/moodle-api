export interface Params {
	/** Tag collection id. */
	tagcollid?: number | null;
	/** Whether to return only standard tags. */
	isstandard?: boolean | null;
	/** Maximum number of tags to retrieve. */
	limit?: number | null;
	/** Sort order for display (id, name, rawname, count, flag, isstandard, tagcollid). */
	sort?: string | null;
	/** Search string. */
	search?: string | null;
	/** Context id where this tag cloud is displayed. */
	fromctx?: number | null;
	/** Only retrieve tag instances in this context. */
	ctx?: number | null;
	/** Retrieve tag instances in the $ctx context and it's children. */
	rec?: number | null;
}

/**
 * Tags.
 */
export interface ReturnsTagsItem {
	/** Tag name. */
	name: string | null;
	/** URL to view the tag index. */
	viewurl: string | null;
	/** Whether the tag is flagged as inappropriate. */
	flag: boolean | null;
	/** Whether is a standard tag or not. */
	isstandard: boolean | null;
	/** Number of tag instances. */
	count: number | null;
	/** Proportional size to display the tag. */
	size: number | null;
}

export type ReturnsTags = ReturnsTagsItem[];

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
	tags: ReturnsTags;
	/** Number of tags returned. */
	tagscount: number | null;
	/** Total count of tags. */
	totalcount: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
