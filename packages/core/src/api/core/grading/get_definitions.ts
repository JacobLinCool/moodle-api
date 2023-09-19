/**
 * 1 or more course module ids
 */
export type ParamsCmids = (number | null)[];

export interface Params {
	/** 1 or more course module ids */
	cmids: ParamsCmids;
	/** area name */
	areaname: string | null;
	/** Only the active method */
	activeonly?: boolean | null;
}

export interface ReturnsAreasItemDefinitionsItemGuideGuideCriteriaItem {
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

export type ReturnsAreasItemDefinitionsItemGuideGuideCriteria =
	ReturnsAreasItemDefinitionsItemGuideGuideCriteriaItem[];

export interface ReturnsAreasItemDefinitionsItemGuideGuideCommentsItem {
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
export type ReturnsAreasItemDefinitionsItemGuideGuideComments =
	ReturnsAreasItemDefinitionsItemGuideGuideCommentsItem[];

/**
 * items
 */
export interface ReturnsAreasItemDefinitionsItemGuide {
	guide_criteria: ReturnsAreasItemDefinitionsItemGuideGuideCriteria;
	/** comments */
	guide_comments: ReturnsAreasItemDefinitionsItemGuideGuideComments;
}

export interface ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItemLevelsItem {
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
export type ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItemLevels =
	ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItemLevelsItem[];

export interface ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItem {
	/** criterion id */
	id: number | null;
	/** sortorder */
	sortorder: number | null;
	/** description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** levels */
	levels: ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItemLevels;
}

/**
 * definition details
 */
export type ReturnsAreasItemDefinitionsItemRubricRubricCriteria =
	ReturnsAreasItemDefinitionsItemRubricRubricCriteriaItem[];

/**
 * items
 */
export interface ReturnsAreasItemDefinitionsItemRubric {
	/** definition details */
	rubric_criteria: ReturnsAreasItemDefinitionsItemRubricRubricCriteria;
}

export interface ReturnsAreasItemDefinitionsItem {
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
	guide: ReturnsAreasItemDefinitionsItemGuide;
	/** items */
	rubric: ReturnsAreasItemDefinitionsItemRubric;
}

/**
 * definitions
 */
export type ReturnsAreasItemDefinitions = ReturnsAreasItemDefinitionsItem[];

export interface ReturnsAreasItem {
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
	definitions: ReturnsAreasItemDefinitions;
}

/**
 * list of grading areas
 */
export type ReturnsAreas = ReturnsAreasItem[];

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
	/** list of grading areas */
	areas: ReturnsAreas;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
