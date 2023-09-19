export interface Params {
	/** Tool proxy id */
	toolproxyid?: number | null;
	/** Orphaned tool types only */
	orphanedonly?: boolean | null;
}

export interface Returns {
	/** Total number of tool types and proxies */
	count: number | null;
}
