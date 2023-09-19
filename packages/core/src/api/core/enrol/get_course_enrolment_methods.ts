export interface Params {
	/** Course id */
	courseid: number | null;
}

export interface ReturnsItem {
	/** id of course enrolment instance */
	id: number | null;
	/** id of course */
	courseid: number | null;
	/** type of enrolment plugin */
	type: string | null;
	/** name of enrolment plugin */
	name: string | null;
	/** status of enrolment plugin */
	status: string | null;
	/** webservice function to get more information */
	wsfunction: string | null;
}

export type Returns = ReturnsItem[];
