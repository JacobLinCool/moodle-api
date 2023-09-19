export interface Params {
	/** The name of the component */
	component: string | null;
	/** The ID of the context being graded */
	contextid: number | null;
	/** The grade item itemname being graded */
	itemname: string | null;
	/** The ID of the user show */
	gradeduserid: number | null;
}

export interface ReturnsGradeOptionsItem {
	/** The grade value */
	value: number | null;
	/** The description fo the option */
	title: string | null;
	/** Whether this item is currently selected */
	selected: boolean | null;
}

/**
 * The description of the grade option
 */
export type ReturnsGradeOptions = ReturnsGradeOptionsItem[];

export interface ReturnsGrade {
	/** The description of the grade option */
	options: ReturnsGradeOptions;
	/** Current user grade */
	usergrade: string | null;
	/** Max possible grade */
	maxgrade: string | null;
	/** The assumed grader of this grading instance */
	gradedby: string | null;
	/** The time that the grade was created */
	timecreated: number | null;
	/** The time that the grade was last updated */
	timemodified: number | null;
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
	/** The template to use when rendering this data */
	templatename: string | null;
	/** Does the user have a grade? */
	hasgrade: boolean | null;
	grade: ReturnsGrade;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
