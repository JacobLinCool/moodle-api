export interface Params {
	/** The competency framework id */
	competencyframeworkid: number | null;
	/** A search string */
	search?: string | null;
}

export interface ReturnsFramework {
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** description */
	description: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** visible */
	visible: boolean;
	/** scaleid */
	scaleid: number;
	/** scaleconfiguration */
	scaleconfiguration: string;
	/** contextid */
	contextid: number;
	/** taxonomies */
	taxonomies: string;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** canmanage */
	canmanage: boolean;
	/** competenciescount */
	competenciescount: number;
	/** contextname */
	contextname: string;
	/** contextnamenoprefix */
	contextnamenoprefix: string;
}

export interface Returns {
	framework: ReturnsFramework;
	/** True if this user has permission to manage competency frameworks */
	canmanage: boolean | null;
	/** Context id for the framework */
	pagecontextid: number | null;
	/** Current search string */
	search: string | null;
	/** JSON encoded data for rules */
	rulesmodules: string | null;
	/** Plugin base url */
	pluginbaseurl: string | null;
}
