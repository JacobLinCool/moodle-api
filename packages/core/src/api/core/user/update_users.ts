export interface ParamsUsersItemCustomfieldsItem {
	/** The name of the custom field */
	type: string | null;
	/** The value of the custom field */
	value: string | null;
}

/**
 * User custom fields (also known as user profil fields)
 */
export type ParamsUsersItemCustomfields = ParamsUsersItemCustomfieldsItem[];

export interface ParamsUsersItemPreferencesItem {
	/** The name of the preference */
	type: string | null;
	/** The value of the preference */
	value: string | null;
}

/**
 * User preferences
 */
export type ParamsUsersItemPreferences = ParamsUsersItemPreferencesItem[];

export interface ParamsUsersItem {
	/** ID of the user */
	id: number | null;
	/** Username policy is defined in Moodle security config. */
	username: string;
	/** Auth plugins include manual, ldap, etc */
	auth: string;
	/** Suspend user account, either false to enable user login or true to disable it */
	suspended: boolean | null;
	/** Plain text password consisting of any characters */
	password: string;
	/** The first name(s) of the user */
	firstname: string;
	/** The family name of the user */
	lastname: string | null;
	/** A valid and unique email address */
	email: string;
	/** Email visibility */
	maildisplay: number | null;
	/** Home city of the user */
	city: string | null;
	/** Home country code of the user, such as AU or CZ */
	country: string | null;
	/** Timezone code such as Australia/Perth, or 99 for default */
	timezone: string | null;
	/** User profile description, no HTML */
	description: string | null;
	/** The itemid where the new user picture has been uploaded to, 0 to delete */
	userpicture: number | null;
	/** The first name(s) phonetically of the user */
	firstnamephonetic: string | null;
	/** The family name phonetically of the user */
	lastnamephonetic: string | null;
	/** The middle name of the user */
	middlename: string | null;
	/** The alternate name of the user */
	alternatename: string | null;
	/** User interests (separated by commas) */
	interests: string | null;
	/** An arbitrary ID code number perhaps from the institution */
	idnumber: string | null;
	/** Institution */
	institution: string | null;
	/** Department */
	department: string | null;
	/** Phone */
	phone1: string | null;
	/** Mobile phone */
	phone2: string | null;
	/** Postal address */
	address: string | null;
	/** Language code such as "en", must exist on server */
	lang: string;
	/** Calendar type such as "gregorian", must exist on server */
	calendartype: string;
	/** Theme name such as "standard", must exist on server */
	theme: string | null;
	/** Mail format code is 0 for plain text, 1 for HTML etc */
	mailformat: number | null;
	/** User custom fields (also known as user profil fields) */
	customfields: ParamsUsersItemCustomfields;
	/** User preferences */
	preferences: ParamsUsersItemPreferences;
}

export type ParamsUsers = ParamsUsersItem[];

export interface Params {
	users: ParamsUsers;
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
	/** list of warnings */
	warnings: ReturnsWarnings;
}
