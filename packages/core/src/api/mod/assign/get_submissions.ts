/**
 * 1 or more assignment ids
 */
export type ParamsAssignmentids = (number | null)[];

export interface Params {
	/** 1 or more assignment ids */
	assignmentids: ParamsAssignmentids;
	/** status */
	status?: string | null;
	/** submitted since */
	since?: number | null;
	/** submitted before */
	before?: number | null;
}

/**
 * File.
 */
export interface ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItemFilesItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * files
 */
export type ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItemFiles =
	ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItemFilesItem[];

export interface ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareas =
	ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareasItem[];

export interface ReturnsAssignmentsItemSubmissionsItemPluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsAssignmentsItemSubmissionsItemPluginsItemEditorfields =
	ReturnsAssignmentsItemSubmissionsItemPluginsItemEditorfieldsItem[];

export interface ReturnsAssignmentsItemSubmissionsItemPluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsAssignmentsItemSubmissionsItemPluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsAssignmentsItemSubmissionsItemPluginsItemEditorfields;
}

/**
 * plugins
 */
export type ReturnsAssignmentsItemSubmissionsItemPlugins =
	ReturnsAssignmentsItemSubmissionsItemPluginsItem[];

/**
 * submission info
 */
export interface ReturnsAssignmentsItemSubmissionsItem {
	/** submission id */
	id: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** submission creation time */
	timecreated: number | null;
	/** submission last modified time */
	timemodified: number | null;
	/** submission start time */
	timestarted: number | null;
	/** submission status */
	status: string | null;
	/** group id */
	groupid: number | null;
	/** assignment id */
	assignment: number | null;
	/** latest attempt */
	latest: number | null;
	/** plugins */
	plugins: ReturnsAssignmentsItemSubmissionsItemPlugins;
	/** Grading status. */
	gradingstatus: string | null;
}

export type ReturnsAssignmentsItemSubmissions = ReturnsAssignmentsItemSubmissionsItem[];

export interface ReturnsAssignmentsItem {
	/** assignment id */
	assignmentid: number | null;
	submissions: ReturnsAssignmentsItemSubmissions;
}

/**
 * assignment submissions
 */
export type ReturnsAssignments = ReturnsAssignmentsItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	/** assignment submissions */
	assignments: ReturnsAssignments;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
