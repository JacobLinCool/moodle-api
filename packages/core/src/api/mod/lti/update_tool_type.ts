export interface Params {
	/** Tool type id */
	id: number | null;
	/** Tool type name */
	name?: string | null;
	/** Tool type description */
	description?: string | null;
	/** Tool type state */
	state?: number | null;
}

export interface ReturnsUrls {
	/** Tool type icon URL */
	icon: string | null;
	/** Tool type edit URL */
	edit: string | null;
	/** Tool type edit URL */
	course: string | null;
	/** Public Keyset URL */
	publickeyset: string | null;
	/** Access Token URL */
	accesstoken: string | null;
	/** Authorisation Request URL */
	authrequest: string | null;
}

export interface ReturnsState {
	/** Tool type state name string */
	text: string | null;
	/** Is the state pending */
	pending: boolean | null;
	/** Is the state configured */
	configured: boolean | null;
	/** Is the state rejected */
	rejected: boolean | null;
	/** Is the state unknown */
	unknown: boolean | null;
}

/**
 * Array of capability groups
 */
export type ReturnsCapabilitygroups = (string | null)[];

/**
 * IDs for the LTI instances using this type
 */
export type ReturnsInstanceids = (number | null)[];

/**
 * Tool
 */
export interface Returns {
	/** Tool type id */
	id: number | null;
	/** Tool type name */
	name: string | null;
	/** Tool type description */
	description: string | null;
	/** Platform ID */
	platformid: string | null;
	/** Client ID */
	clientid: string | null;
	/** Deployment ID */
	deploymentid: number | null;
	urls: ReturnsUrls;
	state: ReturnsState;
	/** Indicate if capabilitygroups is populated */
	hascapabilitygroups: boolean | null;
	/** Array of capability groups */
	capabilitygroups?: ReturnsCapabilitygroups;
	/** Tool type course */
	courseid?: number | null;
	/** IDs for the LTI instances using this type */
	instanceids?: ReturnsInstanceids;
	/** The number of times this tool is being used */
	instancecount: number | null;
}
