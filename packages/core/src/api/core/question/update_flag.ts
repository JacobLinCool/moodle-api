export interface Params {
	/** the question usage id. */
	qubaid: number | null;
	/** the question id */
	questionid: number | null;
	/** the question_attempt id */
	qaid: number | null;
	/** the slot number within the usage */
	slot: number | null;
	/** computed checksum with the last three arguments and the users username */
	checksum: string | null;
	/** the new state of the flag. true = flagged */
	newstate: boolean | null;
}

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
	/** status: true if success */
	status: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
