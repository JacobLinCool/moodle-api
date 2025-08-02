export interface Params {
	/** The context of the current page */
	pagecontextid: number | null;
	/** Category being moved */
	categoryid: number | null;
	/** The ID of the parent category to move to. */
	targetparentid: number | null;
	/** The ID of the preceding category. Null if this is being moved to top of its parent */
	precedingsiblingid: number | null;
}

export interface ReturnsItemFields {
	/** The ID of the category that was updated. */
	id: number | null;
	/** The new sortorder */
	sortorder: number | null;
	/** The ID of the new parent category. */
	parent: number | null;
	/** The ID of the new context. */
	context: number | null;
	/** Should this category have a drag handle? */
	draghandle: boolean | null;
}

/**
 * An individual state update
 */
export interface ReturnsItem {
	/** State object name (always "categories" from this function). */
	name: string | null;
	/** State update type (always "put" from this function). */
	action: string | null;
	fields: ReturnsItemFields;
}

/**
 * Category state updates
 */
export type Returns = ReturnsItem[];
