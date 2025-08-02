export interface Params {
	/** ID of quiz to get overrides for */
	quizid: number | null;
}

export interface ReturnsOverridesItem {
	/** Override ID */
	id: number | null;
	/** Quiz ID */
	quiz: number | null;
	/** User ID */
	userid?: number | null;
	/** Group ID */
	groupid?: number | null;
	/** Override time open value */
	timeopen?: number | null;
	/** Override time close value */
	timeclose?: number | null;
	/** Override time limit value */
	timelimit?: number | null;
	/** Override attempts value */
	attempts?: number | null;
	/** Override password */
	password?: string | null;
}

export type ReturnsOverrides = ReturnsOverridesItem[];

export interface Returns {
	overrides: ReturnsOverrides;
}
