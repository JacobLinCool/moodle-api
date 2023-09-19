export interface ParamsOptionsItem {
	/** The allowed keys (value format) are: discussionsubscribe (bool); subscribe to the discussion?, default to true private (bool); make this reply private to the author of the parent post, default to false. inlineattachmentsid              (int); the draft file area id for inline attachments attachmentsid       (int); the draft file area id for attachments topreferredformat (bool); convert the message & messageformat to FORMAT_HTML, defaults to false  */
	name: string | null;
	/** the value of the option, this param is validated in the external function. */
	value: string | null;
}

/**
 * Options
 */
export type ParamsOptions = ParamsOptionsItem[];

export interface Params {
	/** the post id we are going to reply to (can be the initial discussion post */
	postid: number | null;
	/** new post subject */
	subject: string | null;
	/** new post message (html assumed if messageformat is not provided) */
	message: string | null;
	/** Options */
	options?: ParamsOptions;
	/** message format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	messageformat?: number | null;
}

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

export interface ReturnsPostAuthorGroupsItemUrls {
	/** image */
	image: string | null;
}

export interface ReturnsPostAuthorGroupsItem {
	/** id */
	id: number;
	/** name */
	name: string;
	urls: ReturnsPostAuthorGroupsItemUrls;
}

/**
 * groups
 */
export type ReturnsPostAuthorGroups = ReturnsPostAuthorGroupsItem[];

export interface ReturnsPostAuthorUrls {
	/** The URL for the use profile page */
	profile: string | null;
	/** The URL for the use profile image */
	profileimage: string | null;
}

export interface ReturnsPostAuthor {
	/** id */
	id: number | null;
	/** fullname */
	fullname: string | null;
	/** isdeleted */
	isdeleted: boolean | null;
	/** groups */
	groups: ReturnsPostAuthorGroups;
	urls: ReturnsPostAuthorUrls;
}

export interface ReturnsPostCapabilities {
	/** Whether the user can view the post */
	view: boolean | null;
	/** Whether the user can edit the post */
	edit: boolean | null;
	/** Whether the user can delete the post */
	delete: boolean | null;
	/** Whether the user can split the post */
	split: boolean | null;
	/** Whether the user can reply to the post */
	reply: boolean | null;
	/** Whether the user can self enrol into the course */
	selfenrol: boolean | null;
	/** Whether the user can export the post */
	export: boolean | null;
	/** Whether the user can control the read status of the post */
	controlreadstatus: boolean | null;
	/** Whether the user can post a private reply */
	canreplyprivately: boolean | null;
}

export interface ReturnsPostUrls {
	/** The URL used to view the post */
	view: string | null;
	/** The URL used to view the post in isolation */
	viewisolated: string | null;
	/** The URL used to view the parent of the post */
	viewparent: string | null;
	/** The URL used to edit the post */
	edit: string | null;
	/** The URL used to delete the post */
	delete: string | null;
	/** The URL used to split the discussion with the selected post being the first post in the new discussion */
	split: string | null;
	/** The URL used to reply to the post */
	reply: string | null;
	/** The URL used to export the post */
	export: string | null;
	/** The URL used to mark the post as read */
	markasread: string | null;
	/** The URL used to mark the post as unread */
	markasunread: string | null;
	/** discuss */
	discuss: string | null;
}

export interface ReturnsPostAttachmentsItemUrls {
	/** The URL used to export the attachment */
	export: string | null;
}

export interface ReturnsPostAttachmentsItemHtml {
	/** The HTML source for the Plagiarism Response */
	plagiarism: string | null;
}

