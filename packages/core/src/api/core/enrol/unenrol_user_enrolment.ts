export interface Params {
	/** User enrolment ID */
	ueid: number | null;
}

export interface ReturnsErrorsItem {
	/** The data that failed the validation */
	key: string | null;
	/** The error message */
	message: string | null;
}

/**
 * List of validation errors
 */
export type ReturnsErrors = ReturnsErrorsItem[];

export interface Returns {
	/** True if the user's enrolment was successfully updated */
	result: boolean | null;
	/** List of validation errors */
	errors: ReturnsErrors;
}
