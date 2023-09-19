export interface Params {
	/** forum instance id */
	forumid: number | null;
	/** sort by this element: numreplies, , created or timemodified */
	sortorder?: number | null;
	/** current page */
	page?: number | null;
	/** items per page */
	perpage?: number | null;
	/** group id */
	groupid?: number | null;
}

/**
 * File.
 */
export interface ReturnsDiscussionsItemMessageinlinefilesItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * post message inline files
 */
export type ReturnsDiscussionsItemMessageinlinefiles =
	ReturnsDiscussionsItemMessageinlinefilesItem[];

/**
 * File.
 */
export interface ReturnsDiscussionsItemAttachmentsItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * attachments
 */
export type ReturnsDiscussionsItemAttachments = ReturnsDiscussionsItemAttachmentsItem[];

/**
 * post
 */
export interface ReturnsDiscussionsItem {
	/** Post id */
	id: number | null;
	/** Discussion name */
	name: string | null;
	/** Group id */
	groupid: number | null;
	/** Time modified */
	timemodified: number | null;
	/** The id of the user who last modified */
	usermodified: number | null;
	/** Time discussion can start */
	timestart: number | null;
	/** Time discussion ends */
	timeend: number | null;
	/** Discussion id */
	discussion: number | null;
	/** Parent id */
	parent: number | null;
	/** User who started the discussion id */
	userid: number | null;
	/** Creation time */
	created: number | null;
	/** Time modified */
	modified: number | null;
	/** Mailed? */
	mailed: number | null;
	/** The post subject */
	subject: string | null;
	/** The post message */
	message: string | null;
	/** message format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	messageformat: number | null;
	/** Can we trust? */
	messagetrust: number | null;
	/** post message inline files */
	messageinlinefiles: ReturnsDiscussionsItemMessageinlinefiles;
	/** Has attachments? */
	attachment: string | null;
	/** attachments */
	attachments: ReturnsDiscussionsItemAttachments;
	/** The post message total score */
	totalscore: number | null;
	/** Mail now? */
	mailnow: number | null;
	/** Post author full name */
	userfullname: string | null;
	/** Post modifier full name */
	usermodifiedfullname: string | null;
	/** Post author picture. */
	userpictureurl: string | null;
	/** Post modifier picture. */
	usermodifiedpictureurl: string | null;
	/** The number of replies in the discussion */
	numreplies: number | null;
	/** The number of unread discussions. */
	numunread: number | null;
	/** Is the discussion pinned */
	pinned: boolean | null;
	/** Is the discussion locked */
	locked: boolean | null;
	/** Is the discussion starred */
	starred: boolean | null;
	/** Can the user reply to the discussion */
	canreply: boolean | null;
	/** Can the user lock the discussion */
	canlock: boolean | null;
	/** Can the user star the discussion */
	canfavourite: boolean | null;
}

export type ReturnsDiscussions = ReturnsDiscussionsItem[];

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
	discussions: ReturnsDiscussions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
