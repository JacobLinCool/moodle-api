export interface ParamsAreasItemDefinitionsItemGuideGuideCriteriaItem {
	/** criterion id */
	id: number | null;
	/** sortorder */
	sortorder: number | null;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** description */
	shortname: string | null;
	/** markers description */
	descriptionmarkers: string | null;
	/** descriptionmarkers format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionmarkersformat: number | null;
	/** maximum score */
	maxscore: number | null;
}

export type ParamsAreasItemDefinitionsItemGuideGuideCriteria =
	ParamsAreasItemDefinitionsItemGuideGuideCriteriaItem[];

export interface ParamsAreasItemDefinitionsItemGuideGuideCommentsItem {
	/** criterion id */
	id: number | null;
	/** sortorder */
	sortorder: number | null;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
}

/**
 * comments
 */
export type ParamsAreasItemDefinitionsItemGuideGuideComments =
	ParamsAreasItemDefinitionsItemGuideGuideCommentsItem[];

/**
 * items
 */
export interface ParamsAreasItemDefinitionsItemGuide {
	guide_criteria: ParamsAreasItemDefinitionsItemGuideGuideCriteria;
	/** comments */
	guide_comments: ParamsAreasItemDefinitionsItemGuideGuideComments;
}

export interface ParamsAreasItemDefinitionsItemRubricRubricCriteriaItemLevelsItem {
	/** level id */
	id: number | null;
	/** score */
	score: number | null;
	/** definition */
	definition: string | null;
	/** definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	definitionformat: number | null;
}

/**
 * levels
 */
export type ParamsAreasItemDefinitionsItemRubricRubricCriteriaItemLevels =
	ParamsAreasItemDefinitionsItemRubricRubricCriteriaItemLevelsItem[];

export interface ParamsAreasItemDefinitionsItemRubricRubricCriteriaItem {
	/** criterion id */
	id: number | null;
	/** sortorder */
	sortorder: number | null;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** levels */
	levels: ParamsAreasItemDefinitionsItemRubricRubricCriteriaItemLevels;
}

/**
 * definition details
 */
export type ParamsAreasItemDefinitionsItemRubricRubricCriteria =
	ParamsAreasItemDefinitionsItemRubricRubricCriteriaItem[];

/**
 * items
 */
export interface ParamsAreasItemDefinitionsItemRubric {
	/** definition details */
	rubric_criteria: ParamsAreasItemDefinitionsItemRubricRubricCriteria;
}

export interface ParamsAreasItemDefinitionsItem {
	/** definition id */
	id: number | null;
	/** method */
	method: string | null;
	/** name */
	name: string | null;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** status */
	status: number | null;
	/** copied from id */
	copiedfromid: number | null;
	/** creation time */
	timecreated: number | null;
	/** user who created definition */
	usercreated: number | null;
	/** last modified time */
	timemodified: number | null;
	/** user who modified definition */
	usermodified: number | null;
	/** time copied */
	timecopied: number | null;
	/** items */
	guide: ParamsAreasItemDefinitionsItemGuide;
	/** items */
	rubric: ParamsAreasItemDefinitionsItemRubric;
}

/**
 * definitions
 */
export type ParamsAreasItemDefinitions = ParamsAreasItemDefinitionsItem[];

export interface ParamsAreasItem {
	/** course module id */
	cmid: number | null;
	/** context id */
	contextid: number | null;
	/** component name */
	component: string | null;
	/** area name */
	areaname: string | null;
	/** active method */
	activemethod: string | null;
	/** definitions */
	definitions: ParamsAreasItemDefinitions;
}

/**
 * areas with definitions to save
 */
export type ParamsAreas = ParamsAreasItem[];

export interface Params {
	/** areas with definitions to save */
	areas: ParamsAreas;
}
