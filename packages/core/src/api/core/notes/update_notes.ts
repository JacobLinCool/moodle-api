export interface ParamsNotesItem {
	/** id of the note */
	id: number | null;
	/** 'personal', 'course' or 'site' */
	publishstate: string | null;
	/** the text of the message - text or HTML */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format?: number | null;
}

/**
 * Array of Notes
 */
export type ParamsNotes = ParamsNotesItem[];

export interface Params {
	/** Array of Notes */
	notes?: ParamsNotes;
}

/**
 * warning
 */
export interface ReturnsItem {
	/** item is always 'note' */
	item: string | null;
	/** When errorcode is savedfailed the note could not be modified.When errorcode is badparam, an incorrect parameter was provided.When errorcode is badid, the note does not exist */
	itemid: number | null;
	/** errorcode can be badparam (incorrect parameter), savedfailed (could not be modified), or badid (note does not exist) */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type Returns = ReturnsItem[];
