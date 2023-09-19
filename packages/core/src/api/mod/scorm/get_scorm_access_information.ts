export interface Params {
	/** scorm instance id. */
	scormid: number | null;
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
	/** Whether the user has the capability mod/scorm:addinstance allowed. */
	canaddinstance: boolean | null;
	/** Whether the user has the capability mod/scorm:viewreport allowed. */
	canviewreport: boolean | null;
	/** Whether the user has the capability mod/scorm:skipview allowed. */
	canskipview: boolean | null;
	/** Whether the user has the capability mod/scorm:savetrack allowed. */
	cansavetrack: boolean | null;
	/** Whether the user has the capability mod/scorm:viewscores allowed. */
	canviewscores: boolean | null;
	/** Whether the user has the capability mod/scorm:deleteresponses allowed. */
	candeleteresponses: boolean | null;
	/** Whether the user has the capability mod/scorm:deleteownresponses allowed. */
	candeleteownresponses: boolean | null;
}
