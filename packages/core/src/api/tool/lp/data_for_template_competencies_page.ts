export interface ParamsPagecontext {
	/** Context ID. Either use this value, or level and instanceid. */
	contextid?: number | null;
	/** Context level. To be used with instanceid. */
	contextlevel?: string | null;
	/** Context instance ID. To be used with level */
	instanceid?: number | null;
}

export interface Params {
	/** The template id */
	templateid: number | null;
	pagecontext: ParamsPagecontext;
}

export interface ReturnsTemplate {
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

export interface ReturnsCompetenciesItemLinkedcoursesItem {
	/** id */
	id: number;
	/** fullname */
	fullname: string;
	/** shortname */
	shortname: string;
	/** idnumber */
	idnumber: string;
	/** summary */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** startdate */
	startdate: number;
	/** enddate */
	enddate: number;
	/** visible */
	visible: boolean;
	/** showactivitydates */
	showactivitydates: boolean | null;
	/** showcompletionconditions */
	showcompletionconditions: boolean | null;
	/** pdfexportfont */
	pdfexportfont: string | null;
	/** fullnamedisplay */
	fullnamedisplay: string;
	/** viewurl */
	viewurl: string;
	/** courseimage */
	courseimage: string;
	/** progress */
	progress: number;
	/** hasprogress */
	hasprogress: boolean;
	/** isfavourite */
	isfavourite: boolean;
	/** hidden */
	hidden: boolean;
	/** timeaccess */
	timeaccess: number;
	/** showshortname */
	showshortname: boolean;
	/** coursecategory */
	coursecategory: string;
}

/**
 * linkedcourses
 */
export type ReturnsCompetenciesItemLinkedcourses = ReturnsCompetenciesItemLinkedcoursesItem[];

export interface ReturnsCompetenciesItemRelatedcompetenciesItem {
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

/**
 * relatedcompetencies
 */
export type ReturnsCompetenciesItemRelatedcompetencies =
	ReturnsCompetenciesItemRelatedcompetenciesItem[];

export interface ReturnsCompetenciesItemCompetency {
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

export interface ReturnsCompetenciesItemFramework {
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

export interface ReturnsCompetenciesItemComppathAncestorsItem {
	/** id */
	id: number | null;
	/** name */
	name: string;
	/** first */
	first: boolean;
	/** last */
	last: boolean;
	/** position */
	position: number;
}

/**
 * ancestors
 */
export type ReturnsCompetenciesItemComppathAncestors =
	ReturnsCompetenciesItemComppathAncestorsItem[];

export interface ReturnsCompetenciesItemComppathFramework {
	/** id */
	id: number | null;
	/** name */
	name: string;
	/** first */
	first: boolean;
	/** last */
	last: boolean;
	/** position */
	position: number;
}

export interface ReturnsCompetenciesItemComppath {
	/** ancestors */
	ancestors: ReturnsCompetenciesItemComppathAncestors;
	framework: ReturnsCompetenciesItemComppathFramework;
	/** pluginbaseurl */
	pluginbaseurl: string;
	/** pagecontextid */
	pagecontextid: number;
	/** showlinks */
	showlinks: boolean;
}

export interface ReturnsCompetenciesItem {
	/** linkedcourses */
	linkedcourses: ReturnsCompetenciesItemLinkedcourses;
	/** relatedcompetencies */
	relatedcompetencies: ReturnsCompetenciesItemRelatedcompetencies;
	competency: ReturnsCompetenciesItemCompetency;
	framework: ReturnsCompetenciesItemFramework;
	/** hascourses */
	hascourses: boolean;
	/** hasrelatedcompetencies */
	hasrelatedcompetencies: boolean;
	/** scaleid */
	scaleid: number;
	/** scaleconfiguration */
	scaleconfiguration: string;
	/** taxonomyterm */
	taxonomyterm: string;
	comppath: ReturnsCompetenciesItemComppath;
	/** pluginbaseurl */
	pluginbaseurl: string;
}

export type ReturnsCompetencies = ReturnsCompetenciesItem[];

export interface ReturnsStatisticsLeastproficientItem {
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

/**
 * leastproficient
 */
export type ReturnsStatisticsLeastproficient = ReturnsStatisticsLeastproficientItem[];

export interface ReturnsStatistics {
	/** competencycount */
	competencycount: number;
	/** unlinkedcompetencycount */
	unlinkedcompetencycount: number;
	/** plancount */
	plancount: number;
	/** completedplancount */
	completedplancount: number;
	/** usercompetencyplancount */
	usercompetencyplancount: number;
	/** proficientusercompetencyplancount */
	proficientusercompetencyplancount: number;
	/** linkedcompetencypercentage */
	linkedcompetencypercentage: number;
	/** linkedcompetencypercentageformatted */
	linkedcompetencypercentageformatted: string;
	/** linkedcompetencycount */
	linkedcompetencycount: number;
	/** completedplanpercentage */
	completedplanpercentage: number;
	/** completedplanpercentageformatted */
	completedplanpercentageformatted: string;
	/** proficientusercompetencyplanpercentage */
	proficientusercompetencyplanpercentage: number;
	/** proficientusercompetencyplanpercentageformatted */
	proficientusercompetencyplanpercentageformatted: string;
	/** leastproficient */
	leastproficient: ReturnsStatisticsLeastproficient;
	/** leastproficientcount */
	leastproficientcount: number;
}

export interface Returns {
	template: ReturnsTemplate;
	/** Context ID */
	pagecontextid: number | null;
	/** User can manage competency frameworks */
	canmanagecompetencyframeworks: boolean | null;
	/** User can manage learning plan templates */
	canmanagetemplatecompetencies: boolean | null;
	competencies: ReturnsCompetencies;
	/** Url to the manage competencies page. */
	manageurl: string | null;
	/** Base URL of the plugin. */
	pluginbaseurl: string | null;
	statistics: ReturnsStatistics;
}
