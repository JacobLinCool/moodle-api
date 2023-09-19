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
	/** True if password should be created and mailed to user. */
	createpassword: boolean | null;
	/** Username policy is defined in Moodle security config. */
	username: string | null;
	/** Auth plugins include manual, ldap, etc */
	auth?: string;
	/** Plain text password consisting of any characters */
	password: string | null;
	/** The first name(s) of the user */
	firstname: string | null;
	/** The family name of the user */
	lastname: string | null;
	/** A valid and unique email address */
	email: string | null;
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
	idnumber?: string | null;
	/** institution */
	institution: string | null;
	/** department */
	department: string | null;
	/** Phone 1 */
	phone1: string | null;
	/** Phone 2 */
	phone2: string | null;
	/** Postal address */
	address: string | null;
	/** Language code such as "en", must exist on server */
	lang?: string;
	/** Calendar type such as "gregorian", must exist on server */
	calendartype?: string | null;
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

export interface ReturnsItem {
	/** user id */
	id: number | null;
	/** user name */
	username: string | null;
}

export type Returns = ReturnsItem[];
