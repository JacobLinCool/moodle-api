export interface Params {
	/** Id of the field to move */
	id: number | null;
	/** New parent category id */
	categoryid: number | null;
	/** Id of the field before which it needs to be moved */
	beforeid?: number | null;
}
