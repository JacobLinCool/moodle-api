export interface Params {
	/** The scale id */
	scaleid: number | null;
}

export interface ReturnsItem {
	/** Scale value ID */
	id: number | null;
	/** Scale value name */
	name: string | null;
}

export type Returns = ReturnsItem[];
