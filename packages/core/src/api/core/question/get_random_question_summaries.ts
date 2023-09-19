export type ParamsTagids = (number | null)[];

export interface Params {
	/** Category id to find random questions */
	categoryid: number | null;
	/** Include the subcategories in the search */
	includesubcategories: boolean | null;
	tagids: ParamsTagids;
	/** Context id that the questions will be rendered in (used for exporting) */
	contextid: number | null;
	/** Maximum number of results to return */
	limit?: number | null;
	/** Number of items to skip from the begging of the result set */
	offset?: number | null;
}

export interface ReturnsQuestionsItemIcon {
	/** key */
	key: string;
	/** component */
	component: string;
	/** alttext */
	alttext: string;
}

export interface ReturnsQuestionsItem {
	/** id */
	id: number;
	/** category */
	category: number;
	/** parent */
	parent: number;
	/** name */
	name: string;
	/** qtype */
	qtype: string;
	icon: ReturnsQuestionsItemIcon;
}

export type ReturnsQuestions = ReturnsQuestionsItem[];

export interface Returns {
	/** total number of questions in result set */
	totalcount: number | null;
	questions: ReturnsQuestions;
}
