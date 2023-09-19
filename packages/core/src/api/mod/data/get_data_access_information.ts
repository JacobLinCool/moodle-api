export interface Params {
	/** Database instance id. */
	databaseid: number | null;
	/** Group id, 0 means that the function will determine the user group. */
	groupid?: number | null;
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
	/** User current group id (calculated) */
	groupid: number | null;
	/** Whether the user can add entries or not. */
	canaddentry: boolean | null;
	/** Whether the user can manage entries or not. */
	canmanageentries: boolean | null;
	/** Whether the user can approve entries or not. */
	canapprove: boolean | null;
	/** Whether the database is available or not by time restrictions. */
	timeavailable: boolean | null;
	/** Whether the database is in read mode only. */
	inreadonlyperiod: boolean | null;
	/** The number of entries the current user added. */
	numentries: number | null;
	/** The number of entries left to complete the activity. */
	entrieslefttoadd: number | null;
	/** The number of entries left to view other users entries. */
	entrieslefttoview: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
