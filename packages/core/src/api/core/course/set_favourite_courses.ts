export interface ParamsCoursesItem {
	/** course ID */
	id: number | null;
	/** favourite status */
	favourite: boolean | null;
}

export type ParamsCourses = ParamsCoursesItem[];

export interface Params {
	courses: ParamsCourses;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
