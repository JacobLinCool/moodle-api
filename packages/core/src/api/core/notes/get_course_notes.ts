export interface Params {
	/** course id, 0 for SITE */
	courseid: number | null;
	/** user id */
	userid?: number | null;
}

export interface ReturnsSitenotesItem {
	/** id of this note */
	id: number | null;
	/** id of the course */
	courseid: number | null;
	/** user id */
	userid: number | null;
	/** the content text formated */
	content: string | null;
	/** content format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
	/** time created (timestamp) */
	created: number | null;
	/** time of last modification (timestamp) */
	lastmodified: number | null;
	/** user id of the creator of this note */
	usermodified: number | null;
	/** state of the note (i.e. draft, public, site) */
	publishstate: string | null;
}

/**
 * site notes
 */
export type ReturnsSitenotes = ReturnsSitenotesItem[];

export interface ReturnsCoursenotesItem {
	/** id of this note */
	id: number | null;
	/** id of the course */
	courseid: number | null;
	/** user id */
	userid: number | null;
	/** the content text formated */
	content: string | null;
	/** content format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
	/** time created (timestamp) */
	created: number | null;
	/** time of last modification (timestamp) */
	lastmodified: number | null;
	/** user id of the creator of this note */
	usermodified: number | null;
	/** state of the note (i.e. draft, public, site) */
	publishstate: string | null;
}

/**
 * couse notes
 */
export type ReturnsCoursenotes = ReturnsCoursenotesItem[];

export interface ReturnsPersonalnotesItem {
	/** id of this note */
	id: number | null;
	/** id of the course */
	courseid: number | null;
	/** user id */
	userid: number | null;
	/** the content text formated */
	content: string | null;
	/** content format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
	/** time created (timestamp) */
	created: number | null;
	/** time of last modification (timestamp) */
	lastmodified: number | null;
	/** user id of the creator of this note */
	usermodified: number | null;
	/** state of the note (i.e. draft, public, site) */
	publishstate: string | null;
}

/**
 * personal notes
 */
export type ReturnsPersonalnotes = ReturnsPersonalnotesItem[];

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

/**
 * notes
 */
export interface Returns {
	/** site notes */
	sitenotes: ReturnsSitenotes;
	/** couse notes */
	coursenotes: ReturnsCoursenotes;
	/** personal notes */
	personalnotes: ReturnsPersonalnotes;
	/** Whether the user can manage notes at system level. */
	canmanagesystemnotes: boolean | null;
	/** Whether the user can manage notes at the given course. */
	canmanagecoursenotes: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
