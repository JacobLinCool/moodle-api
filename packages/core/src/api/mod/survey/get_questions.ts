export interface Params {
	/** survey instance id */
	surveyid: number | null;
}

/**
 * Questions
 */
export interface ReturnsQuestionsItem {
	/** Question id */
	id: number | null;
	/** Question text */
	text: string | null;
	/** Question short text */
	shorttext: string | null;
	/** Subquestions ids */
	multi: string | null;
	/** The question intro */
	intro: string | null;
	/** Question type */
	type: number | null;
	/** Question options */
	options: string | null;
	/** Parent question (for subquestions) */
	parent: number | null;
}

export type ReturnsQuestions = ReturnsQuestionsItem[];

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
	questions: ReturnsQuestions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
