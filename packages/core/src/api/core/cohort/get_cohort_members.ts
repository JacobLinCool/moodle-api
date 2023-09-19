export type ParamsCohortids = (number | null)[];

export interface Params {
	cohortids: ParamsCohortids;
}

export type ReturnsItemUserids = (number | null)[];

export interface ReturnsItem {
	/** cohort record id */
	cohortid: number | null;
	userids: ReturnsItemUserids;
}

export type Returns = ReturnsItem[];
