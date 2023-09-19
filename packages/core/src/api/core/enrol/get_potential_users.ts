export interface Params {
	/** course id */
	courseid: number | null;
	/** enrolment id */
	enrolid: number | null;
	/** query */
	search: string | null;
	/** find a match anywhere, or only at the beginning */
	searchanywhere: boolean | null;
	/** Page number */
	page: number | null;
	/** Number per page */
	perpage: number | null;
}

export interface ReturnsItemCustomfieldsItem {
	/** The type of the custom field - text field, checkbox... */
	type: string | null;
	/** The value of the custom field (as stored in the database) */
	value: string | null;
	/** The value of the custom field for display */
	displayvalue: string | null;
	/** The name of the custom field */
	name: string | null;
	/** The shortname of the custom field - to be able to build the field class in the code */
	shortname: string | null;
}

/**
 * User custom fields (also known as user profile fields)
 */
export type ReturnsItemCustomfields = ReturnsItemCustomfieldsItem[];

export interface ReturnsItemPreferencesItem {
	/** The name of the preferences */
	name: string | null;
	/** The value of the preference */
	value: string | null;
}

/**
 * Users preferences
 */
export type ReturnsItemPreferences = ReturnsItemPreferencesItem[];

export interface ReturnsItem {
	/** ID of the user */
	id: number | null;
	/** The username */
	username: string | null;
	/** The first name(s) of the user */
	firstname: string | null;
	/** The family name of the user */
	lastname: string | null;
	/** The fullname of the user */
	fullname: string | null;
	/** An email address - allow email as root@localhost */
	email: string | null;
	/** Postal address */
	address: string | null;
	/** Phone 1 */
	phone1: string | null;
	/** Phone 2 */
	phone2: string | null;
	/** department */
	department: string | null;
	/** institution */
	institution: string | null;
	/** An arbitrary ID code number perhaps from the institution */
	idnumber: string | null;
	/** user interests (separated by commas) */
	interests: string | null;
	/** first access to the site (0 if never) */
	firstaccess: number | null;
	/** last access to the site (0 if never) */
	lastaccess: number | null;
	/** Auth plugins include manual, ldap, etc */
	auth: string | null;
	/** Suspend user account, either false to enable user login or true to disable it */
	suspended: boolean | null;
	/** Active user: 1 if confirmed, 0 otherwise */
	confirmed: boolean | null;
	/** Language code such as "en", must exist on server */
	lang: string | null;
	/** Calendar type such as "gregorian", must exist on server */
	calendartype: string | null;
	/** Theme name such as "standard", must exist on server */
	theme: string | null;
	/** Timezone code such as Australia/Perth, or 99 for default */
	timezone: string | null;
	/** Mail format code is 0 for plain text, 1 for HTML etc */
	mailformat: number | null;
	/** User profile description */
	description: string | null;
	/** int format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat: number | null;
	/** Home city of the user */
	city: string | null;
	/** Home country code of the user, such as AU or CZ */
	country: string | null;
	/** User image profile URL - small version */
	profileimageurlsmall: string | null;
	/** User image profile URL - big version */
	profileimageurl: string | null;
	/** User custom fields (also known as user profile fields) */
	customfields: ReturnsItemCustomfields;
	/** Users preferences */
	preferences: ReturnsItemPreferences;
}

export type Returns = ReturnsItem[];
