export interface Params {
	/** The ID of the user of whom to fetch posts. */
	userid: number | null;
	/** The ID of the module of which to fetch items. */
	cmid: number | null;
	/** Sort by this element: id, created or modified */
	sortby?: string | null;
	/** Sort direction: ASC or DESC */
	sortdirection?: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemAuthorGroupsItemUrls {
	/** image */
	image: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemAuthorGroupsItem {
	/** id */
	id: number;
	/** name */
	name: string;
	urls: ReturnsDiscussionsItemPostsUserpostsItemAuthorGroupsItemUrls;
}

/**
 * groups
 */
export type ReturnsDiscussionsItemPostsUserpostsItemAuthorGroups =
	ReturnsDiscussionsItemPostsUserpostsItemAuthorGroupsItem[];

export interface ReturnsDiscussionsItemPostsUserpostsItemAuthorUrls {
	/** The URL for the use profile page */
	profile: string | null;
	/** The URL for the use profile image */
	profileimage: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemAuthor {
	/** id */
	id: number | null;
	/** fullname */
	fullname: string | null;
	/** isdeleted */
	isdeleted: boolean | null;
	/** groups */
	groups: ReturnsDiscussionsItemPostsUserpostsItemAuthorGroups;
	urls: ReturnsDiscussionsItemPostsUserpostsItemAuthorUrls;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemCapabilities {
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

export interface ReturnsDiscussionsItemPostsUserpostsItemUrls {
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

export interface ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItemUrls {
	/** The URL used to export the attachment */
	export: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItemHtml {
	/** The HTML source for the Plagiarism Response */
	plagiarism: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItem {
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
	urls: ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItemUrls;
	html: ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItemHtml;
}

/**
 * attachments
 */
export type ReturnsDiscussionsItemPostsUserpostsItemAttachments =
	ReturnsDiscussionsItemPostsUserpostsItemAttachmentsItem[];

export interface ReturnsDiscussionsItemPostsUserpostsItemMessageinlinefilesItem {
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
export type ReturnsDiscussionsItemPostsUserpostsItemMessageinlinefiles =
	ReturnsDiscussionsItemPostsUserpostsItemMessageinlinefilesItem[];

export interface ReturnsDiscussionsItemPostsUserpostsItemTagsItemUrls {
	/** The URL to view the tag */
	view: string;
}

export interface ReturnsDiscussionsItemPostsUserpostsItemTagsItem {
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
	urls: ReturnsDiscussionsItemPostsUserpostsItemTagsItemUrls;
}

/**
 * tags
 */
export type ReturnsDiscussionsItemPostsUserpostsItemTags =
	ReturnsDiscussionsItemPostsUserpostsItemTagsItem[];

export interface ReturnsDiscussionsItemPostsUserpostsItemHtml {
	/** The HTML source to rate the post */
	rating: string | null;
	/** The HTML source to view the list of tags */
	taglist: string | null;
	/** The HTML source to view the author details */
	authorsubheading: string | null;
}

export interface ReturnsDiscussionsItemPostsUserpostsItem {
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
	author: ReturnsDiscussionsItemPostsUserpostsItemAuthor;
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
	capabilities: ReturnsDiscussionsItemPostsUserpostsItemCapabilities;
	urls: ReturnsDiscussionsItemPostsUserpostsItemUrls;
	/** attachments */
	attachments: ReturnsDiscussionsItemPostsUserpostsItemAttachments;
	/** messageinlinefiles */
	messageinlinefiles: ReturnsDiscussionsItemPostsUserpostsItemMessageinlinefiles;
	/** tags */
	tags: ReturnsDiscussionsItemPostsUserpostsItemTags;
	html: ReturnsDiscussionsItemPostsUserpostsItemHtml;
}

export type ReturnsDiscussionsItemPostsUserposts = ReturnsDiscussionsItemPostsUserpostsItem[];

export interface ReturnsDiscussionsItemPostsParentpostsItemAuthorGroupsItemUrls {
	/** image */
	image: string | null;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemAuthorGroupsItem {
	/** id */
	id: number;
	/** name */
	name: string;
	urls: ReturnsDiscussionsItemPostsParentpostsItemAuthorGroupsItemUrls;
}

/**
 * groups
 */
export type ReturnsDiscussionsItemPostsParentpostsItemAuthorGroups =
	ReturnsDiscussionsItemPostsParentpostsItemAuthorGroupsItem[];

export interface ReturnsDiscussionsItemPostsParentpostsItemAuthorUrls {
	/** The URL for the use profile page */
	profile: string | null;
	/** The URL for the use profile image */
	profileimage: string | null;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemAuthor {
	/** id */
	id: number | null;
	/** fullname */
	fullname: string | null;
	/** isdeleted */
	isdeleted: boolean | null;
	/** groups */
	groups: ReturnsDiscussionsItemPostsParentpostsItemAuthorGroups;
	urls: ReturnsDiscussionsItemPostsParentpostsItemAuthorUrls;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemCapabilities {
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

export interface ReturnsDiscussionsItemPostsParentpostsItemUrls {
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

export interface ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItemUrls {
	/** The URL used to export the attachment */
	export: string | null;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItemHtml {
	/** The HTML source for the Plagiarism Response */
	plagiarism: string | null;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItem {
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
	urls: ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItemUrls;
	html: ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItemHtml;
}

/**
 * attachments
 */
export type ReturnsDiscussionsItemPostsParentpostsItemAttachments =
	ReturnsDiscussionsItemPostsParentpostsItemAttachmentsItem[];

export interface ReturnsDiscussionsItemPostsParentpostsItemMessageinlinefilesItem {
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
export type ReturnsDiscussionsItemPostsParentpostsItemMessageinlinefiles =
	ReturnsDiscussionsItemPostsParentpostsItemMessageinlinefilesItem[];

export interface ReturnsDiscussionsItemPostsParentpostsItemTagsItemUrls {
	/** The URL to view the tag */
	view: string;
}

export interface ReturnsDiscussionsItemPostsParentpostsItemTagsItem {
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
	urls: ReturnsDiscussionsItemPostsParentpostsItemTagsItemUrls;
}

/**
 * tags
 */
export type ReturnsDiscussionsItemPostsParentpostsItemTags =
	ReturnsDiscussionsItemPostsParentpostsItemTagsItem[];

export interface ReturnsDiscussionsItemPostsParentpostsItemHtml {
	/** The HTML source to rate the post */
	rating: string | null;
	/** The HTML source to view the list of tags */
	taglist: string | null;
	/** The HTML source to view the author details */
	authorsubheading: string | null;
}

export interface ReturnsDiscussionsItemPostsParentpostsItem {
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
	author: ReturnsDiscussionsItemPostsParentpostsItemAuthor;
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
	capabilities: ReturnsDiscussionsItemPostsParentpostsItemCapabilities;
	urls: ReturnsDiscussionsItemPostsParentpostsItemUrls;
	/** attachments */
	attachments: ReturnsDiscussionsItemPostsParentpostsItemAttachments;
	/** messageinlinefiles */
	messageinlinefiles: ReturnsDiscussionsItemPostsParentpostsItemMessageinlinefiles;
	/** tags */
	tags: ReturnsDiscussionsItemPostsParentpostsItemTags;
	html: ReturnsDiscussionsItemPostsParentpostsItemHtml;
}

export type ReturnsDiscussionsItemPostsParentposts = ReturnsDiscussionsItemPostsParentpostsItem[];

export interface ReturnsDiscussionsItemPosts {
	userposts: ReturnsDiscussionsItemPostsUserposts;
	parentposts: ReturnsDiscussionsItemPostsParentposts;
}

export interface ReturnsDiscussionsItem {
	/** Name of the discussion */
	name: string | null;
	/** ID of the discussion */
	id: number | null;
	/** Timestamp of the discussion start */
	timecreated: number | null;
	/** Full name of the user that started the discussion */
	authorfullname: string | null;
	posts: ReturnsDiscussionsItemPosts;
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
