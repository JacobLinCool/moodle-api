/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsResourcesItemIntrofilesItem {
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
 * Files in the introduction
 */
export type ReturnsResourcesItemIntrofiles = ReturnsResourcesItemIntrofilesItem[];

/**
 * File.
 */
export interface ReturnsResourcesItemContentfilesItem {
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
 * Files in the content
 */
export type ReturnsResourcesItemContentfiles = ReturnsResourcesItemContentfilesItem[];

export interface ReturnsResourcesItem {
	/** Activity instance id */
	id: number | null;
	/** Course module id */
	coursemodule: number | null;
	/** Course id */
	course: number | null;
	/** Activity name */
	name: string | null;
	/** Activity introduction */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction */
	introfiles: ReturnsResourcesItemIntrofiles;
	/** Course section id */
	section: number | null;
	/** Visible */
	visible: boolean | null;
	/** Group mode */
	groupmode: number | null;
	/** Group id */
	groupingid: number | null;
	/** Forced activity language */
	lang: string | null;
	/** Files in the content */
	contentfiles: ReturnsResourcesItemContentfiles;
	/** Whether this resource was migrated */
	tobemigrated: number | null;
	/** Legacy files flag */
	legacyfiles: number | null;
	/** Legacy files last control flag */
	legacyfileslast: number | null;
	/** How to display the resource */
	display: number | null;
	/** Display options (width, height) */
	displayoptions: string | null;
	/** If filters should be applied to the resource content */
	filterfiles: number | null;
	/** Incremented when after each file changes, to avoid cache */
	revision: number | null;
	/** Last time the resource was modified */
	timemodified: number | null;
}

export type ReturnsResources = ReturnsResourcesItem[];

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
	resources: ReturnsResources;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
