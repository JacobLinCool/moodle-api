export interface Params {
	/** The name of the preference */
	preference: string | null;
	/** The target state */
	state: number | null;
}

export interface Returns {
	/** Success notification message. */
	successmessage: string | null;
}
