export interface Params {}

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
	/** Whether the user can view blogs */
	canview: boolean | null;
	/** Whether the user can search blogs */
	cansearch: boolean | null;
	/** Whether the user can view drafts */
	canviewdrafts: boolean | null;
	/** Whether the user can create blog entries */
	cancreate: boolean | null;
	/** Whether the user can manage blog entries */
	canmanageentries: boolean | null;
	/** Whether the user can manage external blogs */
	canmanageexternal: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
