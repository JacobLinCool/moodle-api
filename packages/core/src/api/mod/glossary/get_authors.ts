/**
 * An array of options
 */
export interface ParamsOptions {
	/** When false, includes self even if all of their entries require approval. When true, also includes authors only having entries pending approval. */
	includenotapproved?: boolean | null;
}

export interface Params {
	/** Glossary entry ID */
	id: number | null;
	/** Start returning records from here */
	from?: number | null;
	/** Number of records to return */
	limit?: number | null;
	/** An array of options */
	options?: ParamsOptions;
}

export interface ReturnsAuthorsItem {
	/** The user ID */
	id: number | null;
	/** The fullname */
	fullname: string | null;
	/** The picture URL */
	pictureurl: string | null;
}

export type ReturnsAuthors = ReturnsAuthorsItem[];

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
	/** The total number of records. */
	count: number | null;
	authors: ReturnsAuthors;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
