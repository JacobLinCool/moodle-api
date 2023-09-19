export interface Params {
	/** The model id */
	query?: string | null;
	/** The model id */
	modelid?: number | null;
}

export interface ReturnsItem {
	/** ID of the context */
	id: number | null;
	/** The context name */
	name: string | null;
}

export type Returns = ReturnsItem[];
