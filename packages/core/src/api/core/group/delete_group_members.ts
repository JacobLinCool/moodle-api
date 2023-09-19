export interface ParamsMembersItem {
	/** group record id */
	groupid: number | null;
	/** user id */
	userid: number | null;
}

export type ParamsMembers = ParamsMembersItem[];

export interface Params {
	members: ParamsMembers;
}
