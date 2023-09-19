export interface Params {
	/** context id */
	contextid?: number | null;
	/** component */
	component: string | null;
	/** file area */
	filearea: string | null;
	/** associated id */
	itemid: number | null;
	/** file path */
	filepath: string | null;
	/** file name */
	filename: string | null;
	/** file content */
	filecontent: string | null;
	/** The context level to put the file in, (block, course, coursecat, system, user, module) */
	contextlevel?: string | null;
	/** The Instance id of item associated with the context level */
	instanceid?: number | null;
}

export interface Returns {
	contextid: number | null;
	component: string | null;
	filearea: string | null;
	itemid: number | null;
	filepath: string | null;
	filename: string | null;
	url: string | null;
}
