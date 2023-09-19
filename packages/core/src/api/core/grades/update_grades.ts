export interface ParamsGradesItem {
	/** Student ID */
	studentid: number | null;
	/** Student grade */
	grade: number | null;
	/** A string representation of the feedback from the grader */
	str_feedback: string | null;
}

/**
 * Any student grades to alter
 */
export type ParamsGrades = ParamsGradesItem[];

/**
 * Any grade item settings to alter
 */
export interface ParamsItemdetails {
	/** The grade item name */
	itemname: string | null;
	/** Arbitrary ID provided by the module responsible for the grade item */
	idnumber: number | null;
	/** The type of grade (0 = none, 1 = value, 2 = scale, 3 = text) */
	gradetype: number | null;
	/** Maximum grade allowed */
	grademax: number | null;
	/** Minimum grade allowed */
	grademin: number | null;
	/** The ID of the custom scale being is used */
	scaleid: number | null;
	/** Multiply all grades by this number */
	multfactor: number | null;
	/** Add this to all grades */
	plusfactor: number | null;
	/** True if the grade item should be deleted */
	deleted: boolean | null;
	/** True if the grade item is hidden */
	hidden: boolean | null;
}

export interface Params {
	/** The source of the grade update */
	source: string | null;
	/** id of course */
	courseid: number | null;
	/** A component, for example mod_forum or mod_quiz */
	component: string | null;
	/** The activity ID */
	activityid: number | null;
	/** grade item ID number for modules that have multiple grades. Typically this is 0. */
	itemnumber: number | null;
	/** Any student grades to alter */
	grades?: ParamsGrades;
	/** Any grade item settings to alter */
	itemdetails?: ParamsItemdetails;
}
