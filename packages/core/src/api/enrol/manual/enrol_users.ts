export interface ParamsEnrolmentsItem {
	/** Role to assign to the user */
	roleid: number | null;
	/** The user that is going to be enrolled */
	userid: number | null;
	/** The course to enrol the user role in */
	courseid: number | null;
	/** Timestamp when the enrolment start */
	timestart: number | null;
	/** Timestamp when the enrolment end */
	timeend: number | null;
	/** set to 1 to suspend the enrolment */
	suspend: number | null;
}

export type ParamsEnrolments = ParamsEnrolmentsItem[];

export interface Params {
	enrolments: ParamsEnrolments;
}
