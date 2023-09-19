export interface Params {
	/** The user evidence ID. */
	userevidenceid: number | null;
	/** The competency ID. */
	competencyid: number | null;
}

export interface Returns {
	/** userevidenceid */
	userevidenceid: number;
	/** competencyid */
	competencyid: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
}
