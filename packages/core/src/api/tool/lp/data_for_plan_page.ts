export interface Params {
	/** The plan id */
	planid: number | null;
}

export interface ReturnsPlanCommentarea {
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

export interface ReturnsPlanReviewer {
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

export interface ReturnsPlanTemplate {
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

export interface ReturnsPlan {
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
	commentarea: ReturnsPlanCommentarea;
	reviewer: ReturnsPlanReviewer;
	template: ReturnsPlanTemplate;
	/** url */
	url: string;
}

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

export interface ReturnsCompetenciesItemUsercompetencyReviewer {
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

export interface ReturnsCompetenciesItemUsercompetency {
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
	reviewer: ReturnsCompetenciesItemUsercompetencyReviewer;
	/** statusname */
	statusname: string;
	/** url */
	url: string;
}

export interface ReturnsCompetenciesItemUsercompetencyplan {
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

export interface ReturnsCompetenciesItem {
	competency: ReturnsCompetenciesItemCompetency;
	comppath: ReturnsCompetenciesItemComppath;
	usercompetency: ReturnsCompetenciesItemUsercompetency;
	usercompetencyplan: ReturnsCompetenciesItemUsercompetencyplan;
}

export type ReturnsCompetencies = ReturnsCompetenciesItem[];

export interface Returns {
	plan: ReturnsPlan;
	/** Context ID. */
	contextid: number | null;
	/** Plugin base URL. */
	pluginbaseurl: string | null;
	competencies: ReturnsCompetencies;
	/** Count of competencies */
	competencycount: number | null;
	/** Count of proficientcompetencies */
	proficientcompetencycount: number | null;
	/** Percentage of competencies proficient */
	proficientcompetencypercentage: number | null;
	/** Displayable percentage */
	proficientcompetencypercentageformatted: string | null;
}
