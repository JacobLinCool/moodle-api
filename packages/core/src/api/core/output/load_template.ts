export interface Params {
	/** component containing the template */
	component: string | null;
	/** name of the template */
	template: string | null;
	/** The current theme. */
	themename: string | null;
	/** Include comments or not */
	includecomments?: boolean | null;
}
