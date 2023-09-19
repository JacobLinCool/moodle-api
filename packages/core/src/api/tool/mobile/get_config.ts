export interface Params {
	/** Settings section name. */
	section?: string | null;
}

export interface ReturnsSettingsItem {
	/** The name of the setting */
	name: string | null;
	/** The value of the setting */
	value: string | null;
}

/**
 * Settings
 */
export type ReturnsSettings = ReturnsSettingsItem[];

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
	/** Settings */
	settings: ReturnsSettings;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
