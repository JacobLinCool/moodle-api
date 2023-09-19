export interface Params {
	/** Course to check, empty for site calendar events. */
	courseid?: number | null;
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
	/** Whether the user can manage entries. */
	canmanageentries: boolean | null;
	/** Whether the user can manage its own entries. */
	canmanageownentries: boolean | null;
	/** Whether the user can manage group entries. */
	canmanagegroupentries: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
