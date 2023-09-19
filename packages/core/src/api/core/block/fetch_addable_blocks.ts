export interface Params {
	/** The context ID of the page. */
	pagecontextid: number | null;
	/** The type of the page. */
	pagetype: string | null;
	/** The layout of the page. */
	pagelayout: string | null;
	/** The subpage identifier */
	subpage?: string | null;
	/** Page hash */
	pagehash?: string | null;
}

export interface ReturnsItem {
	/** The name of the block. */
	name: string | null;
	/** The title of the block. */
	title: string | null;
	/** If this block type has a form when it is being added then the classname of the form */
	blockform: string | null;
}

/**
 * List of addable blocks in a given page.
 */
export type Returns = ReturnsItem[];
