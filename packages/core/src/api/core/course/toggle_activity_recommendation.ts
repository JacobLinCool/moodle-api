export interface Params {
	/** The favourite area (itemtype) */
	area: string | null;
	/** id of the activity or whatever */
	id: number | null;
}

export interface Returns {
	/** id of the activity or whatever */
	id: number | null;
	/** The favourite area (itemtype) */
	area: string | null;
	/** If created or deleted */
	status: boolean | null;
}
