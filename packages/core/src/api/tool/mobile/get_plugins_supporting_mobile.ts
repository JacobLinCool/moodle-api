export interface Params {}

/**
 * The list of Mobile addons this addon depends on.
 */
export type ReturnsPluginsItemDependencies = (string | null)[];

export interface ReturnsPluginsItem {
	/** The plugin component name. */
	component: string | null;
	/** The plugin version number. */
	version: string | null;
	/** The Mobile addon (package) name. */
	addon: string | null;
	/** The list of Mobile addons this addon depends on. */
	dependencies: ReturnsPluginsItemDependencies;
	/** The addon package url for download or empty if it doesn't exist. */
	fileurl: string | null;
	/** The addon package hash or empty if it doesn't exist. */
	filehash: string | null;
	/** The addon package size or empty if it doesn't exist. */
	filesize: number | null;
	/** Handlers definition (JSON) */
	handlers: string | null;
	/** Language strings used by the handlers (JSON) */
	lang: string | null;
}

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
	plugins: ReturnsPlugins;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
