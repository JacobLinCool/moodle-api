export interface Params {
	/** id of the user, 0 for current user */
	userid?: number | null;
}

export interface ReturnsPreferencesProcessorsItem {
	/** Display name */
	displayname: string | null;
	/** Processor name */
	name: string | null;
	/** Whether has settings */
	hassettings: boolean | null;
	/** Context id */
	contextid: number | null;
	/** Whether is configured by the user */
	userconfigured: number | null;
}

/**
 * Config form values
 */
export type ReturnsPreferencesProcessors = ReturnsPreferencesProcessorsItem[];

/**
 * DEPRECATED ATTRIBUTE -
Kept for backward compatibility, use enabled instead.
 */
export interface ReturnsPreferencesComponentsItemNotificationsItemProcessorsItemLoggedin {
	/** Name */
	name: string | null;
	/** Display name */
	displayname: string | null;
	/** Is checked? */
	checked: boolean | null;
}

/**
 * DEPRECATED ATTRIBUTE -
Kept for backward compatibility, use enabled instead.
 */
export interface ReturnsPreferencesComponentsItemNotificationsItemProcessorsItemLoggedoff {
	/** Name */
	name: string | null;
	/** Display name */
	displayname: string | null;
	/** Is checked? */
	checked: boolean | null;
}

export interface ReturnsPreferencesComponentsItemNotificationsItemProcessorsItem {
	/** Display name */
	displayname: string | null;
	/** Processor name */
	name: string | null;
	/** Is locked by admin? */
	locked: boolean | null;
	/** Text to display if locked */
	lockedmessage: string | null;
	/** Is configured? */
	userconfigured: number | null;
	/** DEPRECATED ATTRIBUTE - Kept for backward compatibility, use enabled instead. */
	loggedin: ReturnsPreferencesComponentsItemNotificationsItemProcessorsItemLoggedin;
	/** DEPRECATED ATTRIBUTE - Kept for backward compatibility, use enabled instead. */
	loggedoff: ReturnsPreferencesComponentsItemNotificationsItemProcessorsItemLoggedoff;
	/** Is enabled? */
	enabled: boolean | null;
}

/**
 * Processors values for this notification
 */
export type ReturnsPreferencesComponentsItemNotificationsItemProcessors =
	ReturnsPreferencesComponentsItemNotificationsItemProcessorsItem[];

export interface ReturnsPreferencesComponentsItemNotificationsItem {
	/** Display name */
	displayname: string | null;
	/** Preference key */
	preferencekey: string | null;
	/** Processors values for this notification */
	processors: ReturnsPreferencesComponentsItemNotificationsItemProcessors;
}

/**
 * List of notificaitons for the component
 */
export type ReturnsPreferencesComponentsItemNotifications =
	ReturnsPreferencesComponentsItemNotificationsItem[];

export interface ReturnsPreferencesComponentsItem {
	/** Display name */
	displayname: string | null;
	/** List of notificaitons for the component */
	notifications: ReturnsPreferencesComponentsItemNotifications;
}

/**
 * Available components
 */
export type ReturnsPreferencesComponents = ReturnsPreferencesComponentsItem[];

export interface ReturnsPreferences {
	/** User id */
	userid: number | null;
	/** Whether all the preferences are disabled */
	disableall: number | null;
	/** Config form values */
	processors: ReturnsPreferencesProcessors;
	/** Available components */
	components: ReturnsPreferencesComponents;
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
	preferences: ReturnsPreferences;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
