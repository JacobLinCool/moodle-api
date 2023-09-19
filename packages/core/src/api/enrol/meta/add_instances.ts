export interface ParamsInstancesItem {
	/** ID of the course where meta enrolment is added. */
	metacourseid: number | null;
	/** ID of the course where meta enrolment is linked to. */
	courseid: string | null;
	/** Creates group in meta course named after linked course and puts all enrolled users in this group */
	creategroup?: boolean | null;
}

/**
 * List of course meta enrolment instances to create.
 */
export type ParamsInstances = ParamsInstancesItem[];

export interface Params {
	/** List of course meta enrolment instances to create. */
	instances?: ParamsInstances;
}

export interface ReturnsItem {
	/** ID of the course where meta enrolment is added. */
	metacourseid: number | null;
	/** ID of the course where meta enrolment is linked to. */
	courseid: string | null;
	/** True on success, false if link already exists. */
	status: boolean | null;
}

/**
 * List of course meta enrolment instances that were created.
 */
export type Returns = ReturnsItem[];
