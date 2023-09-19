export interface ParamsContext {
	/** Context ID. Either use this value, or level and instanceid. */
	contextid?: number | null;
	/** Context level. To be used with instanceid. */
	contextlevel?: string | null;
	/** Context instance ID. To be used with level */
	instanceid?: number | null;
}

export interface Params {
	/** Column to sort by. */
	sort?: string | null;
	/** Sort direction. Should be either ASC or DESC */
	order?: string | null;
	/** Skip this number of records before returning results */
	skip?: number | null;
	/** Return this number of records at most. */
	limit?: number | null;
	context: ParamsContext;
	/** What other contexts to fetch the templates from. (children, parents, self) */
	includes?: string | null;
	/** If should list only visible templates */
	onlyvisible?: boolean | null;
}

export interface ReturnsItem {
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

export type Returns = ReturnsItem[];
