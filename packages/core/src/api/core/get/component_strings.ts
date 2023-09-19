export interface Params {
	/** component */
	component: string | null;
	/** lang */
	lang?: string | null;
}

export interface ReturnsItem {
	/** string id */
	stringid: string | null;
	/** translated string */
	string: string | null;
}

export type Returns = ReturnsItem[];
