export interface Params {
	/** course module id */
	cmid: number | null;
	/** bigbluebuttonbn group id */
	groupid?: number | null;
}

export interface Returns {
	/** Can join session */
	can_join: boolean | null;
	/** course module id */
	cmid: number | null;
}
