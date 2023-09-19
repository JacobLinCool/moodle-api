export interface ParamsArgsItem {
	/** Param name. */
	name: string | null;
	/** Param value. */
	value: string | null;
}

/**
 * Args for the method are optional.
 */
export type ParamsArgs = ParamsArgsItem[];

export interface Params {
	/** Component where the class is e.g. mod_assign. */
	component: string | null;
	/** Method to execute in class \$component\output\mobile. */
	method: string | null;
	/** Args for the method are optional. */
	args: ParamsArgs;
}

export interface ReturnsTemplatesItem {
	/** ID of the template. */
	id: string | null;
	/** HTML code. */
	html: string | null;
}

/**
 * Templates required by the generated content.
 */
export type ReturnsTemplates = ReturnsTemplatesItem[];

export interface ReturnsOtherdataItem {
	/** Field name. */
	name: string | null;
	/** Field value. */
	value: string | null;
}

/**
 * Other data that can be used or manipulated by the template via 2-way data-binding.
 */
export type ReturnsOtherdata = ReturnsOtherdataItem[];

/**
 * File.
 */
export interface ReturnsFilesItem {
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
 * Files in the content.
 */
export type ReturnsFiles = ReturnsFilesItem[];

/**
 * List of allowed users.
 */
export type ReturnsRestrictUsers = (number | null)[];

/**
 * List of allowed courses.
 */
export type ReturnsRestrictCourses = (number | null)[];

/**
 * Restrict this content to certain users or courses.
 */
export interface ReturnsRestrict {
	/** List of allowed users. */
	users: ReturnsRestrictUsers;
	/** List of allowed courses. */
	courses: ReturnsRestrictCourses;
}

export interface Returns {
	/** Templates required by the generated content. */
	templates: ReturnsTemplates;
	/** JavaScript code. */
	javascript: string | null;
	/** Other data that can be used or manipulated by the template via 2-way data-binding. */
	otherdata: ReturnsOtherdata;
	/** Files in the content. */
	files: ReturnsFiles;
	/** Restrict this content to certain users or courses. */
	restrict: ReturnsRestrict;
	/** Whether we consider this disabled or not. */
	disabled: boolean | null;
}
