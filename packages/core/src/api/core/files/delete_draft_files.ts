export interface ParamsFilesItem {
	/** Path to the file or directory to delete. */
	filepath: string | null;
	/** Name of the file to delete. */
	filename: string | null;
}

/**
 * Files or directories to be deleted.
 */
export type ParamsFiles = ParamsFilesItem[];

export interface Params {
	/** Item id of the draft file area */
	draftitemid: number | null;
	/** Files or directories to be deleted. */
	files: ParamsFiles;
}

export type ReturnsParentpaths = (string | null)[];

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
	parentpaths: ReturnsParentpaths;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
