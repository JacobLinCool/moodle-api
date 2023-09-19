export interface Params {
	/** The user evidence ID. */
	id: number | null;
}

export interface ReturnsCompetenciesItem {
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
 * competencies
 */
export type ReturnsCompetencies = ReturnsCompetenciesItem[];

export interface ReturnsFilesItem {
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
export type ReturnsFiles = ReturnsFilesItem[];

export interface Returns {
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
	/** competencycount */
	competencycount: number;
	/** competencies */
	competencies: ReturnsCompetencies;
	/** filecount */
	filecount: number;
	/** files */
	files: ReturnsFiles;
	/** hasurlorfiles */
	hasurlorfiles: boolean;
	/** urlshort */
	urlshort: string;
}
