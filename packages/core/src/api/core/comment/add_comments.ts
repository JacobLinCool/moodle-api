export interface ParamsCommentsItem {
	/** contextlevel system, course, user... */
	contextlevel: string | null;
	/** the id of item associated with the contextlevel */
	instanceid: number | null;
	/** component */
	component: string | null;
	/** component */
	content: string | null;
	/** associated id */
	itemid: number | null;
	/** string comment area */
	area?: string | null;
}

export type ParamsComments = ParamsCommentsItem[];

export interface Params {
	comments: ParamsComments;
}

/**
 * comment
 */
export interface ReturnsItem {
	/** Comment ID */
	id: number | null;
	/** The content text formatted */
	content: string | null;
	/** content format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
	/** Time created (timestamp) */
	timecreated: number | null;
	/** Time format */
	strftimeformat: string | null;
	/** URL profile */
	profileurl: string | null;
	/** fullname */
	fullname: string | null;
	/** Time in human format */
	time: string | null;
	/** HTML user picture */
	avatar: string | null;
	/** User ID */
	userid: number | null;
	/** Permission to delete=true/false */
	delete: boolean | null;
}

export type Returns = ReturnsItem[];
