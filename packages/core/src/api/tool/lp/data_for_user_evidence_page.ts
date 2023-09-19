export interface Params {
	/** The user evidence ID */
	id: number | null;
}

export interface ReturnsUserevidenceFilesItem {
	/** contextid */
	contextid: number;
	/** component */
	component: string;
	/** filearea */
	filearea: string;
	/** itemid */
	itemid: number;
	/** filepath */
	filepath: string;
	/** filename */
	filename: string;
	/** isdir */
	isdir: boolean;
	/** isimage */
	isimage: boolean;
	/** timemodified */
	timemodified: number;
	/** timecreated */
	timecreated: number;
	/** filesize */
	filesize: number;
	/** author */
	author: string;
	/** license */
	license: string;
	/** filenameshort */
	filenameshort: string;
	/** filesizeformatted */
	filesizeformatted: string;
	/** icon */
	icon: string;
	/** timecreatedformatted */
	timecreatedformatted: string;
	/** timemodifiedformatted */
	timemodifiedformatted: string;
	/** url */
	url: string;
}

/**
 * files
 */
export type ReturnsUserevidenceFiles = ReturnsUserevidenceFilesItem[];

export interface ReturnsUserevidenceUsercompetenciesItemCompetency {
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

export interface ReturnsUserevidenceUsercompetenciesItemUsercompetencyReviewer {
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

export interface ReturnsUserevidenceUsercompetenciesItemUsercompetency {
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
	reviewer: ReturnsUserevidenceUsercompetenciesItemUsercompetencyReviewer;
	/** statusname */
	statusname: string;
	/** url */
	url: string;
}

export interface ReturnsUserevidenceUsercompetenciesItem {
	competency: ReturnsUserevidenceUsercompetenciesItemCompetency;
	usercompetency: ReturnsUserevidenceUsercompetenciesItemUsercompetency;
}

/**
 * usercompetencies
 */
export type ReturnsUserevidenceUsercompetencies = ReturnsUserevidenceUsercompetenciesItem[];

export interface ReturnsUserevidence {
	/** userid */
	userid: number;
	/** name */
	name: string;
	/** description */
	description: string;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** url */
	url: string;
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
	/** filecount */
	filecount: number;
	/** files */
	files: ReturnsUserevidenceFiles;
	/** hasurlorfiles */
	hasurlorfiles: boolean;
	/** urlshort */
	urlshort: string;
	/** competencycount */
	competencycount: number;
	/** usercompetencies */
	usercompetencies: ReturnsUserevidenceUsercompetencies;
	/** userhasplan */
	userhasplan: boolean;
}

export interface Returns {
	userevidence: ReturnsUserevidence;
	/** Url to the tool_lp plugin folder on this Moodle site */
	pluginbaseurl: string | null;
}
