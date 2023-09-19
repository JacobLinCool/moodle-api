export interface Params {
	/** The user id */
	userid: number | null;
}

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

export type ReturnsPlans = ReturnsPlansItem[];

export type ReturnsNavigation = (string | null)[];

export interface Returns {
	/** The learning plan user id */
	userid: number | null;
	plans: ReturnsPlans;
	/** Url to the tool_lp plugin folder on this Moodle site */
	pluginbaseurl: string | null;
	navigation: ReturnsNavigation;
	/** Can the current user view the user's evidence */
	canreaduserevidence: boolean | null;
	/** Can the current user manage the user's plans */
	canmanageuserplans: boolean | null;
}
