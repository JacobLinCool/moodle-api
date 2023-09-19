export interface Params {
	/** component containing the template */
	component: string | null;
	/** name of the template */
	template: string | null;
	/** The current theme. */
	themename: string | null;
	/** Include comments or not */
	includecomments?: boolean | null;
	/** lang */
	lang?: string | null;
}

export interface ReturnsTemplatesItem {
	/** component containing the resource */
	component: string | null;
	/** name of the resource */
	name: string | null;
	/** resource value */
	value: string | null;
}

export type ReturnsTemplates = ReturnsTemplatesItem[];

export interface ReturnsStringsItem {
	/** component containing the resource */
	component: string | null;
	/** name of the resource */
	name: string | null;
	/** resource value */
	value: string | null;
}

export type ReturnsStrings = ReturnsStringsItem[];

export interface Returns {
	templates: ReturnsTemplates;
	strings: ReturnsStrings;
}
