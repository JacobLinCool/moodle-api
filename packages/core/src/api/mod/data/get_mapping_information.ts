export interface Params {
	/** Id of the data activity */
	cmid: number | null;
	/** Preset to be imported */
	importedpreset: string | null;
}

/**
 * Information to import if everything went fine
 */
export interface ReturnsData {
	/** Whether the importing needs mapping or not */
	needsmapping: boolean | null;
	/** Name of the applied preset */
	presetname: string | null;
	/** List of field names to create */
	fieldstocreate: string | null;
	/** List of field names to remove */
	fieldstoremove: string | null;
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
	/** Information to import if everything went fine */
	data: ReturnsData;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
