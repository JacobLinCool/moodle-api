export interface Params {
	/** The competency id */
	competencyid: number | null;
	/** Include or not related competencies */
	includerelated?: boolean | null;
	/** Include or not competency courses */
	includecourses?: boolean | null;
}

export interface ReturnsLinkedcoursesItem {
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
export type ReturnsLinkedcourses = ReturnsLinkedcoursesItem[];

export interface ReturnsRelatedcompetenciesItem {
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
export type ReturnsRelatedcompetencies = ReturnsRelatedcompetenciesItem[];

export interface ReturnsCompetency {
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

export interface ReturnsComppathAncestorsItem {
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
export type ReturnsComppathAncestors = ReturnsComppathAncestorsItem[];

export interface ReturnsComppathFramework {
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

export interface ReturnsComppath {
	/** ancestors */
	ancestors: ReturnsComppathAncestors;
	framework: ReturnsComppathFramework;
	/** pluginbaseurl */
	pluginbaseurl: string;
	/** pagecontextid */
	pagecontextid: number;
	/** showlinks */
	showlinks: boolean;
}

export interface Returns {
	/** linkedcourses */
	linkedcourses: ReturnsLinkedcourses;
	/** relatedcompetencies */
	relatedcompetencies: ReturnsRelatedcompetencies;
	competency: ReturnsCompetency;
	framework: ReturnsFramework;
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
	comppath: ReturnsComppath;
	/** pluginbaseurl */
	pluginbaseurl: string;
}
