export interface Params {
	/** Data base record id for the competency */
	id: number | null;
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
	/** sortorder */
	sortorder: number;
	/** parentid */
	parentid: number;
	/** path */
	path: string;
	/** ruleoutcome */
	ruleoutcome: number;
	/** ruletype */
	ruletype: string | null;
	/** ruleconfig */
	ruleconfig: string | null;
	/** scaleid */
	scaleid: number | null;
	/** scaleconfiguration */
	scaleconfiguration: string | null;
	/** competencyframeworkid */
	competencyframeworkid: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}
