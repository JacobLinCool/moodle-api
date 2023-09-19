export interface Params {
	/** Tab class */
	tab: string | null;
	/** Json-encoded data */
	jsondata: string | null;
}

export interface Returns {
	/** Template name */
	template: string | null;
	/** JSON-encoded data for template */
	content: string | null;
	/** JavaScript fragment */
	javascript: string | null;
}
