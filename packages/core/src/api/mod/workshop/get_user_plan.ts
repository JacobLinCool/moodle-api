export interface Params {
	/** Workshop instance id. */
	workshopid: number | null;
	/** User id (empty or 0 for current user). */
	userid?: number | null;
}

export interface ReturnsUserplanPhasesItemTasksItem {
	/** Task code. */
	code: string | null;
	/** Task title. */
	title: string | null;
	/** Link to task. */
	link: string | null;
	/** Task details. */
	details: string | null;
	/** Completion information (maybe empty, maybe a boolean or generic info. */
	completed: string | null;
}

export type ReturnsUserplanPhasesItemTasks = ReturnsUserplanPhasesItemTasksItem[];

export interface ReturnsUserplanPhasesItemActionsItem {
	/** Action type. */
	type: string | null;
	/** Action label. */
	label: string | null;
	/** Link to action. */
	url: string | null;
	/** Get or post. */
	method: string | null;
}

export type ReturnsUserplanPhasesItemActions = ReturnsUserplanPhasesItemActionsItem[];

export interface ReturnsUserplanPhasesItem {
	/** Phase code. */
	code: number | null;
	/** Phase title. */
	title: string | null;
	/** Whether is the active task. */
	active: boolean | null;
	tasks: ReturnsUserplanPhasesItemTasks;
	actions: ReturnsUserplanPhasesItemActions;
}

export type ReturnsUserplanPhases = ReturnsUserplanPhasesItem[];

export interface ReturnsUserplanExamplesItem {
	/** Example submission id. */
	id: number | null;
	/** Example submission title. */
	title: string | null;
	/** Example submission assessment id. */
	assessmentid: number | null;
	/** The submission grade. */
	grade: number | null;
	/** The assessment grade. */
	gradinggrade: number | null;
}

export type ReturnsUserplanExamples = ReturnsUserplanExamplesItem[];

export interface ReturnsUserplan {
	phases: ReturnsUserplanPhases;
	examples: ReturnsUserplanExamples;
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
	userplan: ReturnsUserplan;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
