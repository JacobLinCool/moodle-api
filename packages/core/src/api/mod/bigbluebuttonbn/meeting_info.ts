export interface Params {
	/** bigbluebuttonbn instance id */
	bigbluebuttonbnid: number | null;
	/** bigbluebuttonbn group id */
	groupid?: number | null;
	/** update cache ? */
	updatecache?: boolean | null;
}

export interface ReturnsPresentationsItem {
	/** presentation URL */
	url: string | null;
	/** icon name */
	iconname: string | null;
	/** icon text */
	icondesc: string | null;
	/** presentation name */
	name: string | null;
}

export type ReturnsPresentations = ReturnsPresentationsItem[];

export interface ReturnsFeaturesItem {
	/** Feature name. */
	name: string | null;
	/** Whether the feature is enabled. */
	isenabled: boolean | null;
}

/**
 * List of features for the instance
 */
export type ReturnsFeatures = ReturnsFeaturesItem[];

export interface Returns {
	/** CM id */
	cmid: number | null;
	/** User limit */
	userlimit: number | null;
	/** bigbluebuttonbn instance id */
	bigbluebuttonbnid: string | null;
	/** bigbluebuttonbn group id */
	groupid?: number | null;
	/** Meeting id */
	meetingid: string | null;
	/** Opening time */
	openingtime: number | null;
	/** Closing time */
	closingtime: number | null;
	/** Status running */
	statusrunning: boolean | null;
	/** Status closed */
	statusclosed: boolean | null;
	/** Status open */
	statusopen: boolean | null;
	/** Status message */
	statusmessage: string | null;
	/** Started at */
	startedat: number | null;
	/** Moderator count */
	moderatorcount: number | null;
	/** Participant count */
	participantcount: number | null;
	/** Several moderators ? */
	moderatorplural: boolean | null;
	/** Several participants ? */
	participantplural: boolean | null;
	/** Can join */
	canjoin: boolean | null;
	/** Is moderator */
	ismoderator: boolean | null;
	presentations: ReturnsPresentations;
	/** Join URL */
	joinurl: string | null;
	/** Guest access enabled */
	guestaccessenabled: boolean | null;
	/** Guest URL */
	guestjoinurl: string | null;
	/** Guest join password */
	guestpassword: string | null;
	/** List of features for the instance */
	features: ReturnsFeatures;
}
