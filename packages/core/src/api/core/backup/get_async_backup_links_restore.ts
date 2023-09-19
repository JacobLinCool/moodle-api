export interface Params {
	/** Backup id */
	backupid: string;
	/** Context id */
	contextid: number;
}

/**
 * Table row data.
 */
export interface Returns {
	/** Restore url */
	restoreurl: string | null;
}
