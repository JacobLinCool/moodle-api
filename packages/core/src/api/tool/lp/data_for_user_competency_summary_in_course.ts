export interface Params {
	/** Data base record id for the user */
	userid: number | null;
	/** Data base record id for the competency */
	competencyid: number | null;
	/** Data base record id for the course */
	courseid: number | null;
}

export interface ReturnsUsercompetencysummaryCompetencyLinkedcoursesItem {
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
export type ReturnsUsercompetencysummaryCompetencyLinkedcourses =
	ReturnsUsercompetencysummaryCompetencyLinkedcoursesItem[];

export interface ReturnsUsercompetencysummaryCompetencyRelatedcompetenciesItem {
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
export type ReturnsUsercompetencysummaryCompetencyRelatedcompetencies =
	ReturnsUsercompetencysummaryCompetencyRelatedcompetenciesItem[];

export interface ReturnsUsercompetencysummaryCompetencyCompetency {
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

export interface ReturnsUsercompetencysummaryCompetencyFramework {
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

export interface ReturnsUsercompetencysummaryCompetencyComppathAncestorsItem {
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
export type ReturnsUsercompetencysummaryCompetencyComppathAncestors =
	ReturnsUsercompetencysummaryCompetencyComppathAncestorsItem[];

export interface ReturnsUsercompetencysummaryCompetencyComppathFramework {
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

export interface ReturnsUsercompetencysummaryCompetencyComppath {
	/** ancestors */
	ancestors: ReturnsUsercompetencysummaryCompetencyComppathAncestors;
	framework: ReturnsUsercompetencysummaryCompetencyComppathFramework;
	/** pluginbaseurl */
	pluginbaseurl: string;
	/** pagecontextid */
	pagecontextid: number;
	/** showlinks */
	showlinks: boolean;
}

export interface ReturnsUsercompetencysummaryCompetency {
	/** linkedcourses */
	linkedcourses: ReturnsUsercompetencysummaryCompetencyLinkedcourses;
	/** relatedcompetencies */
	relatedcompetencies: ReturnsUsercompetencysummaryCompetencyRelatedcompetencies;
	competency: ReturnsUsercompetencysummaryCompetencyCompetency;
	framework: ReturnsUsercompetencysummaryCompetencyFramework;
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
	comppath: ReturnsUsercompetencysummaryCompetencyComppath;
	/** pluginbaseurl */
	pluginbaseurl: string;
}

export interface ReturnsUsercompetencysummaryUser {
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

export interface ReturnsUsercompetencysummaryUsercompetencyReviewer {
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

export interface ReturnsUsercompetencysummaryUsercompetency {
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
	reviewer: ReturnsUsercompetencysummaryUsercompetencyReviewer;
	/** statusname */
	statusname: string;
	/** url */
	url: string;
}

export interface ReturnsUsercompetencysummaryUsercompetencyplan {
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

export interface ReturnsUsercompetencysummaryUsercompetencycourse {
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

export interface ReturnsUsercompetencysummaryEvidenceItemActionuser {
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

export interface ReturnsUsercompetencysummaryEvidenceItem {
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
	actionuser: ReturnsUsercompetencysummaryEvidenceItemActionuser;
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
export type ReturnsUsercompetencysummaryEvidence = ReturnsUsercompetencysummaryEvidenceItem[];

export interface ReturnsUsercompetencysummaryCommentarea {
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

export interface ReturnsUsercompetencysummary {
	/** showrelatedcompetencies */
	showrelatedcompetencies: boolean;
	/** cangrade */
	cangrade: boolean;
	competency: ReturnsUsercompetencysummaryCompetency;
	user: ReturnsUsercompetencysummaryUser;
	usercompetency: ReturnsUsercompetencysummaryUsercompetency;
	usercompetencyplan: ReturnsUsercompetencysummaryUsercompetencyplan;
	usercompetencycourse: ReturnsUsercompetencysummaryUsercompetencycourse;
	/** evidence */
	evidence: ReturnsUsercompetencysummaryEvidence;
	commentarea: ReturnsUsercompetencysummaryCommentarea;
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

export interface ReturnsCoursemodulesItem {
	/** id */
	id: number;
	/** name */
	name: string;
	/** url */
	url: string;
	/** iconurl */
	iconurl: string;
}

/**
 * coursemodules
 */
export type ReturnsCoursemodules = ReturnsCoursemodulesItem[];

export interface ReturnsPlansItemCommentarea {
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

export interface ReturnsPlansItemReviewer {
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

export interface ReturnsPlansItemTemplate {
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

export interface ReturnsPlansItem {
	/** name */
	name: string;
	/** description */
	description: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** userid */
	userid: number;
	/** templateid */
	templateid: number | null;
	/** origtemplateid */
	origtemplateid: number | null;
	/** status */
	status: number;
	/** duedate */
	duedate: number;
	/** reviewerid */
	reviewerid: number | null;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** statusname */
	statusname: string;
	/** isbasedontemplate */
	isbasedontemplate: boolean;
	/** canmanage */
	canmanage: boolean;
	/** canrequestreview */
	canrequestreview: boolean;
	/** canreview */
	canreview: boolean;
	/** canbeedited */
	canbeedited: boolean;
	/** isactive */
	isactive: boolean;
	/** isdraft */
	isdraft: boolean;
	/** iscompleted */
	iscompleted: boolean;
	/** isinreview */
	isinreview: boolean;
	/** iswaitingforreview */
	iswaitingforreview: boolean;
	/** isreopenallowed */
	isreopenallowed: boolean;
	/** iscompleteallowed */
	iscompleteallowed: boolean;
	/** isunlinkallowed */
	isunlinkallowed: boolean;
	/** isrequestreviewallowed */
	isrequestreviewallowed: boolean;
	/** iscancelreviewrequestallowed */
	iscancelreviewrequestallowed: boolean;
	/** isstartreviewallowed */
	isstartreviewallowed: boolean;
	/** isstopreviewallowed */
	isstopreviewallowed: boolean;
	/** isapproveallowed */
	isapproveallowed: boolean;
	/** isunapproveallowed */
	isunapproveallowed: boolean;
	/** duedateformatted */
	duedateformatted: string;
	commentarea: ReturnsPlansItemCommentarea;
	reviewer: ReturnsPlansItemReviewer;
	template: ReturnsPlansItemTemplate;
	/** url */
	url: string;
}

/**
 * plans
 */
export type ReturnsPlans = ReturnsPlansItem[];

export interface Returns {
	usercompetencysummary: ReturnsUsercompetencysummary;
	course: ReturnsCourse;
	/** coursemodules */
	coursemodules: ReturnsCoursemodules;
	/** plans */
	plans: ReturnsPlans;
	/** pluginbaseurl */
	pluginbaseurl: string;
}