export interface ReturnsPostAttachmentsItem {
	/** contextid */
	contextid: number;
	/** component */
	component: string;
	/** filearea */
	filearea: string;
	/** itemid */
	itemid: number;
	/** filepath */
	filepath: string;
	/** filename */
	filename: string;
	/** isdir */
	isdir: boolean;
	/** isimage */
	isimage: boolean;
	/** timemodified */
	timemodified: number;
	/** timecreated */
	timecreated: number;
	/** filesize */
	filesize: number;
	/** author */
	author: string;
	/** license */
	license: string;
	/** filenameshort */
	filenameshort: string;
	/** filesizeformatted */
	filesizeformatted: string;
	/** icon */
	icon: string;
	/** timecreatedformatted */
	timecreatedformatted: string;
	/** timemodifiedformatted */
	timemodifiedformatted: string;
	/** url */
	url: string;
	urls: ReturnsPostAttachmentsItemUrls;
	html: ReturnsPostAttachmentsItemHtml;
}

/**
 * attachments
 */
export type ReturnsPostAttachments = ReturnsPostAttachmentsItem[];

export interface ReturnsPostMessageinlinefilesItem {
	/** contextid */
	contextid: number;
	/** component */
	component: string;
	/** filearea */
	filearea: string;
	/** itemid */
	itemid: number;
	/** filepath */
	filepath: string;
	/** filename */
	filename: string;
	/** isdir */
	isdir: boolean;
	/** isimage */
	isimage: boolean;
	/** timemodified */
	timemodified: number;
	/** timecreated */
	timecreated: number;
	/** filesize */
	filesize: number;
	/** author */
	author: string;
	/** license */
	license: string;
	/** filenameshort */
	filenameshort: string;
	/** filesizeformatted */
	filesizeformatted: string;
	/** icon */
	icon: string;
	/** timecreatedformatted */
	timecreatedformatted: string;
	/** timemodifiedformatted */
	timemodifiedformatted: string;
	/** url */
	url: string;
}

/**
 * messageinlinefiles
 */
export type ReturnsPostMessageinlinefiles = ReturnsPostMessageinlinefilesItem[];

export interface ReturnsPostTagsItemUrls {
	/** The URL to view the tag */
	view: string;
}

export interface ReturnsPostTagsItem {
	/** The ID of the Tag */
	id: number;
	/** The tagid */
	tagid: number;
	/** Whether this is a standard tag */
	isstandard: boolean;
	/** The display name of the tag */
	displayname: string;
	/** Wehther this tag is flagged */
	flag: boolean;
	urls: ReturnsPostTagsItemUrls;
}

/**
 * tags
 */
export type ReturnsPostTags = ReturnsPostTagsItem[];

export interface ReturnsPostHtml {
	/** The HTML source to rate the post */
	rating: string | null;
	/** The HTML source to view the list of tags */
	taglist: string | null;
	/** The HTML source to view the author details */
	authorsubheading: string | null;
}

export interface ReturnsPost {
	/** id */
	id: number;
	/** subject */
	subject: string;
	/** replysubject */
	replysubject: string;
	/** message */
	message: string;
	/** message format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	messageformat: number | null;
	author: ReturnsPostAuthor;
	/** discussionid */
	discussionid: number;
	/** hasparent */
	hasparent: boolean;
	/** parentid */
	parentid: number | null;
	/** timecreated */
	timecreated: number | null;
	/** timemodified */
	timemodified: number | null;
	/** unread */
	unread: boolean | null;
	/** isdeleted */
	isdeleted: boolean;
	/** isprivatereply */
	isprivatereply: boolean;
	/** haswordcount */
	haswordcount: boolean;
	/** wordcount */
	wordcount: number | null;
	/** charcount */
	charcount: number | null;
	capabilities: ReturnsPostCapabilities;
	urls: ReturnsPostUrls;
	/** attachments */
	attachments: ReturnsPostAttachments;
	/** messageinlinefiles */
	messageinlinefiles: ReturnsPostMessageinlinefiles;
	/** tags */
	tags: ReturnsPostTags;
	html: ReturnsPostHtml;
}

/**
 * Messages
 */
export interface ReturnsMessagesItem {
	/** The classification to be used in the client side */
	type: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsMessages = ReturnsMessagesItem[];

export interface Returns {
	/** new post id */
	postid: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
	post: ReturnsPost;
	/** list of warnings */
	messages: ReturnsMessages;
}
