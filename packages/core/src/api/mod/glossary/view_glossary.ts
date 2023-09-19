export interface Params {
	/** Glossary instance ID */
	id: number | null;
	/** The mode in which the glossary is viewed */
	mode: string | null;
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
	/** True on success */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
