export interface ParamsSlotsItem {
	/** id of the slot */
	id: number | null;
	/** If passed, new customised question number. Empty string to clear customisation. Null, or not specified, to leave unchanged. */
	displaynumber: string | null;
	/** Whether to make this slot dependent on the previous one. Null, or not specified, to leave unchanged. */
	requireprevious: boolean | null;
	/** Mark that this questions is out of. Null, or not specified, to leave unchanged. */
	maxmark: number | null;
	/** For quizzes with multiple grades, which grade this slot contributes to (quiz_grade_id). 0 to set to nothing. Null, or not specified, to leave unchanged. */
	quizgradeitemid: number | null;
}

export type ParamsSlots = ParamsSlotsItem[];

export interface Params {
	/** The quiz to update slots for. */
	quizid: number | null;
	slots: ParamsSlots;
}
