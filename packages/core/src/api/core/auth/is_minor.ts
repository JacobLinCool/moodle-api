export interface Params {
	/** Age */
	age: number | null;
	/** Country of residence */
	country: string | null;
}

export interface Returns {
	/** True if the user is considered to be a digital minor, false if not */
	status: boolean | null;
}
