export interface Params {
	/** assign instance id */
	assignid: number | null;
	/** group id */
	groupid: number | null;
	/** search string to filter the results */
	filter: string | null;
	/** number of records to skip */
	skip?: number | null;
	/** maximum number of records to return */
	limit?: number | null;
	/** Do not return all user fields */
	onlyids?: boolean | null;
	/** Do return courses where the user is enrolled */
	includeenrolments?: boolean | null;
	/** Apply current user table sorting preferences. */
	tablesort?: boolean | null;
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

export interface ReturnsItemGroupsItem {
	/** group id */
	id: number | null;
	/** group name */
	name: string | null;
	/** group description */
	description: string | null;
}

/**
 * user groups
 */
export type ReturnsItemGroups = ReturnsItemGroupsItem[];

export interface ReturnsItemRolesItem {
	/** role id */
	roleid: number | null;
	/** role name */
	name: string | null;
	/** role shortname */
	shortname: string | null;
	/** role sortorder */
	sortorder: number | null;
}

/**
 * user roles
 */
export type ReturnsItemRoles = ReturnsItemRolesItem[];

export interface ReturnsItemEnrolledcoursesItem {
	/** Id of the course */
	id: number | null;
	/** Fullname of the course */
	fullname: string | null;
	/** Shortname of the course */
	shortname: string | null;
}

/**
 * Courses where the user is enrolled - limited by which courses the user is able to see
 */
export type ReturnsItemEnrolledcourses = ReturnsItemEnrolledcoursesItem[];

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
	/** Email address */
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
	/** The idnumber of the user */
	idnumber: string | null;
	/** user interests (separated by commas) */
	interests: string | null;
	/** first access to the site (0 if never) */
	firstaccess: number | null;
	/** last access to the site (0 if never) */
	lastaccess: number | null;
	/** Suspend user account, either false to enable user login or true to disable it */
	suspended: boolean | null;
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
	/** record id */
	recordid: number | null;
	/** user groups */
	groups: ReturnsItemGroups;
	/** user roles */
	roles: ReturnsItemRoles;
	/** Courses where the user is enrolled - limited by which courses the user is able to see */
	enrolledcourses: ReturnsItemEnrolledcourses;
	/** have they submitted their assignment */
	submitted: boolean | null;
	/** is their submission waiting for grading */
	requiregrading: boolean | null;
	/** have they been granted an extension */
	grantedextension: boolean | null;
	/** The submission status (new, draft, reopened or submitted). Empty when not submitted. */
	submissionstatus: string | null;
	/** for group assignments this is the group id */
	groupid: number | null;
	/** for group assignments this is the group name */
	groupname: string | null;
}

export type Returns = ReturnsItem[];
