export interface Params {
	/** h5p activity instance id */
	h5pactivityid: number | null;
}

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
	/** list of warnings */
	warnings: ReturnsWarnings;
	/** Whether the user has the capability mod/h5pactivity:view allowed. */
	canview: boolean | null;
	/** Whether the user has the capability mod/h5pactivity:addinstance allowed. */
	canaddinstance: boolean | null;
	/** Whether the user has the capability mod/h5pactivity:submit allowed. */
	cansubmit: boolean | null;
	/** Whether the user has the capability mod/h5pactivity:reviewattempts allowed. */
	canreviewattempts: boolean | null;
}
