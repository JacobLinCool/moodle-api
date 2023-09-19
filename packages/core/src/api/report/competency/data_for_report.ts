export interface Params {
	/** The course id */
	courseid: number | null;
	/** The user id */
	userid: number | null;
	/** The module id */
	moduleid: number | null;
}

export interface ReturnsUser {
	/** id */
	id: number;
	/** email */
	email: string;
	/** idnumber */
	idnumber: string;
	/** phone1 */
	phone1: string;
	/** phone2 */
	phone2: string;
	/** department */
	department: string;
	/** institution */
	institution: string;
	/** fullname */
	fullname: string;
	/** identity */
	identity: string;
	/** profileurl */
	profileurl: string;
	/** profileimageurl */
	profileimageurl: string;
	/** profileimageurlsmall */
	profileimageurlsmall: string;
}

export interface ReturnsCourse {
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

export interface ReturnsUsercompetenciesItemUsercompetencycourse {
	/** userid */
	userid: number;
	/** courseid */
	courseid: number;
	/** competencyid */
	competencyid: number;
	/** proficiency */
	proficiency: boolean | null;
	/** grade */
	grade: number | null;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** gradename */
	gradename: string;
	/** proficiencyname */
	proficiencyname: string;
}

export interface ReturnsUsercompetenciesItemCompetencyLinkedcoursesItem {
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
export type ReturnsUsercompetenciesItemCompetencyLinkedcourses =
	ReturnsUsercompetenciesItemCompetencyLinkedcoursesItem[];

export interface ReturnsUsercompetenciesItemCompetencyRelatedcompetenciesItem {
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
export type ReturnsUsercompetenciesItemCompetencyRelatedcompetencies =
	ReturnsUsercompetenciesItemCompetencyRelatedcompetenciesItem[];

export interface ReturnsUsercompetenciesItemCompetencyCompetency {
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

export interface ReturnsUsercompetenciesItemCompetencyFramework {
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

export interface ReturnsUsercompetenciesItemCompetencyComppathAncestorsItem {
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
export type ReturnsUsercompetenciesItemCompetencyComppathAncestors =
	ReturnsUsercompetenciesItemCompetencyComppathAncestorsItem[];

export interface ReturnsUsercompetenciesItemCompetencyComppathFramework {
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

export interface ReturnsUsercompetenciesItemCompetencyComppath {
	/** ancestors */
	ancestors: ReturnsUsercompetenciesItemCompetencyComppathAncestors;
	framework: ReturnsUsercompetenciesItemCompetencyComppathFramework;
	/** pluginbaseurl */
	pluginbaseurl: string;
	/** pagecontextid */
	pagecontextid: number;
	/** showlinks */
	showlinks: boolean;
}

export interface ReturnsUsercompetenciesItemCompetency {
	/** linkedcourses */
	linkedcourses: ReturnsUsercompetenciesItemCompetencyLinkedcourses;
	/** relatedcompetencies */
	relatedcompetencies: ReturnsUsercompetenciesItemCompetencyRelatedcompetencies;
	competency: ReturnsUsercompetenciesItemCompetencyCompetency;
	framework: ReturnsUsercompetenciesItemCompetencyFramework;
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
	comppath: ReturnsUsercompetenciesItemCompetencyComppath;
	/** pluginbaseurl */
	pluginbaseurl: string;
}

export interface ReturnsUsercompetenciesItem {
	usercompetencycourse: ReturnsUsercompetenciesItemUsercompetencycourse;
	competency: ReturnsUsercompetenciesItemCompetency;
}

export type ReturnsUsercompetencies = ReturnsUsercompetenciesItem[];

export interface Returns {
	/** Course id */
	courseid: number | null;
	user: ReturnsUser;
	course: ReturnsCourse;
	usercompetencies: ReturnsUsercompetencies;
	/** True if rating is push to user plans */
	pushratingstouserplans: boolean | null;
}
