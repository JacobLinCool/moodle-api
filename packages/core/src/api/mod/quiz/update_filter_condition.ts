export interface Params {
	/** The cmid of the quiz */
	cmid: number | null;
	/** The quiz slot ID for the random question. */
	slotid: number | null;
	/** Filter condition */
	filtercondition: string | null;
}

export interface Returns {
	/** Message */
	message: string | null;
}
