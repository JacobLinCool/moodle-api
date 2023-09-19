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

export interface ReturnsContactsItem {
	/** The user's id */
	userid: number | null;
	/** The user's name */
	fullname: string | null;
	/** User picture URL */
	profileimageurl: string | null;
	/** Small user picture URL */
	profileimageurlsmall: string | null;
	/** If we are messaging the user */
	ismessaging: boolean | null;
	/** Was the last message sent from the current user? */
	sentfromcurrentuser: boolean | null;
	/** The user's last message */
	lastmessage: string | null;
	/** Timestamp for last message */
	lastmessagedate?: number | null;
	/** The unique search message id */
	messageid?: number | null;
	/** Show the user's online status? */
	showonlinestatus: boolean | null;
	/** The user's online status */
	isonline: boolean | null;
	/** If the user has read the message */
	isread: boolean | null;
	/** If the user has been blocked */
	isblocked: boolean | null;
	/** The number of unread messages in this conversation */
	unreadcount?: number | null;
	/** The id of the conversation */
	conversationid?: number | null;
}

export type ReturnsContacts = ReturnsContactsItem[];

export interface Returns {
	contacts: ReturnsContacts;
}
