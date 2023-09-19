export interface ParamsMembersItemCohorttype {
	/** The name of the field: id (numeric value of cohortid) or idnumber (alphanumeric value of idnumber) */
	type: string | null;
	/** The value of the cohort */
	value: string | null;
}

export interface ParamsMembersItemUsertype {
	/** The name of the field: id (numeric value of id) or username (alphanumeric value of username) */
	type: string | null;
	/** The value of the cohort */
	value: string | null;
}

export interface ParamsMembersItem {
	cohorttype: ParamsMembersItemCohorttype;
	usertype: ParamsMembersItemUsertype;
}

export type ParamsMembers = ParamsMembersItem[];

export interface Params {
	members: ParamsMembers;
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
}
