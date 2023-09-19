/**
 * parameters
 */
export interface ParamsTagindex {
	/** tag id */
	id: number | null;
	/** tag name */
	tag: string | null;
	/** tag collection id */
	tc: number | null;
	/** tag area id */
	ta: number | null;
	/** exlusive mode for this tag area */
	excl: boolean | null;
	/** context id where the link was displayed */
	from: number | null;
	/** context id where to search for items */
	ctx: number | null;
	/** search in the context recursive */
	rec: number | null;
	/** page number (0-based) */
	page: number | null;
}

export interface Params {
	/** parameters */
	tagindex: ParamsTagindex;
}

/**
 * tag index
 */
export interface ReturnsItem {
	/** tag id */
	tagid: number | null;
	/** tag area id */
	ta: number | null;
	/** component */
	component: string | null;
	/** itemtype */
	itemtype: string | null;
	/** URL for the next page */
	nextpageurl: string | null;
	/** URL for the next page */
	prevpageurl: string | null;
	/** URL for exclusive link */
	exclusiveurl: string | null;
	/** text for exclusive link */
	exclusivetext: string | null;
	/** title */
	title: string | null;
	/** title */
	content: string | null;
	/** whether the content is present */
	hascontent: number | null;
	/** name of anchor */
	anchor: string | null;
}

export type Returns = ReturnsItem[];
