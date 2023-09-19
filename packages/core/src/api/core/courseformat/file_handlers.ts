export interface Params {
	/** course id */
	courseid: number | null;
}

export interface ReturnsItem {
	/** File extension */
	extension: string | null;
	/** Target module */
	module: string | null;
	/** Output message */
	message: string | null;
}

export type Returns = ReturnsItem[];
