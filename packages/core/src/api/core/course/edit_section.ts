export interface Params {
	/** action: hide, show, stealth, setmarker, removemarker */
	action: string | null;
	/** course section id */
	id: number | null;
	/** section to return to */
	sectionreturn?: number | null;
}
