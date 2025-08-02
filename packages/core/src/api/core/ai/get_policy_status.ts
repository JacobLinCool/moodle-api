export interface Params {
	/** The user ID */
	userid: number | null;
}

export interface Returns {
	/** True if the policy was accepted, false otherwise. */
	status: boolean | null;
}
