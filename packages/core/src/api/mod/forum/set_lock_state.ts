export interface Params {
	/** Forum that the discussion is in */
	forumid: number | null;
	/** The discussion to lock / unlock */
	discussionid: number | null;
	/** The timestamp for the lock state */
	targetstate: number | null;
}

export interface ReturnsTimes {
	/** The locked time of the discussion. */
	locked: number | null;
}

export interface Returns {
	/** The discussion we are locking. */
	id: number | null;
	/** The locked state of the discussion. */
	locked: boolean | null;
	times: ReturnsTimes;
}
