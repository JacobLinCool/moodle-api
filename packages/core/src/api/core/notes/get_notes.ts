/**
 * Array of Note Ids to be retrieved.
 */
export type ParamsNotes = (number | null)[];

export interface Params {
	/** Array of Note Ids to be retrieved. */
	notes: ParamsNotes;
}

/**
 * note
 */
export interface ReturnsNotesItem {
	/** id of the note */
	noteid: number | null;
	/** id of the user the note is about */
	userid: number | null;
	/** 'personal', 'course' or 'site' */
	publishstate: string | null;
	/** course id of the note */
	courseid: number | null;
	/** the text of the message - text or HTML */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

export type ReturnsNotes = ReturnsNotesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
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
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	notes: ReturnsNotes;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
