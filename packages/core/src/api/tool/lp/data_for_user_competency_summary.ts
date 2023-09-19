export interface Params {
	/** Data base record id for the user */
	userid: number | null;
	/** Data base record id for the competency */
	competencyid: number | null;
}

export interface ReturnsCompetencyLinkedcoursesItem {
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
export type ReturnsCompetencyLinkedcourses = ReturnsCompetencyLinkedcoursesItem[];

export interface ReturnsCompetencyRelatedcompetenciesItem {
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
export type ReturnsCompetencyRelatedcompetencies = ReturnsCompetencyRelatedcompetenciesItem[];

export interface ReturnsCompetencyCompetency {
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

export interface ReturnsCompetencyFramework {
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

export interface ReturnsCompetencyComppathAncestorsItem {
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
export type ReturnsCompetencyComppathAncestors = ReturnsCompetencyComppathAncestorsItem[];

export interface ReturnsCompetencyComppathFramework {
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

export interface ReturnsCompetencyComppath {
	/** ancestors */
	ancestors: ReturnsCompetencyComppathAncestors;
	framework: ReturnsCompetencyComppathFramework;
	/** pluginbaseurl */
	pluginbaseurl: string;
	/** pagecontextid */
	pagecontextid: number;
	/** showlinks */
	showlinks: boolean;
}

export interface ReturnsCompetency {
	/** linkedcourses */
	linkedcourses: ReturnsCompetencyLinkedcourses;
	/** relatedcompetencies */
	relatedcompetencies: ReturnsCompetencyRelatedcompetencies;
	competency: ReturnsCompetencyCompetency;
	framework: ReturnsCompetencyFramework;
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
	comppath: ReturnsCompetencyComppath;
	/** pluginbaseurl */
	pluginbaseurl: string;
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

export interface ReturnsUsercompetencyReviewer {
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

export interface ReturnsUsercompetency {
	/** userid */
	userid: number;
	/** competencyid */
	competencyid: number;
	/** status */
	status: number;
	/** reviewerid */
	reviewerid: number | null;
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
	/** canrequestreview */
	canrequestreview: boolean;
	/** canreview */
	canreview: boolean;
	/** gradename */
	gradename: string;
	/** isrequestreviewallowed */
	isrequestreviewallowed: boolean;
	/** iscancelreviewrequestallowed */
	iscancelreviewrequestallowed: boolean;
	/** isstartreviewallowed */
	isstartreviewallowed: boolean;
	/** isstopreviewallowed */
	isstopreviewallowed: boolean;
	/** isstatusidle */
	isstatusidle: boolean;
	/** isstatusinreview */
	isstatusinreview: boolean;
	/** isstatuswaitingforreview */
	isstatuswaitingforreview: boolean;
	/** proficiencyname */
	proficiencyname: string;
	reviewer: ReturnsUsercompetencyReviewer;
	/** statusname */
	statusname: string;
	/** url */
	url: string;
}

export interface ReturnsUsercompetencyplan {
	/** userid */
	userid: number;
	/** competencyid */
	competencyid: number;
	/** proficiency */
	proficiency: boolean | null;
	/** grade */
	grade: number | null;
	/** planid */
	planid: number;
	/** sortorder */
	sortorder: number;
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

export interface ReturnsUsercompetencycourse {
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

export interface ReturnsEvidenceItemActionuser {
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

export interface ReturnsEvidenceItem {
	/** usercompetencyid */
	usercompetencyid: number;
	/** contextid */
	contextid: number;
	/** action */
	action: number;
	/** actionuserid */
	actionuserid: number | null;
	/** descidentifier */
	descidentifier: string;
	/** desccomponent */
	desccomponent: string;
	/** desca */
	desca: string | null;
	/** url */
	url: string | null;
	/** grade */
	grade: number | null;
	/** note */
	note: string | null;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	actionuser: ReturnsEvidenceItemActionuser;
	/** description */
	description: string;
	/** gradename */
	gradename: string;
	/** userdate */
	userdate: string;
	/** candelete */
	candelete: boolean;
}

/**
 * evidence
 */
export type ReturnsEvidence = ReturnsEvidenceItem[];

export interface ReturnsCommentarea {
	/** component */
	component: string;
	/** commentarea */
	commentarea: string;
	/** itemid */
	itemid: number;
	/** courseid */
	courseid: number;
	/** contextid */
	contextid: number;
	/** cid */
	cid: string;
	/** autostart */
	autostart: boolean;
	/** canpost */
	canpost: boolean;
	/** canview */
	canview: boolean;
	/** count */
	count: number;
	/** collapsediconkey */
	collapsediconkey: string;
	/** displaytotalcount */
	displaytotalcount: boolean;
	/** displaycancel */
	displaycancel: boolean;
	/** fullwidth */
	fullwidth: boolean;
	/** linktext */
	linktext: string;
	/** notoggle */
	notoggle: boolean;
	/** template */
	template: string;
	/** canpostorhascomments */
	canpostorhascomments: boolean;
}

export interface Returns {
	/** showrelatedcompetencies */
	showrelatedcompetencies: boolean;
	/** cangrade */
	cangrade: boolean;
	competency: ReturnsCompetency;
	user: ReturnsUser;
	usercompetency: ReturnsUsercompetency;
	usercompetencyplan: ReturnsUsercompetencyplan;
	usercompetencycourse: ReturnsUsercompetencycourse;
	/** evidence */
	evidence: ReturnsEvidence;
	commentarea: ReturnsCommentarea;
}
