export interface Params {
	/** The policy version ID */
	versionid: number | null;
	/** The id of user on whose behalf the user is viewing the policy */
	behalfid?: number | null;
}

/**
 * Policy information
 */
export interface ReturnsResultPolicy {
	/** The policy version name */
	name: string | null;
	/** The policy version id */
	versionid: number | null;
	/** The policy version content */
	content: string | null;
}

export interface ReturnsResult {
	/** Policy information */
	policy: ReturnsResultPolicy;
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
	result: ReturnsResult;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
