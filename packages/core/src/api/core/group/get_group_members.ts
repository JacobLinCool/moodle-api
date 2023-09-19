export type ParamsGroupids = (number | null)[];

export interface Params {
	groupids: ParamsGroupids;
}

export type ReturnsItemUserids = (number | null)[];

export interface ReturnsItem {
	/** group record id */
	groupid: number | null;
	userids: ReturnsItemUserids;
}

export type Returns = ReturnsItem[];
