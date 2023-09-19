export interface Params {}

export interface ReturnsAreasItem {
	/** Area id. */
	id: number;
	/** Component the area is related to. */
	component: string;
	/** Type of item in the component. */
	itemtype: string;
	/** Whether this area is enabled. */
	enabled: boolean;
	/** The tag collection this are belongs to. */
	tagcollid: number;
	/** Component callback for processing tags. */
	callback: string | null;
	/** Component callback file. */
	callbackfile: string | null;
	/** Return whether to display only standard, only non-standard or both tags. */
	showstandard: number;
	/** Whether the tag area allows tag instances to be created in multiple contexts. */
	multiplecontexts: boolean;
	/** Whether the area is locked. */
	locked: boolean | null;
}

export type ReturnsAreas = ReturnsAreasItem[];

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
	areas: ReturnsAreas;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
