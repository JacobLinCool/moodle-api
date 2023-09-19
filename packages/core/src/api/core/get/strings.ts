export interface ParamsStringsItemStringparamsItem {
	/** param name - if the string expect only one $a parameter then don't send this field, just send the value. */
	name: string | null;
	/** param value */
	value: string | null;
}

/**
 * the definition of a string param (i.e. {$a->name})
 */
export type ParamsStringsItemStringparams = ParamsStringsItemStringparamsItem[];

export interface ParamsStringsItem {
	/** string identifier */
	stringid: string | null;
	/** component */
	component?: string | null;
	/** lang */
	lang?: string | null;
	/** the definition of a string param (i.e. {$a->name}) */
	stringparams?: ParamsStringsItemStringparams;
}

export type ParamsStrings = ParamsStringsItem[];

export interface Params {
	strings: ParamsStrings;
}

export interface ReturnsItem {
	/** string id */
	stringid: string | null;
	/** string component */
	component: string | null;
	/** lang */
	lang: string | null;
	/** translated string */
	string: string | null;
}

export type Returns = ReturnsItem[];
