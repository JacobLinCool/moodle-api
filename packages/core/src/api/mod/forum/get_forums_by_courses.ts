/**
 * Array of Course IDs
 */
export type ParamsCourseids = number[];

export interface Params {
	/** Array of Course IDs */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsItemIntrofilesItem {
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
 * Files in the introduction text
 */
export type ReturnsItemIntrofiles = ReturnsItemIntrofilesItem[];

/**
 * forum
 */
export interface ReturnsItem {
	/** Forum id */
	id: number | null;
	/** Course id */
	course: number | null;
	/** The forum type */
	type: string | null;
	/** Forum name */
	name: string | null;
	/** The forum intro */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction text */
	introfiles: ReturnsItemIntrofiles;
	/** Forced activity language */
	lang: string | null;
	/** duedate for the user */
	duedate: number | null;
	/** cutoffdate for the user */
	cutoffdate: number | null;
	/** Aggregate type */
	assessed: number | null;
	/** Assess start time */
	assesstimestart: number | null;
	/** Assess finish time */
	assesstimefinish: number | null;
	/** Scale */
	scale: number | null;
	/** Whole forum grade */
	grade_forum: number | null;
	/** Whether to send notifications to students upon grading by default */
	grade_forum_notify: number | null;
	/** Maximum attachment size */
	maxbytes: number | null;
	/** Maximum number of attachments */
	maxattachments: number | null;
	/** Force users to subscribe */
	forcesubscribe: number | null;
	/** Subscription mode */
	trackingtype: number | null;
	/** RSS feed for this activity */
	rsstype: number | null;
	/** Number of RSS recent articles */
	rssarticles: number | null;
	/** Time modified */
	timemodified: number | null;
	/** Post threshold for warning */
	warnafter: number | null;
	/** Post threshold for blocking */
	blockafter: number | null;
	/** Time period for blocking */
	blockperiod: number | null;
	/** Student must create discussions */
	completiondiscussions: number | null;
	/** Student must post replies */
	completionreplies: number | null;
	/** Student must post discussions or replies */
	completionposts: number | null;
	/** Course module id */
	cmid: number | null;
	/** Number of discussions in the forum */
	numdiscussions: number | null;
	/** If the user can create discussions */
	cancreatediscussions: boolean | null;
	/** After what period a discussion is locked */
	lockdiscussionafter: number | null;
	/** If the user is tracking the forum */
	istracked: boolean | null;
	/** The number of unread posts for tracked forums */
	unreadpostscount: number | null;
}

export type Returns = ReturnsItem[];
