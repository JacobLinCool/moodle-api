export interface Params {
	/** quiz instance id */
	quizid: number | null;
}

/**
 * list of rules
 */
export type ReturnsAccessrules = (string | null)[];

/**
 * list of active rules
 */
export type ReturnsActiverulenames = (string | null)[];

/**
 * list of reasons
 */
export type ReturnsPreventaccessreasons = (string | null)[];

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
	/** Whether the user can do the quiz or not. */
	canattempt: boolean | null;
	/** Whether the user can edit the quiz settings or not. */
	canmanage: boolean | null;
	/** Whether the user can preview the quiz or not. */
	canpreview: boolean | null;
	/** Whether the users can review their previous attempts or not. */
	canreviewmyattempts: boolean | null;
	/** Whether the user can view the quiz reports or not. */
	canviewreports: boolean | null;
	/** list of rules */
	accessrules: ReturnsAccessrules;
	/** list of active rules */
	activerulenames: ReturnsActiverulenames;
	/** list of reasons */
	preventaccessreasons: ReturnsPreventaccessreasons;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
