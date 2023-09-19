export interface ParamsCohortsItemCategorytype {
	/** the name of the field: id (numeric value of course category id) or idnumber (alphanumeric value of idnumber course category) or system (value ignored) */
	type: string | null;
	/** the value of the categorytype */
	value: string | null;
}

export interface ParamsCohortsItemCustomfieldsItem {
	/** The shortname of the custom field */
	shortname: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * Custom fields for the cohort
 */
export type ParamsCohortsItemCustomfields = ParamsCohortsItemCustomfieldsItem[];

export interface ParamsCohortsItem {
	/** ID of the cohort */
	id: number | null;
	categorytype: ParamsCohortsItemCategorytype;
	/** cohort name */
	name: string | null;
	/** cohort idnumber */
	idnumber: string | null;
	/** cohort description */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** cohort visible */
	visible: boolean | null;
	/** the cohort theme. The allowcohortthemes setting must be enabled on Moodle */
	theme: string | null;
	/** Custom fields for the cohort */
	customfields: ParamsCohortsItemCustomfields;
}

export type ParamsCohorts = ParamsCohortsItem[];

export interface Params {
	cohorts: ParamsCohorts;
}
