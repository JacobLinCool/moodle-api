export interface Params {
	/** id of the user, 0 for current user */
	userid?: number | null;
}

export interface ReturnsTypes {
	/** Total number of individual conversations */
	1: number | null;
	/** Total number of group conversations */
	2: number | null;
	/** Total number of self conversations */
	3: number | null;
}

export interface Returns {
	/** Total number of favourite conversations */
	favourites: number | null;
	types: ReturnsTypes;
}
