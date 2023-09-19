export interface ParamsSettings {
	/** New value of the setting */
	pushratingstouserplans: boolean | null;
}

export interface Params {
	/** Course id for the course to update */
	courseid: number | null;
	settings: ParamsSettings;
}
