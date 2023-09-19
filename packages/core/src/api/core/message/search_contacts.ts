export interface Params {
	/** String the user's fullname has to match to be found */
	searchtext: string | null;
	/** Limit search to the user's courses */
	onlymycourses?: boolean | null;
}

export interface ReturnsItem {
	/** User ID */
	id: number | null;
	/** User full name */
	fullname: string | null;
	/** User picture URL */
	profileimageurl: string | null;
	/** Small user picture URL */
	profileimageurlsmall: string | null;
}

/**
 * List of contacts
 */
export type Returns = ReturnsItem[];
