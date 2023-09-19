export interface Params {
	/** The module name */
	module: string | null;
	/** The module instance id */
	instance: number | null;
}

export interface ReturnsCmAdvancedgradingItem {
	/** Gradable area name */
	area: string | null;
	/** Grading method */
	method: string | null;
}

/**
 * Advanced grading settings
 */
export type ReturnsCmAdvancedgrading = ReturnsCmAdvancedgradingItem[];

export interface ReturnsCmOutcomesItem {
	/** Outcome id */
	id: string | null;
	/** Outcome full name */
	name: string | null;
	/** Scale items */
	scale: string | null;
}

/**
 * Outcomes information
 */
export type ReturnsCmOutcomes = ReturnsCmOutcomesItem[];

export interface ReturnsCm {
	/** The course module id */
	id: number | null;
	/** The course id */
	course: number | null;
	/** The module type id */
	module: number | null;
	/** The activity name */
	name: string | null;
	/** The module component name (forum, assign, etc..) */
	modname: string | null;
	/** The activity instance id */
	instance: number | null;
	/** The module section id */
	section: number | null;
	/** The module section number */
	sectionnum: number | null;
	/** Group mode */
	groupmode: number | null;
	/** Grouping id */
	groupingid: number | null;
	/** If completion is enabled */
	completion: number | null;
	/** Module id number */
	idnumber: string | null;
	/** Time added */
	added: number | null;
	/** Score */
	score: number | null;
	/** Indentation */
	indent: number | null;
	/** If visible */
	visible: number | null;
	/** If visible on course page */
	visibleoncoursepage: number | null;
	/** Visible old */
	visibleold: number | null;
	/** Completion grade item */
	completiongradeitemnumber: number | null;
	/** Completion pass grade setting */
	completionpassgrade: number | null;
	/** Completion view setting */
	completionview: number | null;
	/** Completion time expected */
	completionexpected: number | null;
	/** If the description is showed */
	showdescription: number | null;
	/** The download content value */
	downloadcontent: number | null;
	/** Availability settings */
	availability: string | null;
	/** Grade (max value or scale id) */
	grade: number | null;
	/** Scale items (if used) */
	scale: string | null;
	/** Grade to pass (float) */
	gradepass: string | null;
	/** Grade category */
	gradecat: number | null;
	/** Advanced grading settings */
	advancedgrading: ReturnsCmAdvancedgrading;
	/** Outcomes information */
	outcomes: ReturnsCmOutcomes;
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
	cm: ReturnsCm;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
