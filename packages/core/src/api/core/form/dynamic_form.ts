export interface Params {
	/** Form class */
	form: string | null;
	/** url-encoded form data */
	formdata: string | null;
}

export interface Returns {
	/** If form was submitted and validated */
	submitted: boolean | null;
	/** JSON-encoded return data from form processing method */
	data: string | null;
	/** HTML fragment of the form */
	html: string | null;
	/** JavaScript fragment of the form */
	javascript: string | null;
}
