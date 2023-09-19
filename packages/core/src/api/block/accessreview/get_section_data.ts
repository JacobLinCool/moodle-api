export interface Params {
	/** The course id to obtain results for. */
	courseid: number | null;
}

export interface ReturnsItem {
	/** ID */
	section: number | null;
	/** Number of errors. */
	numerrors: number | null;
	/** Number of checks. */
	numchecks: number | null;
}

export type Returns = ReturnsItem[];
