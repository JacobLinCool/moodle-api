export interface Params {
	/** ID of the course */
	courseid: number | null;
	/** ID of the section */
	sectionid: number | null;
}

export interface Returns {
	/** Is a footer being return by this request? */
	footer: boolean | null;
	/** The path to the plugin JS file */
	customfooterjs: string | null;
	/** The prerendered footer */
	customfootertemplate: string | null;
	/** Either "" or the prerendered carousel page */
	customcarouseltemplate: string | null;
}
