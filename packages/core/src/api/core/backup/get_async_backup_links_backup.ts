export interface Params {
	/** Backup filename */
	filename: string;
	/** Context id */
	contextid: number;
	/** Backup id */
	backupid: string;
}

/**
 * Table row data.
 */
export interface Returns {
	/** Backup file size */
	filesize: string | null;
	/** Backup file URL */
	fileurl: string | null;
	/** Backup restore URL */
	restoreurl: string | null;
}
