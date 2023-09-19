export interface ParamsPreferencesItem {
	/** The name of the preference */
	name: string | null;
	/** The value of the preference */
	value: string | null;
	/** Id of the user to set the preference */
	userid: number | null;
}

export type ParamsPreferences = ParamsPreferencesItem[];

export interface Params {
	preferences: ParamsPreferences;
}

export interface ReturnsSavedItem {
	/** The name of the preference */
	name: string | null;
	/** The user the preference was set for */
	userid: number | null;
}

/**
 * Preferences saved
 */
export type ReturnsSaved = ReturnsSavedItem[];

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
	/** Preferences saved */
	saved: ReturnsSaved;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
