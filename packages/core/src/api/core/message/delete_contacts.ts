/**
 * List of user IDs
 */
export type ParamsUserids = (number | null)[];

export interface Params {
	/** List of user IDs */
	userids: ParamsUserids;
	/** The id of the user we are deleting the contacts for, 0 for the current user */
	userid?: number | null;
}
