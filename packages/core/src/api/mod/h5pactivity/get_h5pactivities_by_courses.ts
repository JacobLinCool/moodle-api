/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

export interface ReturnsH5pactivitiesItemIntrofilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * introfiles
 */
export type ReturnsH5pactivitiesItemIntrofiles = ReturnsH5pactivitiesItemIntrofilesItem[];

export interface ReturnsH5pactivitiesItemPackageItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * package
 */
export type ReturnsH5pactivitiesItemPackage = ReturnsH5pactivitiesItemPackageItem[];

export interface ReturnsH5pactivitiesItemDeployedfile {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
}

export interface ReturnsH5pactivitiesItem {
	/** The primary key of the record. */
	id: number;
	/** Course id this h5p activity is part of. */
	course: number;
	/** The name of the activity module instance. */
	name: string;
	/** Timestamp of when the instance was added to the course. */
	timecreated: number;
	/** Timestamp of when the instance was last modified. */
	timemodified: number;
	/** H5P activity description. */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat?: number | null;
	/** The maximum grade for submission. */
	grade: number;
	/** H5P Button display options. */
	displayoptions: number;
	/** Enable xAPI tracking. */
	enabletracking: number;
	/** Which H5P attempt is used for grading. */
	grademethod: number;
	/** Sha1 hash of file content. */
	contenthash: string;
	/** coursemodule */
	coursemodule: number;
	/** context */
	context: number;
	/** introfiles */
	introfiles: ReturnsH5pactivitiesItemIntrofiles;
	/** package */
	package: ReturnsH5pactivitiesItemPackage;
	deployedfile: ReturnsH5pactivitiesItemDeployedfile;
}

export type ReturnsH5pactivities = ReturnsH5pactivitiesItem[];

/**
 * H5P global settings
 */
export interface ReturnsH5pglobalsettings {
	/** Whether saving state is enabled. */
	enablesavestate: boolean | null;
	/** How often (in seconds) state is saved. */
	savestatefreq: number | null;
}

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
	h5pactivities: ReturnsH5pactivities;
	/** H5P global settings */
	h5pglobalsettings: ReturnsH5pglobalsettings;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
