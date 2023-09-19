export interface Params {
	/** instance id of self enrolment plugin. */
	instanceid: number | null;
}

export interface Returns {
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
	/** password required for enrolment */
	enrolpassword: string | null;
}
