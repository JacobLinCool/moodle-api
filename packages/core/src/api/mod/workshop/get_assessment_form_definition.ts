export interface Params {
	/** Assessment id */
	assessmentid: number | null;
	/** The form mode (assessment or preview) */
	mode?: string | null;
}

/**
 * File.
 */
export interface ReturnsDescriptionfilesItem {
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
 * Files in the description text
 */
export type ReturnsDescriptionfiles = ReturnsDescriptionfilesItem[];

export interface ReturnsOptionsItem {
	/** Option name. */
	name: string | null;
	/** Option value. */
	value: string | null;
}

/**
 * The form options.
 */
export type ReturnsOptions = ReturnsOptionsItem[];

export interface ReturnsFieldsItem {
	/** Field name. */
	name: string | null;
	/** Field default value. */
	value: string | null;
}

/**
 * The form fields.
 */
export type ReturnsFields = ReturnsFieldsItem[];

export interface ReturnsCurrentItem {
	/** Field name. */
	name: string | null;
	/** Current field value. */
	value: string | null;
}

/**
 * The current field values.
 */
export type ReturnsCurrent = ReturnsCurrentItem[];

export interface ReturnsDimensionsinfoItem {
	/** Dimension id. */
	id: number | null;
	/** Minimum grade for the dimension. */
	min: number | null;
	/** Maximum grade for the dimension. */
	max: number | null;
	/** The weight of the dimension. */
	weight: string | null;
	/** Scale items (if used). */
	scale: string | null;
}

/**
 * The dimensions general information.
 */
export type ReturnsDimensionsinfo = ReturnsDimensionsinfoItem[];

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
	/** The number of dimenssions used by the form. */
	dimenssionscount: number | null;
	/** Files in the description text */
	descriptionfiles: ReturnsDescriptionfiles;
	/** The form options. */
	options: ReturnsOptions;
	/** The form fields. */
	fields: ReturnsFields;
	/** The current field values. */
	current: ReturnsCurrent;
	/** The dimensions general information. */
	dimensionsinfo: ReturnsDimensionsinfo;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
