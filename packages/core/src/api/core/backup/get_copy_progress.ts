/**
 * Copy data
 */
export interface ParamsCopiesItem {
	/** Backup id */
	backupid: string | null;
	/** Restore id */
	restoreid: string | null;
	/** Operation type */
	operation: string | null;
}

/**
 * Copy data
 */
export type ParamsCopies = ParamsCopiesItem[];

export interface Params {
	/** Copy data */
	copies: ParamsCopies;
}

/**
 * Copy completion status
 */
export interface ReturnsItem {
	/** Copy Status */
	status: number | null;
	/** Copy progress */
	progress: number | null;
	/** Copy id */
	backupid: string | null;
	/** Operation type */
	operation: string | null;
}

/**
 * Copy data
 */
export type Returns = ReturnsItem[];
