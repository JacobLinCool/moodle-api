export interface Params {
	/** The search query */
	query: string | null;
}

export interface ReturnsItemExtrafieldsItem {
	/** Name of the extrafield. */
	name: string | null;
	/** Value of the extrafield. */
	value: string | null;
}

/**
 * List of extra fields
 */
export type ReturnsItemExtrafields = ReturnsItemExtrafieldsItem[];

export interface ReturnsItem {
	/** ID of the user */
	id: number | null;
	/** The fullname of the user */
	fullname: string | null;
	/** List of extra fields */
	extrafields: ReturnsItemExtrafields;
}

export type Returns = ReturnsItem[];
