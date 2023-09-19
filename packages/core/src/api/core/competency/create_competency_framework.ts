export interface ParamsCompetencyframework {
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** description */
	description?: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** visible */
	visible?: boolean;
	/** scaleid */
	scaleid: number;
	/** scaleconfiguration */
	scaleconfiguration: string;
	/** The context id */
	contextid: number | null;
	/** The context level */
	contextlevel: string | null;
	/** The Instance id */
	instanceid: number | null;
	/** taxonomies */
	taxonomies?: string;
	/** timecreated */
	timecreated?: number;
	/** timemodified */
	timemodified?: number;
	/** usermodified */
	usermodified?: number;
}

export interface Params {
	competencyframework: ParamsCompetencyframework;
}

export interface Returns {
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
