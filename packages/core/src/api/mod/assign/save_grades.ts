/**
 * Editor structure
 */
export interface ParamsGradesItemPlugindataAssignfeedbackcommentsEditor {
	/** The text for this feedback. */
	text: string | null;
	/** The format for this feedback */
	format: number | null;
}

/**
 * plugin data
 */
export interface ParamsGradesItemPlugindata {
	/** Editor structure */
	assignfeedbackcomments_editor: ParamsGradesItemPlugindataAssignfeedbackcommentsEditor;
	/** The id of a draft area containing files for this feedback. */
	files_filemanager: number | null;
}

export interface ParamsGradesItemAdvancedgradingdataGuideCriteriaItemFillingsItem {
	/** criterion id */
	criterionid: number | null;
	/** level id */
	levelid: number | null;
	/** remark */
	remark: string | null;
	/** remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	remarkformat: number | null;
	/** maximum score */
	score: number | null;
}

/**
 * filling
 */
export type ParamsGradesItemAdvancedgradingdataGuideCriteriaItemFillings =
	ParamsGradesItemAdvancedgradingdataGuideCriteriaItemFillingsItem[];

export interface ParamsGradesItemAdvancedgradingdataGuideCriteriaItem {
	/** criterion id */
	criterionid: number | null;
	/** filling */
	fillings: ParamsGradesItemAdvancedgradingdataGuideCriteriaItemFillings;
}

export type ParamsGradesItemAdvancedgradingdataGuideCriteria =
	ParamsGradesItemAdvancedgradingdataGuideCriteriaItem[];

/**
 * items
 */
export interface ParamsGradesItemAdvancedgradingdataGuide {
	criteria: ParamsGradesItemAdvancedgradingdataGuideCriteria;
}

export interface ParamsGradesItemAdvancedgradingdataRubricCriteriaItemFillingsItem {
	/** criterion id */
	criterionid: number | null;
	/** level id */
	levelid: number | null;
	/** remark */
	remark: string | null;
	/** remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	remarkformat: number | null;
}

/**
 * filling
 */
export type ParamsGradesItemAdvancedgradingdataRubricCriteriaItemFillings =
	ParamsGradesItemAdvancedgradingdataRubricCriteriaItemFillingsItem[];

export interface ParamsGradesItemAdvancedgradingdataRubricCriteriaItem {
	/** criterion id */
	criterionid: number | null;
	/** filling */
	fillings: ParamsGradesItemAdvancedgradingdataRubricCriteriaItemFillings;
}

export type ParamsGradesItemAdvancedgradingdataRubricCriteria =
	ParamsGradesItemAdvancedgradingdataRubricCriteriaItem[];

/**
 * items
 */
export interface ParamsGradesItemAdvancedgradingdataRubric {
	criteria: ParamsGradesItemAdvancedgradingdataRubricCriteria;
}

/**
 * advanced grading data
 */
export interface ParamsGradesItemAdvancedgradingdata {
	/** items */
	guide: ParamsGradesItemAdvancedgradingdataGuide;
	/** items */
	rubric: ParamsGradesItemAdvancedgradingdataRubric;
}

export interface ParamsGradesItem {
	/** The student id to operate on */
	userid: number | null;
	/** The new grade for this user. Ignored if advanced grading used */
	grade: number | null;
	/** The attempt number (-1 means latest attempt) */
	attemptnumber: number | null;
	/** Allow another attempt if manual attempt reopen method */
	addattempt: boolean | null;
	/** The next marking workflow state */
	workflowstate: string | null;
	/** plugin data */
	plugindata?: ParamsGradesItemPlugindata;
	/** advanced grading data */
	advancedgradingdata?: ParamsGradesItemAdvancedgradingdata;
}

export type ParamsGrades = ParamsGradesItem[];

export interface Params {
	/** The assignment id to operate on */
	assignmentid: number | null;
	/** If true, this grade will be applied to all members of the group (for group assignments). */
	applytoall: boolean | null;
	grades: ParamsGrades;
}
