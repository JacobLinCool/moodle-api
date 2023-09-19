export interface Params {
	/** Query string (full or partial user full name or other details) */
	query: string | null;
	/** Course id (0 if none) */
	courseid: number | null;
}

export interface ReturnsItem {
	/** User id */
	id: number | null;
	/** Full name as text */
	fullname: string | null;
	/** URL to small profile image */
	profileimageurlsmall: string | null;
}

export type Returns = ReturnsItem[];
