export interface ParamsOptionsItem {
	/** The expected keys (value format) are: excludemodules (bool) Do not return modules, return only the sections structure excludecontents (bool) Do not return module contents (i.e: files inside a resource) includestealthmodules (bool) Return stealth modules for students in a special section (with id -1) sectionid (int) Return only this section sectionnumber (int) Return only this section with number (order) cmid (int) Return only this module information (among the whole sections structure) modname (string) Return only modules with this name "label, forum, etc..." modid (int) Return only the module with this id (to be used with modname */
	name: string | null;
	/** the value of the option, this param is personaly validated in the external function. */
	value: string | null;
}

/**
 * Options, used since Moodle 2.9
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** course id */
	courseid: number | null;
	/** Options, used since Moodle 2.9 */
	options?: ParamsOptions;
}

export interface ReturnsItemModulesItemCompletiondataDetailsItemRulevalue {
	/** status */
	status: number;
	/** description */
	description: string;
}

export interface ReturnsItemModulesItemCompletiondataDetailsItem {
	/** rulename */
	rulename: string;
	rulevalue: ReturnsItemModulesItemCompletiondataDetailsItemRulevalue;
}

/**
 * An array of completion details containing the description and status.
 */
export type ReturnsItemModulesItemCompletiondataDetails =
	ReturnsItemModulesItemCompletiondataDetailsItem[];

export interface ReturnsItemModulesItemCompletiondata {
	/** overall completion state of this course module. */
	state: number;
	/** course completion timestamp. */
	timecompleted: number;
	/** user ID that has overridden the completion state of this activity for the user. */
	overrideby: number | null;
	/** True if module is used in a condition, false otherwise. */
	valueused: boolean;
	/** Whether this activity module has completion enabled. */
	hascompletion: boolean;
	/** Whether this activity module instance tracks completion automatically. */
	isautomatic: boolean;
	/** Checks whether completion is being tracked for this user. */
	istrackeduser: boolean;
	/** Whether this activity is visible to user. */
	uservisible: boolean;
	/** An array of completion details containing the description and status. */
	details: ReturnsItemModulesItemCompletiondataDetails;
}

export interface ReturnsItemModulesItemDatesItem {
	/** date label */
	label: string | null;
	/** date timestamp */
	timestamp: number | null;
	/** relative date timestamp */
	relativeto: number | null;
	/** cm data id */
	dataid: string | null;
}

/**
 * Course dates
 */
export type ReturnsItemModulesItemDates = ReturnsItemModulesItemDatesItem[];

export interface ReturnsItemModulesItemContentsItemTagsItem {
	/** Tag id. */
	id: number;
	/** Tag name. */
	name: string;
	/** The raw, unnormalised name for the tag as entered by users. */
	rawname: string;
	/** Whether this tag is standard. */
	isstandard: boolean;
	/** Tag collection id. */
	tagcollid: number;
	/** Tag instance id. */
	taginstanceid: number;
	/** Context the tag instance belongs to. */
	taginstancecontextid: number;
	/** Id of the record tagged. */
	itemid: number;
	/** Tag ordering. */
	ordering: number;
	/** Whether the tag is flagged as inappropriate. */
	flag: number | null;
}

/**
 * Tags
 */
export type ReturnsItemModulesItemContentsItemTags = ReturnsItemModulesItemContentsItemTagsItem[];

export interface ReturnsItemModulesItemContentsItem {
	/** a file or a folder or external link */
	type: string | null;
	/** filename */
	filename: string | null;
	/** filepath */
	filepath: string | null;
	/** filesize */
	filesize: number | null;
	/** downloadable file url */
	fileurl: string | null;
	/** Raw content, will be used when type is content */
	content: string | null;
	/** Time created */
	timecreated: number | null;
	/** Time modified */
	timemodified: number | null;
	/** Content sort order */
	sortorder: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
	/** User who added this content to moodle */
	userid: number | null;
	/** Content owner */
	author: string | null;
	/** Content license */
	license: string | null;
	/** Tags */
	tags: ReturnsItemModulesItemContentsItemTags;
}

/**
 * Course contents
 */
export type ReturnsItemModulesItemContents = ReturnsItemModulesItemContentsItem[];

/**
 * Files mime types.
 */
export type ReturnsItemModulesItemContentsinfoMimetypes = (string | null)[];

/**
 * Contents summary information.
 */
export interface ReturnsItemModulesItemContentsinfo {
	/** Total number of files. */
	filescount: number | null;
	/** Total files size. */
	filessize: number | null;
	/** Last time files were modified. */
	lastmodified: number | null;
	/** Files mime types. */
	mimetypes: ReturnsItemModulesItemContentsinfoMimetypes;
	/** The repository type for the main file. */
	repositorytype: string | null;
}

export interface ReturnsItemModulesItem {
	/** activity id */
	id: number | null;
	/** activity url */
	url: string | null;
	/** activity module name */
	name: string | null;
	/** instance id */
	instance: number | null;
	/** Activity context id. */
	contextid: number | null;
	/** activity description */
	description: string | null;
	/** is the module visible */
	visible: number | null;
	/** Is the module visible for the user? */
	uservisible: boolean | null;
	/** Availability information. */
	availabilityinfo: string | null;
	/** is the module visible on course page */
	visibleoncoursepage: number | null;
	/** activity icon url */
	modicon: string | null;
	/** activity module type */
	modname: string | null;
	/** activity module plural name */
	modplural: string | null;
	/** module availability settings */
	availability: string | null;
	/** number of identation in the site */
	indent: number | null;
	/** Onclick action. */
	onclick: string | null;
	/** After link info to be displayed. */
	afterlink: string | null;
	/** Custom data (JSON encoded). */
	customdata: string | null;
	/** Whether the module has no view page */
	noviewlink: boolean | null;
	/** Type of completion tracking: 0 means none, 1 manual, 2 automatic. */
	completion: number | null;
	completiondata?: ReturnsItemModulesItemCompletiondata;
	/** The download content value */
	downloadcontent: number | null;
	/** Course dates */
	dates?: ReturnsItemModulesItemDates;
	/** Course contents */
	contents?: ReturnsItemModulesItemContents;
	/** Contents summary information. */
	contentsinfo: ReturnsItemModulesItemContentsinfo;
}

/**
 * list of module
 */
export type ReturnsItemModules = ReturnsItemModulesItem[];

export interface ReturnsItem {
	/** Section ID */
	id: number | null;
	/** Section name */
	name: string | null;
	/** is the section visible */
	visible: number | null;
	/** Section description */
	summary: string | null;
	/** summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	summaryformat: number | null;
	/** Section number inside the course */
	section: number | null;
	/** Whether is a section hidden in the course format */
	hiddenbynumsections: number | null;
	/** Is the section visible for the user? */
	uservisible: boolean | null;
	/** Availability information. */
	availabilityinfo: string | null;
	/** list of module */
	modules: ReturnsItemModules;
}

export type Returns = ReturnsItem[];
