export interface Params {
	/** definition id */
	definitionid: number | null;
	/** submitted since */
	since?: number | null;
}

export interface ReturnsInstancesItemGuideCriteriaItem {
	/** filling id */
	id: number | null;
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
export type ReturnsInstancesItemGuideCriteria = ReturnsInstancesItemGuideCriteriaItem[];

/**
 * items
 */
export interface ReturnsInstancesItemGuide {
	/** filling */
	criteria: ReturnsInstancesItemGuideCriteria;
}

export interface ReturnsInstancesItemRubricCriteriaItem {
	/** filling id */
	id: number | null;
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
export type ReturnsInstancesItemRubricCriteria = ReturnsInstancesItemRubricCriteriaItem[];

/**
 * items
 */
export interface ReturnsInstancesItemRubric {
	/** filling */
	criteria: ReturnsInstancesItemRubricCriteria;
}

export interface ReturnsInstancesItem {
	/** instance id */
	id: number | null;
	/** rater id */
	raterid: number | null;
	/** item id */
	itemid: number | null;
	/** raw grade */
	rawgrade: string | null;
	/** status */
	status: number | null;
	/** feedback */
	feedback: string | null;
	/** feedback format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	feedbackformat: number | null;
	/** modified time */
	timemodified: number | null;
	/** items */
	guide: ReturnsInstancesItemGuide;
	/** items */
	rubric: ReturnsInstancesItemRubric;
}

/**
 * list of grading instances
 */
export type ReturnsInstances = ReturnsInstancesItem[];

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
	/** list of grading instances */
	instances: ReturnsInstances;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
