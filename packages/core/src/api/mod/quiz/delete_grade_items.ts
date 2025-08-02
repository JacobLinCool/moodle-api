export interface ParamsQuizgradeitemsItem {
	/** id of the quiz grade item */
	id: number | null;
}

export type ParamsQuizgradeitems = ParamsQuizgradeitemsItem[];

export interface Params {
	/** The quiz to update slots for. */
	quizid: number | null;
	quizgradeitems: ParamsQuizgradeitems;
}
