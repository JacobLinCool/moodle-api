export interface Params {
	/** The course module id */
	cmid: number | null;
}

export interface ReturnsItemCompetency {
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

export interface ReturnsItemCoursemodulecompetency {
	/** cmid */
	cmid: number;
	/** competencyid */
	competencyid: number;
	/** sortorder */
	sortorder: number;
	/** ruleoutcome */
	ruleoutcome: number;
	/** overridegrade */
	overridegrade: boolean;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}

export interface ReturnsItem {
	competency: ReturnsItemCompetency;
	coursemodulecompetency: ReturnsItemCoursemodulecompetency;
}

export type Returns = ReturnsItem[];
