export interface Params {
	/** course id */
	courseid: number | null;
	/** module name */
	modname: string | null;
	/** target section id */
	targetsectionid: number | null;
	/** Optional target cm id */
	targetcmid?: number | null;
}
