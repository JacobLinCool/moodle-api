export interface Params {
	/** preference name, empty for all */
	name?: string | null;
	/** id of the user, default to current user */
	userid?: number | null;
}

export interface ReturnsPreferencesItem {
	/** The name of the preference */
	name: string | null;
	/** The value of the preference */
	value: string | null;
}

/**
 * User custom fields (also known as user profile fields)
 */
export type ReturnsPreferences = ReturnsPreferencesItem[];

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
	/** User custom fields (also known as user profile fields) */
	preferences: ReturnsPreferences;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
