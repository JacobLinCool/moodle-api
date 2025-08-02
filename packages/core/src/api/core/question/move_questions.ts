export interface Params {
	/** Contextid of the target question bank */
	newcontextid: number | null;
	/** ID of the target question category */
	newcategoryid: number | null;
	/** Comma separated list of question ids to move */
	questionids: string | null;
	/** A URL to add/update the filter param with the new category */
	returnurl: string | null;
}
