export interface ParamsDataOverridesItem {
	/** ID of existing override (if updating) */
	id?: number | null;
	/** ID of group */
	groupid?: number | null;
	/** ID of user */
	userid?: number | null;
	/** Quiz override opening timestamp */
	timeopen?: number | null;
	/** Quiz override closing timestamp */
	timeclose: number | null;
	/** Quiz override time limit */
	timelimit?: number | null;
	/** Quiz override attempt count */
	attempts?: number | null;
	/** Quiz override password */
	password?: string | null;
}

export type ParamsDataOverrides = ParamsDataOverridesItem[];

export interface ParamsData {
	/** ID of quiz to save overrides to */
	quizid: number | null;
	overrides: ParamsDataOverrides;
}

export interface Params {
	data: ParamsData;
}

export type ReturnsIds = (number | null)[];

export interface Returns {
	ids: ReturnsIds;
}
