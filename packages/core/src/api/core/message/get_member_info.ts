export type ParamsUserids = (number | null)[];

export interface Params {
	/** id of the user */
	referenceuserid: number | null;
	userids: ParamsUserids;
	/** include contact requests in response */
	includecontactrequests?: boolean | null;
	/** include privacy info in response */
	includeprivacyinfo?: boolean | null;
}

export interface ReturnsItemContactrequestsItem {
	/** The id of the contact request */
	id: number | null;
	/** The id of the user who created the contact request */
	userid: number | null;
	/** The id of the user confirming the request */
	requesteduserid: number | null;
	/** The timecreated timestamp for the contact request */
	timecreated: number | null;
}

/**
 * The contact requests
 */
export type ReturnsItemContactrequests = ReturnsItemContactrequestsItem[];

/**
 * information about conversation
 */
export interface ReturnsItemConversationsItem {
	/** Conversations id */
	id: number | null;
	/** Conversation type: private or public */
	type: number | null;
	/** Multilang compatible conversation name2 */
	name: string | null;
	/** The timecreated timestamp for the conversation */
	timecreated: number | null;
}

/**
 * Conversations between users
 */
export type ReturnsItemConversations = ReturnsItemConversationsItem[];

export interface ReturnsItem {
	/** The user id */
	id: number | null;
	/** The user's name */
	fullname: string | null;
	/** The link to the user's profile page */
	profileurl: string | null;
	/** User picture URL */
	profileimageurl: string | null;
	/** Small user picture URL */
	profileimageurlsmall: string | null;
	/** The user's online status */
	isonline: boolean | null;
	/** Show the user's online status? */
	showonlinestatus: boolean | null;
	/** If the user has been blocked */
	isblocked: boolean | null;
	/** Is the user a contact? */
	iscontact: boolean | null;
	/** Is the user deleted? */
	isdeleted: boolean | null;
	/** If the user can still message even if they get blocked */
	canmessageevenifblocked: boolean | null;
	/** If the user can be messaged */
	canmessage: boolean | null;
	/** If the user requires to be contacts */
	requirescontact: boolean | null;
	/** The contact requests */
	contactrequests: ReturnsItemContactrequests;
	/** Conversations between users */
	conversations: ReturnsItemConversations;
}

export type Returns = ReturnsItem[];
