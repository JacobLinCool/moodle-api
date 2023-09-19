/**
 * Affected ids
 */
export type ParamsIds = (number | null)[];

export interface Params {
	/** action: cm_hide, cm_show, section_hide, section_show, cm_moveleft... */
	action: string | null;
	/** course id */
	courseid: number | null;
	/** Affected ids */
	ids?: ParamsIds;
	/** Optional target section id */
	targetsectionid?: number | null;
	/** Optional target cm id */
	targetcmid?: number | null;
}
