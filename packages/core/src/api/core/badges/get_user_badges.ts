export interface Params {
	/** Badges only for this user id, empty for current user */
	userid?: number | null;
	/** Filter badges by course id, empty all the courses */
	courseid?: number | null;
	/** The page of records to return. */
	page?: number | null;
	/** The number of records to return per page */
	perpage?: number | null;
	/** A simple string to search for */
	search?: string | null;
	/** Whether to return only public badges */
	onlypublic?: boolean | null;
}

export interface ReturnsBadgesItemEndorsement {
	/** Endorsement id */
	id: number;
	/** Badge id */
	badgeid: number;
	/** Endorsement issuer name */
	issuername: string;
	/** Endorsement issuer URL */
	issuerurl: string;
	/** Endorsement issuer email */
	issueremail: string;
	/** Claim URL */
	claimid: string | null;
	/** Claim comment */
	claimcomment: string | null;
	/** Date issued */
	dateissued: number;
}

export interface ReturnsBadgesItemAlignmentItem {
	/** Alignment id */
	id: number;
	/** Badge id */
	badgeid: number;
	/** Target name */
	targetName: string;
	/** Target URL */
	targetUrl: string;
	/** Target description */
	targetDescription: string | null;
	/** Target framework */
	targetFramework: string | null;
	/** Target code */
	targetCode: string | null;
}

/**
 * Badge alignments
 */
export type ReturnsBadgesItemAlignment = ReturnsBadgesItemAlignmentItem[];

export interface ReturnsBadgesItemRelatedbadgesItem {
	/** Badge id */
	id: number;
	/** Badge name */
	name: string;
	/** Version */
	version: string | null;
	/** Language */
	language: string | null;
	/** Type */
	type: number;
}

/**
 * Related badges
 */
export type ReturnsBadgesItemRelatedbadges = ReturnsBadgesItemRelatedbadgesItem[];

export interface ReturnsBadgesItem {
	/** Badge id */
	id: number;
	/** Badge name */
	name: string;
	/** Badge description */
	description: string | null;
	/** Time created */
	timecreated: number;
	/** Time modified */
	timemodified: number;
	/** User created */
	usercreated: number;
	/** User modified */
	usermodified: number;
	/** Issuer name */
	issuername: string;
	/** Issuer URL */
	issuerurl: string;
	/** Issuer contact */
	issuercontact: string | null;
	/** Expire date */
	expiredate: number | null;
	/** Expire period */
	expireperiod: number | null;
	/** Type */
	type: number;
	/** Course id */
	courseid: number | null;
	/** Message */
	message: string;
	/** Message subject */
	messagesubject: string;
	/** Attachment */
	attachment: number;
	/** Whether to notify when badge is awarded */
	notification: number;
	/** Next cron */
	nextcron: number | null;
	/** Status */
	status: number;
	/** Issued id */
	issuedid: number;
	/** Unique hash */
	uniquehash: string;
	/** Date issued */
	dateissued: number;
	/** Date expire */
	dateexpire: number | null;
	/** Visible */
	visible: number;
	/** User email */
	email: string;
	/** Version */
	version: string | null;
	/** Language */
	language: string | null;
	/** Name of the image author */
	imageauthorname: string | null;
	/** Email of the image author */
	imageauthoremail: string | null;
	/** URL of the image author */
	imageauthorurl: string | null;
	/** Caption of the image */
	imagecaption: string | null;
	/** Badge URL */
	badgeurl: string;
	endorsement: ReturnsBadgesItemEndorsement;
	/** Badge alignments */
	alignment: ReturnsBadgesItemAlignment;
	/** Related badges */
	relatedbadges: ReturnsBadgesItemRelatedbadges;
}

export type ReturnsBadges = ReturnsBadgesItem[];

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
	badges: ReturnsBadges;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
