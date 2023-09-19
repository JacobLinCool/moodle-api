export interface Params {
	/** Tool proxy id */
	toolproxyid?: number | null;
	/** Orphaned tool types only */
	orphanedonly?: boolean | null;
	/** How many tool types displayed per page */
	limit?: number;
	/** Current offset of tool elements */
	offset?: number;
}

export interface ReturnsTypesItemUrls {
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

export interface ReturnsTypesItemState {
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
export type ReturnsTypesItemCapabilitygroups = (string | null)[];

/**
 * IDs for the LTI instances using this type
 */
export type ReturnsTypesItemInstanceids = (number | null)[];

/**
 * Tool
 */
export interface ReturnsTypesItem {
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
	urls: ReturnsTypesItemUrls;
	state: ReturnsTypesItemState;
	/** Indicate if capabilitygroups is populated */
	hascapabilitygroups: boolean | null;
	/** Array of capability groups */
	capabilitygroups?: ReturnsTypesItemCapabilitygroups;
	/** Tool type course */
	courseid?: number | null;
	/** IDs for the LTI instances using this type */
	instanceids?: ReturnsTypesItemInstanceids;
	/** The number of times this tool is being used */
	instancecount: number | null;
}

export type ReturnsTypes = ReturnsTypesItem[];

export interface ReturnsProxiesItem {
	/** Tool proxy id */
	id: number | null;
	/** Tool proxy name */
	name: string | null;
	/** Tool proxy registration URL */
	regurl: string | null;
	/** Tool proxy state */
	state: number | null;
	/** Tool proxy globally unique identifier */
	guid: string | null;
	/** Tool proxy shared secret */
	secret: string | null;
	/** Tool proxy consumer code */
	vendorcode: string | null;
	/** Tool proxy capabilities offered */
	capabilityoffered: string | null;
	/** Tool proxy services offered */
	serviceoffered: string | null;
	/** Tool proxy */
	toolproxy: string | null;
	/** Tool proxy time created */
	timecreated: number | null;
	/** Tool proxy modified */
	timemodified: number | null;
}

export type ReturnsProxies = ReturnsProxiesItem[];

export interface Returns {
	types: ReturnsTypes;
	proxies: ReturnsProxies;
	/** Limit of how many tool types to show */
	limit: number | null;
	/** Offset of tool types */
	offset: number | null;
}
