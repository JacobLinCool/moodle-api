export interface Params {
	/** The id of the user who is performing the search */
	userid: number | null;
	/** The string being searched */
	search: string | null;
	/** Limit from */
	limitfrom?: number | null;
	/** Limit number */
	limitnum?: number | null;
}

export interface ReturnsContactsItemContactrequestsItem {
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
export type ReturnsContactsItemContactrequests = ReturnsContactsItemContactrequestsItem[];

/**
 * information about conversation
 */
export interface ReturnsContactsItemConversationsItem {
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
export type ReturnsContactsItemConversations = ReturnsContactsItemConversationsItem[];

export interface ReturnsContactsItem {
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
	contactrequests: ReturnsContactsItemContactrequests;
	/** Conversations between users */
	conversations: ReturnsContactsItemConversations;
}

export type ReturnsContacts = ReturnsContactsItem[];

export interface ReturnsNoncontactsItemContactrequestsItem {
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
export type ReturnsNoncontactsItemContactrequests = ReturnsNoncontactsItemContactrequestsItem[];

/**
 * information about conversation
 */
export interface ReturnsNoncontactsItemConversationsItem {
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
export type ReturnsNoncontactsItemConversations = ReturnsNoncontactsItemConversationsItem[];

export interface ReturnsNoncontactsItem {
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
	contactrequests: ReturnsNoncontactsItemContactrequests;
	/** Conversations between users */
	conversations: ReturnsNoncontactsItemConversations;
}

export type ReturnsNoncontacts = ReturnsNoncontactsItem[];

export interface Returns {
	contacts: ReturnsContacts;
	noncontacts: ReturnsNoncontacts;
}
