export interface ParamsQuizgradeitemsItem {
	/** The name for the grade item to create. If empty string, a sensible default is used. */
	name: string | null;
}

export type ParamsQuizgradeitems = ParamsQuizgradeitemsItem[];

export interface Params {
	/** The quiz to update slots for. */
	quizid: number | null;
	quizgradeitems: ParamsQuizgradeitems;
}
