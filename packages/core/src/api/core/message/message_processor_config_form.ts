export interface ParamsFormvaluesItem {
	/** name of the form element */
	name: string | null;
	/** value of the form element */
	value: string | null;
}

/**
 * Config form values
 */
export type ParamsFormvalues = ParamsFormvaluesItem[];

export interface Params {
	/** id of the user, 0 for current user */
	userid: number | null;
	/** The name of the message processor */
	name: string | null;
	/** Config form values */
	formvalues: ParamsFormvalues;
}
