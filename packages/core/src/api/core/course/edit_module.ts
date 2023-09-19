export interface Params {
	/** action: hide, show, stealth, duplicate, delete, moveleft, moveright, group... */
	action: string | null;
	/** course module id */
	id: number | null;
	/** section to return to */
	sectionreturn?: number | null;
}
