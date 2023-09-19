/**
 * Editor structure
 */
export interface ParamsPlugindataAssignfeedbackcommentsEditor {
	/** The text for this feedback. */
	text: string | null;
	/** The format for this feedback */
	format: number | null;
}

/**
 * plugin data
 */
export interface ParamsPlugindata {
	/** Editor structure */
	assignfeedbackcomments_editor: ParamsPlugindataAssignfeedbackcommentsEditor;
	/** The id of a draft area containing files for this feedback. */
	files_filemanager: number | null;
}

export interface ParamsAdvancedgradingdataGuideCriteriaItemFillingsItem {
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
export type ParamsAdvancedgradingdataGuideCriteriaItemFillings =
	ParamsAdvancedgradingdataGuideCriteriaItemFillingsItem[];

export interface ParamsAdvancedgradingdataGuideCriteriaItem {
	/** criterion id */
	criterionid: number | null;
	/** filling */
	fillings: ParamsAdvancedgradingdataGuideCriteriaItemFillings;
}

export type ParamsAdvancedgradingdataGuideCriteria = ParamsAdvancedgradingdataGuideCriteriaItem[];

/**
 * items
 */
export interface ParamsAdvancedgradingdataGuide {
	criteria: ParamsAdvancedgradingdataGuideCriteria;
}

export interface ParamsAdvancedgradingdataRubricCriteriaItemFillingsItem {
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
export type ParamsAdvancedgradingdataRubricCriteriaItemFillings =
	ParamsAdvancedgradingdataRubricCriteriaItemFillingsItem[];

export interface ParamsAdvancedgradingdataRubricCriteriaItem {
	/** criterion id */
	criterionid: number | null;
	/** filling */
	fillings: ParamsAdvancedgradingdataRubricCriteriaItemFillings;
}

export type ParamsAdvancedgradingdataRubricCriteria = ParamsAdvancedgradingdataRubricCriteriaItem[];

/**
 * items
 */
export interface ParamsAdvancedgradingdataRubric {
	criteria: ParamsAdvancedgradingdataRubricCriteria;
}

/**
 * advanced grading data
 */
export interface ParamsAdvancedgradingdata {
	/** items */
	guide: ParamsAdvancedgradingdataGuide;
	/** items */
	rubric: ParamsAdvancedgradingdataRubric;
}

export interface Params {
	/** The assignment id to operate on */
	assignmentid: number | null;
	/** The student id to operate on */
	userid: number | null;
	/** The new grade for this user. Ignored if advanced grading used */
	grade: number | null;
	/** The attempt number (-1 means latest attempt) */
	attemptnumber: number | null;
	/** Allow another attempt if the attempt reopen method is manual */
	addattempt: boolean | null;
	/** The next marking workflow state */
	workflowstate: string | null;
	/** If true, this grade will be applied to all members of the group (for group assignments). */
	applytoall: boolean | null;
	/** plugin data */
	plugindata?: ParamsPlugindata;
	/** advanced grading data */
	advancedgradingdata?: ParamsAdvancedgradingdata;
}
