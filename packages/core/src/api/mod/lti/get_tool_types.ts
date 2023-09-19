export interface Params {
	/** Tool proxy id */
	toolproxyid?: number | null;
}

export interface ReturnsItemUrls {
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

export interface ReturnsItemState {
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
export type ReturnsItemCapabilitygroups = (string | null)[];

/**
 * IDs for the LTI instances using this type
 */
export type ReturnsItemInstanceids = (number | null)[];

/**
 * Tool
 */
export interface ReturnsItem {
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
	urls: ReturnsItemUrls;
	state: ReturnsItemState;
	/** Indicate if capabilitygroups is populated */
	hascapabilitygroups: boolean | null;
	/** Array of capability groups */
	capabilitygroups?: ReturnsItemCapabilitygroups;
	/** Tool type course */
	courseid?: number | null;
	/** IDs for the LTI instances using this type */
	instanceids?: ReturnsItemInstanceids;
	/** The number of times this tool is being used */
	instancecount: number | null;
}

export type Returns = ReturnsItem[];
