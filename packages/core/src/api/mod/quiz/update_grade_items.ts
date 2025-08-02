export interface ParamsQuizgradeitemsItem {
	/** id of the quiz grade item */
	id: number | null;
	/** If passed, new name to set. Null, or not specified, to leave unchanged. */
	name: string | null;
}

export type ParamsQuizgradeitems = ParamsQuizgradeitemsItem[];

export interface Params {
	/** The quiz to update slots for. */
	quizid: number | null;
	quizgradeitems: ParamsQuizgradeitems;
}
