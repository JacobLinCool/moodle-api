export interface Params {
	/** The current context ID. */
	contextid: number | null;
	/** Search terms by which to filter the shared banks. */
	search: string | null;
}

export interface ReturnsSharedbanksItem {
	/** Module ID of the shared bank. */
	value: number | null;
	/** Formatted bank name */
	label: string | null;
}

/**
 * List of shared banks
 */
export type ReturnsSharedbanks = ReturnsSharedbanksItem[];

export interface Returns {
	/** List of shared banks */
	sharedbanks: ReturnsSharedbanks;
}
