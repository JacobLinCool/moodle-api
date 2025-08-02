export interface Params {
	/** Context level: system, user, coursecat, course, module or block */
	contextlevel: string | null;
	/** Instance ID of the context (e.g. course ID) */
	instanceid: number | null;
}

export interface ReturnsInstalledlanguagesItem {
	/** Language code */
	lang: string | null;
	/** Language name */
	name: string | null;
}

/**
 * List of installed languages
 */
export type ReturnsInstalledlanguages = ReturnsInstalledlanguagesItem[];

export interface ReturnsPluginsItemSettingsItem {
	/** Name of the setting */
	name: string | null;
	/** Value of the setting */
	value: string | null;
}

/**
 * Settings of the plugin
 */
export type ReturnsPluginsItemSettings = ReturnsPluginsItemSettingsItem[];

export interface ReturnsPluginsItem {
	/** Name of the plugin */
	name: string | null;
	/** Settings of the plugin */
	settings: ReturnsPluginsItemSettings;
}

/**
 * Configuration of enabled plugins for the context
 */
export type ReturnsPlugins = ReturnsPluginsItem[];

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
	/** Context id */
	contextid: number | null;
	/** Display the TinyMCE logo */
	branding: boolean | null;
	/** Extended valid elements */
	extendedvalidelements: string | null;
	/** List of installed languages */
	installedlanguages: ReturnsInstalledlanguages;
	/** Configuration of enabled plugins for the context */
	plugins: ReturnsPlugins;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
