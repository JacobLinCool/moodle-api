export interface Params {
	/** The id of the user who we are viewing conversations for */
	userid: number | null;
	/** The offset to start at */
	limitfrom?: number | null;
	/** Limit number of conversations to this */
	limitnum?: number | null;
	/** Filter by type */
	type?: number | null;
	/** Whether to restrict the results to contain NO favourite conversations (false), ONLY favourite conversation (true), or ignore any restriction altogether (null) */
	favourites?: boolean | null;
	/** Whether to include self-conversations (true) or ONLY private conversations (false) when private conversations are requested. */
	mergeself?: boolean | null;
}

export interface ReturnsConversationsItemMembersItemContactrequestsItem {
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
export type ReturnsConversationsItemMembersItemContactrequests =
	ReturnsConversationsItemMembersItemContactrequestsItem[];

/**
 * information about conversation
 */
export interface ReturnsConversationsItemMembersItemConversationsItem {
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
export type ReturnsConversationsItemMembersItemConversations =
	ReturnsConversationsItemMembersItemConversationsItem[];

export interface ReturnsConversationsItemMembersItem {
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
	contactrequests: ReturnsConversationsItemMembersItemContactrequests;
	/** Conversations between users */
	conversations: ReturnsConversationsItemMembersItemConversations;
}

export type ReturnsConversationsItemMembers = ReturnsConversationsItemMembersItem[];

export interface ReturnsConversationsItemMessagesItem {
	/** The id of the message */
	id: number | null;
	/** The id of the user who sent the message */
	useridfrom: number | null;
	/** The text of the message */
	text: string | null;
	/** The timecreated timestamp for the message */
	timecreated: number | null;
}

export type ReturnsConversationsItemMessages = ReturnsConversationsItemMessagesItem[];

export interface ReturnsConversationsItem {
	/** The conversation id */
	id: number | null;
	/** The conversation name, if set */
	name?: string | null;
	/** A subtitle for the conversation name, if set */
	subname?: string | null;
	/** A link to the conversation picture, if set */
	imageurl?: string | null;
	/** The type of the conversation (1=individual,2=group,3=self) */
	type: number | null;
	/** Total number of conversation members */
	membercount: number | null;
	/** If the user muted this conversation */
	ismuted: boolean | null;
	/** If the user marked this conversation as a favourite */
	isfavourite: boolean | null;
	/** If the user has read all messages in the conversation */
	isread: boolean | null;
	/** The number of unread messages in this conversation */
	unreadcount?: number | null;
	members: ReturnsConversationsItemMembers;
	messages: ReturnsConversationsItemMessages;
	/** If the user can delete messages in the conversation for all users */
	candeletemessagesforallusers?: boolean | null;
}

export type ReturnsConversations = ReturnsConversationsItem[];

export interface Returns {
	conversations: ReturnsConversations;
}
