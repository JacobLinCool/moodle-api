export interface Params {
	/** the user id who received the message, 0 for current user */
	useridto: number | null;
	/** true for ordering by newest first, false for oldest first */
	newestfirst?: boolean | null;
	/** the number of results to return */
	limit?: number | null;
	/** offset the result set by a given amount */
	offset?: number | null;
}

/**
 * message
 */
export interface ReturnsNotificationsItem {
	/** Notification id (this is not guaranteed to be unique within this result set) */
	id: number | null;
	/** User from id */
	useridfrom: number | null;
	/** User to id */
	useridto: number | null;
	/** The notification subject */
	subject: string | null;
	/** The notification subject shortened with ellipsis */
	shortenedsubject: string | null;
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
	/** Context URL */
	contexturl: string | null;
	/** Context URL link name */
	contexturlname: string | null;
	/** Time created */
	timecreated: number | null;
	/** Time created in a pretty format */
	timecreatedpretty: string | null;
	/** Time read */
	timeread: number | null;
	/** notification read status */
	read: boolean | null;
	/** notification deletion status */
	deleted: boolean | null;
	/** URL for notification icon */
	iconurl: string | null;
	/** The component that generated the notification */
	component: string | null;
	/** The type of notification */
	eventtype: string | null;
	/** Custom data to be passed to the message processor. The data here is serialised using json_encode(). */
	customdata: string | null;
}

export type ReturnsNotifications = ReturnsNotificationsItem[];

export interface Returns {
	notifications: ReturnsNotifications;
	/** the number of unread message for the given user */
	unreadcount: number | null;
}
