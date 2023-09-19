export interface ParamsEnrolmentsItem {
	/** The user that is going to be unenrolled */
	userid: number | null;
	/** The course to unenrol the user from */
	courseid: number | null;
	/** The user role */
	roleid: number | null;
}

export type ParamsEnrolments = ParamsEnrolmentsItem[];

export interface Params {
	enrolments: ParamsEnrolments;
}
