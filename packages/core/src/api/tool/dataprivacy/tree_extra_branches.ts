export interface Params {
	/** The context id to expand */
	contextid: number | null;
	/** The element we are interested on */
	element: string | null;
}

export type ReturnsBranchesItemBranchesItemBranches = (string | null)[];

/**
 * Node structure
 */
export interface ReturnsBranchesItemBranchesItem {
	/** The node text */
	text: string | null;
	/** The contextid this node expands */
	expandcontextid: number | null;
	/** What element is this node expanded to */
	expandelement: string | null;
	/** The node contextid */
	contextid: number | null;
	/** The node contextlevel */
	contextlevel: number | null;
	/** Is it expanded */
	expanded: number | null;
	branches: ReturnsBranchesItemBranchesItemBranches;
}

/**
 * Children node structure
 */
export type ReturnsBranchesItemBranches = ReturnsBranchesItemBranchesItem[];

/**
 * Node structure
 */
export interface ReturnsBranchesItem {
	/** The node text */
	text: string | null;
	/** The contextid this node expands */
	expandcontextid: number | null;
	/** What element is this node expanded to */
	expandelement: string | null;
	/** The node contextid */
	contextid: number | null;
	/** The node contextlevel */
	contextlevel: number | null;
	/** Is it expanded */
	expanded: number | null;
	/** Children node structure */
	branches: ReturnsBranchesItemBranches;
}

export type ReturnsBranches = ReturnsBranchesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	branches: ReturnsBranches;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
