/**
 * Editor structure
 */
export interface ParamsPlugindataOnlinetextEditor {
	/** The text for this submission. */
	text: string | null;
	/** The format for this submission */
	format: number | null;
	/** The draft area id for files attached to the submission */
	itemid: number | null;
}

export interface ParamsPlugindata {
	/** Editor structure */
	onlinetext_editor: ParamsPlugindataOnlinetextEditor;
	/** The id of a draft area containing files for this submission. */
	files_filemanager: number | null;
}

export interface Params {
	/** The assignment id to operate on */
	assignmentid: number | null;
	plugindata: ParamsPlugindata;
}

/**
 * warning
 */
export interface ReturnsItem {
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
export type Returns = ReturnsItem[];
