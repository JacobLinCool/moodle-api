export interface Params {
	/** the user id who received the message, 0 for any user */
	useridto: number | null;
	/** the user id who send the message, 0 for any user. -10 or -20 for no-reply or support user */
	useridfrom?: number | null;
	/** type of message to return, expected values are: notifications, conversations and both */
	type?: string | null;
	/** 1 for getting read messages, 0 for unread, 2 for both */
	read?: number | null;
	/** true for ordering by newest first, false for oldest first */
	newestfirst?: boolean | null;
	/** limit from */
	limitfrom?: number | null;
	/** limit number */
	limitnum?: number | null;
}

/**
 * message
 */
export interface ReturnsMessagesItem {
	/** Message id */
	id: number | null;
	/** User from id */
	useridfrom: number | null;
	/** User to id */
	useridto: number | null;
	/** The message subject */
	subject: string | null;
	/** The message text formated */
	text: string | null;
	/** The message */
	fullmessage: string | null;
	/** fullmessage format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	fullmessageformat: number | null;
	/** The message in html */
	fullmessagehtml: string | null;
	/** The shorten message */
	smallmessage: string | null;
	/** Is a notification? */
	notification: number | null;
	/** Context URL */
	contexturl: string | null;
	/** Context URL link name */
	contexturlname: string | null;
	/** Time created */
	timecreated: number | null;
	/** Time read */
	timeread: number | null;
	/** User to full name */
	usertofullname: string | null;
	/** User from full name */
	userfromfullname: string | null;
	/** The component that generated the notification */
	component: string | null;
	/** The type of notification */
	eventtype: string | null;
	/** Custom data to be passed to the message processor. The data here is serialised using json_encode(). */
	customdata: string | null;
	/** URL for icon, only for notifications. */
	iconurl: string | null;
}

export type ReturnsMessages = ReturnsMessagesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item */
	item: string | null;
	/** item id */
	itemid: number | null;
	/** the warning code can be used by the client app to implement specific behaviour */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	messages: ReturnsMessages;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
