export interface ParamsMembersItem {
	/** cohort record id */
	cohortid: number | null;
	/** user id */
	userid: number | null;
}

export type ParamsMembers = ParamsMembersItem[];

export interface Params {
	members: ParamsMembers;
}
