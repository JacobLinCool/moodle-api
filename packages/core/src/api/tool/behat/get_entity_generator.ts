export interface Params {
	/** Entity type that can be created by a generator. */
	entitytype: string | null;
}

/**
 * Required fields
 */
export type ReturnsRequired = (string | null)[];

export interface Returns {
	/** Required fields */
	required: ReturnsRequired;
}
