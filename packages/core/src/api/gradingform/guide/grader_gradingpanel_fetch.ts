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

export interface ReturnsGradeCriterionItem {
	/** The id of the criterion */
	id: number | null;
	/** The name of the criterion */
	name: string | null;
	/** The maximum score for this criterion */
	maxscore: number | null;
	/** The description of the criterion */
	description: string | null;
	/** The description of the criterion for markers */
	descriptionmarkers: string | null;
	/** The current score for user being assessed */
	score: number | null;
	/** Any remarks for this criterion for the user being assessed */
	remark: string | null;
}

/**
 * The criterion by which this item will be graded
 */
export type ReturnsGradeCriterion = ReturnsGradeCriterionItem[];

export interface ReturnsGradeCommentsItem {
	/** Comment id */
	id: number | null;
	/** The sortorder of this comment */
	sortorder: number | null;
	/** The comment value */
	description: string | null;
}

/**
 * Frequently used comments
 */
export type ReturnsGradeComments = ReturnsGradeCommentsItem[];

export interface ReturnsGrade {
	/** The id of the current grading instance */
	instanceid: number | null;
	/** The criterion by which this item will be graded */
	criterion: ReturnsGradeCriterion;
	/** Whether there are any frequently-used comments */
	hascomments: boolean | null;
	/** Frequently used comments */
	comments: ReturnsGradeComments;
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
