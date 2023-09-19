export interface Params {
	/** the user id who received the message, 0 for any user */
	useridto: number | null;
	/** the user id who send the message, 0 for any user. -10 or -20 for no-reply or support user */
	useridfrom?: number | null;
	/** mark messages created before this time as read, 0 for all messages */
	timecreatedto?: number | null;
}
