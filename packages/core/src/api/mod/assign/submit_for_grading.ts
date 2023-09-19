export interface Params {
	/** The assignment id to operate on */
	assignmentid: number | null;
	/** Accept the assignment submission statement */
	acceptsubmissionstatement: boolean | null;
}

/**
 * warning
 */
export interface ReturnsItem {
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
export type Returns = ReturnsItem[];
