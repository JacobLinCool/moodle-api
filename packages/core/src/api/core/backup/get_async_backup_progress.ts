/**
 * Backup id to get progress for
 */
export type ParamsBackupids = (string | null)[];

export interface Params {
	/** Backup id to get progress for */
	backupids: ParamsBackupids;
	/** Context id */
	contextid: number;
}

/**
 * Backup completion status
 */
export interface ReturnsItem {
	/** Backup Status */
	status: number | null;
	/** Backup progress */
	progress: number | null;
	/** Backup id */
	backupid: string | null;
	/** operation type */
	operation: string | null;
}

/**
 * Backup data
 */
export type Returns = ReturnsItem[];
