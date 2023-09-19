export interface ParamsTemplate {
	/** shortname */
	shortname: string;
	/** description */
	description?: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** duedate */
	duedate?: number;
	/** visible */
	visible?: boolean;
	/** The context id */
	contextid: number | null;
	/** The context level */
	contextlevel: string | null;
	/** The Instance id */
	instanceid: number | null;
	/** timecreated */
	timecreated?: number;
	/** timemodified */
	timemodified?: number;
	/** usermodified */
	usermodified?: number;
}

export interface Params {
	template: ParamsTemplate;
}

export interface Returns {
	/** shortname */
	shortname: string;
	/** description */
	description: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** duedate */
	duedate: number;
	/** visible */
	visible: boolean;
	/** contextid */
	contextid: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** duedateformatted */
	duedateformatted: string;
	/** cohortscount */
	cohortscount: number;
	/** planscount */
	planscount: number;
	/** canmanage */
	canmanage: boolean;
	/** canread */
	canread: boolean;
	/** contextname */
	contextname: string;
	/** contextnamenoprefix */
	contextnamenoprefix: string;
}
