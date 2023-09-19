export interface ParamsCriteriaItem {
	/** the user column to search, expected keys (value format) are: "id" (int) matching user id, "lastname" (string) user last name (Note: you can use % for searching but it may be considerably slower!), "firstname" (string) user first name (Note: you can use % for searching but it may be considerably slower!), "idnumber" (string) matching user idnumber, "username" (string) matching user username, "email" (string) user email (Note: you can use % for searching but it may be considerably slower!), "auth" (string) matching user auth plugin */
	key: string | null;
	/** the value to search */
	value: string | null;
}

/**
 * the key/value pairs to be considered in user search. Values can not be empty.
Specify different keys only once (fullname => 'user1', auth => 'manual', ...) -
key occurences are forbidden.
The search is executed with AND operator on the criterias. Invalid criterias (keys) are ignored,
the search is still executed on the valid criterias.
You can search without criteria, but the function is not designed for it.
It could very slow or timeout. The function is designed to search some specific users.
 */
export type ParamsCriteria = ParamsCriteriaItem[];

export interface Params {
	/** the key/value pairs to be considered in user search. Values can not be empty. Specify different keys only once (fullname => 'user1', auth => 'manual', ...) - key occurences are forbidden. The search is executed with AND operator on the criterias. Invalid criterias (keys) are ignored, the search is still executed on the valid criterias. You can search without criteria, but the function is not designed for it. It could very slow or timeout. The function is designed to search some specific users. */
	criteria: ParamsCriteria;
}

export interface ReturnsUsersItemCustomfieldsItem {
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
export type ReturnsUsersItemCustomfields = ReturnsUsersItemCustomfieldsItem[];

export interface ReturnsUsersItemPreferencesItem {
	/** The name of the preferences */
	name: string | null;
	/** The value of the preference */
	value: string | null;
}

/**
 * Users preferences
 */
export type ReturnsUsersItemPreferences = ReturnsUsersItemPreferencesItem[];

export interface ReturnsUsersItem {
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
	customfields: ReturnsUsersItemCustomfields;
	/** Users preferences */
	preferences: ReturnsUsersItemPreferences;
}

export type ReturnsUsers = ReturnsUsersItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** always set to 'key' */
	item: string | null;
	/** faulty key name */
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
	users: ReturnsUsers;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
