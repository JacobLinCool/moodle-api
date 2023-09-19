export interface ParamsFilestokeepItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
}

/**
 * Only keep these files in the draft file area. Empty for keeping all.
 */
export type ParamsFilestokeep = ParamsFilestokeepItem[];

export interface Params {
	/** Post to prepare the draft area for. */
	postid: number | null;
	/** Area to prepare: attachment or post. */
	area: string | null;
	/** The draft item id to use. 0 to generate one. */
	draftitemid?: number | null;
	/** Only keep these files in the draft file area. Empty for keeping all. */
	filestokeep?: ParamsFilestokeep;
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
 * Draft area files.
 */
export type ReturnsFiles = ReturnsFilesItem[];

export interface ReturnsAreaoptionsItem {
	/** Name of option. */
	name: string | null;
	/** Value of option. */
	value: string | null;
}

/**
 * Draft file area options.
 */
export type ReturnsAreaoptions = ReturnsAreaoptionsItem[];

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
	/** Draft item id for the file area. */
	draftitemid: number | null;
	/** Draft area files. */
	files: ReturnsFiles;
	/** Draft file area options. */
	areaoptions: ReturnsAreaoptions;
	/** Message text with URLs rewritten. */
	messagetext: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
