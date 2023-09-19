export interface Params {
	/** The context id that owns the editor */
	contextid: number | null;
	/** The page hash */
	pagehash: string | null;
	/** The page instance */
	pageinstance: string | null;
	/** The ID of the element */
	elementid: string | null;
	/** The draft text */
	drafttext: string | null;
}

export interface Returns {}
