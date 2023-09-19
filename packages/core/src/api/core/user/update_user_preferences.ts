export interface ParamsPreferencesItem {
	/** The name of the preference */
	type: string | null;
	/** The value of the preference, do not set this field if you want to remove (unset) the current value. */
	value?: string | null;
}

/**
 * User preferences
 */
export type ParamsPreferences = ParamsPreferencesItem[];

export interface Params {
	/** id of the user, default to current user */
	userid?: number | null;
	/** Enable or disable notifications for this user */
	emailstop?: number | null;
	/** User preferences */
	preferences?: ParamsPreferences;
}
