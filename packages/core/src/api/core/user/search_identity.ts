export interface Params {
	/** The search query */
	query: string | null;
}

export interface ReturnsListItemExtrafieldsItem {
	/** Name of the extrafield. */
	name: string | null;
	/** Value of the extrafield. */
	value: string | null;
}

/**
 * List of extra fields
 */
export type ReturnsListItemExtrafields = ReturnsListItemExtrafieldsItem[];

export interface ReturnsListItem {
	/** ID of the user */
	id: number | null;
	/** The fullname of the user */
	fullname: string | null;
	/** List of extra fields */
	extrafields: ReturnsListItemExtrafields;
}

export type ReturnsList = ReturnsListItem[];

export interface Returns {
	list: ReturnsList;
	/** Configured maximum users per page. */
	maxusersperpage: number | null;
	/** Were there more records than maxusersperpage found? */
	overflow: boolean | null;
}
