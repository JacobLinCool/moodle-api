export interface Params {
	/** Component name */
	component: string | null;
	/** json object with all the statements to post */
	requestjson: string | null;
}

/**
 * List of statements storing acceptance results
 */
export type Returns = (boolean | null)[];
