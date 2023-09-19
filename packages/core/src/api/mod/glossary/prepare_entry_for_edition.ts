export interface Params {
	/** Glossary entry id to update */
	entryid: number | null;
}

export interface ReturnsAreasItemOptionsItem {
	/** Name of option. */
	name: string | null;
	/** Value of option. */
	value: string | null;
}

/**
 * Draft file area options.
 */
export type ReturnsAreasItemOptions = ReturnsAreasItemOptionsItem[];

export interface ReturnsAreasItem {
	/** File area name. */
	area: string | null;
	/** Draft file area options. */
	options: ReturnsAreasItemOptions;
}

/**
 * File areas including options
 */
export type ReturnsAreas = ReturnsAreasItem[];

export type ReturnsAliases = (string | null)[];

export type ReturnsCategories = (number | null)[];

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
	/** Draft item id for the text editor. */
	inlineattachmentsid: number | null;
	/** Draft item id for the file manager. */
	attachmentsid: number | null;
	/** File areas including options */
	areas: ReturnsAreas;
	aliases: ReturnsAliases;
	categories: ReturnsCategories;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
