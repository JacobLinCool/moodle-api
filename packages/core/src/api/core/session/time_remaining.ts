export interface Params {}

export interface Returns {
	/** The current user id. */
	userid: number | null;
	/** The number of seconds remaining in this session. */
	timeremaining: number | null;
}
