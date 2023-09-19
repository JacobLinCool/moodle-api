export type ParamsCourseids = (number | null)[];

export interface Params {
	courseids: ParamsCourseids;
}

export interface ReturnsCoursesItemOptionsItem {
	/** Option name */
	name: string | null;
	/** Whether the option is available or not */
	available: boolean | null;
}

export type ReturnsCoursesItemOptions = ReturnsCoursesItemOptionsItem[];

export interface ReturnsCoursesItem {
	/** Course id */
	id: number | null;
	options: ReturnsCoursesItemOptions;
}

/**
 * List of courses
 */
export type ReturnsCourses = ReturnsCoursesItem[];

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
	/** List of courses */
	courses: ReturnsCourses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
