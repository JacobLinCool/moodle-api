export interface ParamsNotesItem {
	/** id of the user the note is about */
	userid: number | null;
	/** 'personal', 'course' or 'site' */
	publishstate: string | null;
	/** course id of the note (in Moodle a note can only be created into a course, even for site and personal notes) */
	courseid: number | null;
	/** the text of the message - text or HTML */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format?: number | null;
	/** your own client id for the note. If this id is provided, the fail message id will be returned to you */
	clientnoteid: string | null;
}

export type ParamsNotes = ParamsNotesItem[];

export interface Params {
	notes: ParamsNotes;
}

export interface ReturnsItem {
	/** your own id for the note */
	clientnoteid: string | null;
	/** ID of the created note when successful, -1 when failed */
	noteid: number | null;
	/** error message - if failed */
	errormessage: string | null;
}

export type Returns = ReturnsItem[];
