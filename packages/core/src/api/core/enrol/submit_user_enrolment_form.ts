export interface Params {
	/** The data from the event form */
	formdata: string | null;
}

export interface Returns {
	/** True if the user's enrolment was successfully updated */
	result: boolean | null;
	/** Indicates invalid form data */
	validationerror?: boolean | null;
}
