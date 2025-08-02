export interface Params {
	/** Badge id */
	id: number | null;
}

export interface ReturnsBadgeAlignmentItem {
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
 * alignment
 */
export type ReturnsBadgeAlignment = ReturnsBadgeAlignmentItem[];

export interface ReturnsBadge {
	/** BadgeClass */
	type: string;
	/** Unique identifier for this badgeclass */
	id: string;
	/** Unique identifier for this badgeclass */
	issuer: string;
	/** Name of the badgeclass */
	name: string;
	/** URL to the image. */
	image: string;
	/** Description of the badge class. */
	description: string;
	/** Identifier of the open badge for this assertion */
	hostedUrl: string;
	/** Id of the course */
	courseid: number;
	/** Full name of the course */
	coursefullname: string;
	/** alignment */
	alignment: ReturnsBadgeAlignment;
	/** criteriaUrl */
	criteriaUrl: string;
	/** criteriaNarrative */
	criteriaNarrative: string;
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

export interface Returns {
	badge: ReturnsBadge;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
