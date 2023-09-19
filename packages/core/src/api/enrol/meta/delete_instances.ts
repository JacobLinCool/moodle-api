export interface ParamsInstancesItem {
	/** ID of the course with meta enrolment. */
	metacourseid: number | null;
	/** ID of the course where meta enrolment is linked to. */
	courseid: string | null;
}

/**
 * List of course meta enrolment instances to delete.
 */
export type ParamsInstances = ParamsInstancesItem[];

export interface Params {
	/** List of course meta enrolment instances to delete. */
	instances?: ParamsInstances;
}

export interface ReturnsItem {
	/** ID of the course where meta enrolment is deleted. */
	metacourseid: number | null;
	/** ID of the course that was meta linked. */
	courseid: string | null;
	/** True on success, false if meta link did not exist. */
	status: boolean | null;
}

/**
 * List of course meta enrolment instances that were deleted.
 */
export type Returns = ReturnsItem[];
