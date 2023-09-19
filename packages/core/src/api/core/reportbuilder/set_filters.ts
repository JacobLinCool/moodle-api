export interface Params {
	/** Report ID */
	reportid: number | null;
	/** JSON encoded report parameters */
	parameters?: string | null;
	/** JSON encoded filter values */
	values: string | null;
}
