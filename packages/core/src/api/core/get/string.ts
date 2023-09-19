export interface ParamsStringparamsItem {
	/** param name - if the string expect only one $a parameter then don't send this field, just send the value. */
	name: string | null;
	/** param value */
	value: string | null;
}

/**
 * the definition of a string param (i.e. {$a->name})
 */
export type ParamsStringparams = ParamsStringparamsItem[];

export interface Params {
	/** string identifier */
	stringid: string | null;
	/** component */
	component?: string | null;
	/** lang */
	lang?: string | null;
	/** the definition of a string param (i.e. {$a->name}) */
	stringparams?: ParamsStringparams;
}
