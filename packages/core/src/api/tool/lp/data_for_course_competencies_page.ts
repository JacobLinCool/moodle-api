export interface Params {
	/** The course id */
	courseid: number | null;
	/** The module id */
	moduleid?: number | null;
}

export interface ReturnsSettings {
	/** courseid */
	courseid: number;
	/** pushratingstouserplans */
	pushratingstouserplans: boolean;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}

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
	/** proficientcompetencycount */
	proficientcompetencycount: number;
	/** proficientcompetencypercentage */
	proficientcompetencypercentage: number;
	/** proficientcompetencypercentageformatted */
	proficientcompetencypercentageformatted: string;
	/** leastproficient */
	leastproficient: ReturnsStatisticsLeastproficient;
	/** leastproficientcount */
	leastproficientcount: number;
	/** canbegradedincourse */
	canbegradedincourse: boolean;
	/** canmanagecoursecompetencies */
	canmanagecoursecompetencies: boolean;
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

export interface ReturnsCompetenciesItemCoursecompetency {
	/** courseid */
	courseid: number;
	/** competencyid */
	competencyid: number;
	/** sortorder */
	sortorder: number;
	/** ruleoutcome */
	ruleoutcome: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}

export interface ReturnsCompetenciesItemCoursemodulesItem {
	/** id */
	id: number;
	/** name */
	name: string;
	/** url */
	url: string;
	/** iconurl */
	iconurl: string;
}

export type ReturnsCompetenciesItemCoursemodules = ReturnsCompetenciesItemCoursemodulesItem[];

export interface ReturnsCompetenciesItemUsercompetencycourse {
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

export interface ReturnsCompetenciesItemRuleoutcomeoptionsItem {
	/** The option value */
	value: number | null;
	/** The name of the option */
	text: string | null;
	/** If this is the currently selected option */
	selected: boolean | null;
}

export type ReturnsCompetenciesItemRuleoutcomeoptions =
	ReturnsCompetenciesItemRuleoutcomeoptionsItem[];

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

export interface ReturnsCompetenciesItemPlansItemCommentarea {
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

export interface ReturnsCompetenciesItemPlansItemReviewer {
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

export interface ReturnsCompetenciesItemPlansItemTemplate {
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

export interface ReturnsCompetenciesItemPlansItem {
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
	commentarea: ReturnsCompetenciesItemPlansItemCommentarea;
	reviewer: ReturnsCompetenciesItemPlansItemReviewer;
	template: ReturnsCompetenciesItemPlansItemTemplate;
	/** url */
	url: string;
}

export type ReturnsCompetenciesItemPlans = ReturnsCompetenciesItemPlansItem[];

export interface ReturnsCompetenciesItem {
	competency: ReturnsCompetenciesItemCompetency;
	coursecompetency: ReturnsCompetenciesItemCoursecompetency;
	coursemodules: ReturnsCompetenciesItemCoursemodules;
	usercompetencycourse: ReturnsCompetenciesItemUsercompetencycourse;
	ruleoutcomeoptions: ReturnsCompetenciesItemRuleoutcomeoptions;
	comppath: ReturnsCompetenciesItemComppath;
	plans: ReturnsCompetenciesItemPlans;
}

export type ReturnsCompetencies = ReturnsCompetenciesItem[];

export interface Returns {
	/** The current course id */
	courseid: number | null;
	/** The current page context ID. */
	pagecontextid: number | null;
	/** Current user id, if the user is a gradable user. */
	gradableuserid: number | null;
	/** User can manage competency frameworks */
	canmanagecompetencyframeworks: boolean | null;
	/** User can manage linked course competencies */
	canmanagecoursecompetencies: boolean | null;
	/** User can configure course competency settings */
	canconfigurecoursecompetencies: boolean | null;
	/** User can grade competencies. */
	cangradecompetencies: boolean | null;
	settings: ReturnsSettings;
	statistics: ReturnsStatistics;
	competencies: ReturnsCompetencies;
	/** Url to the manage competencies page. */
	manageurl: string | null;
	/** Url to the course competencies page. */
	pluginbaseurl: string | null;
}
