export interface Params {
	/** The component to search */
	component?: string | null;
	/** The search string */
	search?: string | null;
	/** The current theme */
	themename?: string | null;
}

export type Returns = (string | null)[];
