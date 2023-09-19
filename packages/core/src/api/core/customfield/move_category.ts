export interface Params {
	/** Category ID to move */
	id: number | null;
	/** Id of the category before which it needs to be moved */
	beforeid?: number | null;
}
