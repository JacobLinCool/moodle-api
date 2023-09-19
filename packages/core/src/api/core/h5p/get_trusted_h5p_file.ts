export interface Params {
	/** H5P file url. */
	url: string | null;
	/** The frame allow to show the bar options below the content */
	frame?: number | null;
	/** The export allow to download the package */
	export?: number | null;
	/** The embed allow to copy the code to your site */
	embed?: number | null;
	/** The copyright option */
	copyright?: number | null;
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
 * H5P file trusted.
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
	/** H5P file trusted. */
	files: ReturnsFiles;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
