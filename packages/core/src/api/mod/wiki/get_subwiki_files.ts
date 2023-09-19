export interface Params {
	/** Wiki instance ID. */
	wikiid: number | null;
	/** Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups. */
	groupid?: number | null;
	/** Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis. */
	userid?: number | null;
}

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
 * Files
 */
export type ReturnsFiles = ReturnsFilesItem[];

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
	/** Files */
	files: ReturnsFiles;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
