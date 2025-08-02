export interface Params {
	/** The cmid of the quiz */
	cmid: number | null;
	/** The page where random questions will be added to */
	addonpage: number | null;
	/** Number of random questions */
	randomcount: number | null;
	/** (Optional) The filter condition used when adding random questions from an existing category. Not required if adding random questions from a new category. */
	filtercondition?: string | null;
	/** (Optional) The name of a new question category to create and use for the random questions. */
	newcategory?: string | null;
	/** (Optional) The parent of the new question category, if creating one. */
	parentcategory?: string | null;
}

export interface Returns {
	/** Message */
	message: string | null;
}
