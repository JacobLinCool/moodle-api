/**
 * DEPRECATED PARAMETER - it was a design error in the original implementation. \
It is ignored now. (parameter kept for backward compatibility)
 */
export type ParamsServiceshortnames = (string | null)[];

export interface Params {
	/** DEPRECATED PARAMETER - it was a design error in the original implementation. \ It is ignored now. (parameter kept for backward compatibility) */
	serviceshortnames?: ParamsServiceshortnames;
}

/**
 * functions that are available
 */
export interface ReturnsFunctionsItem {
	/** function name */
	name: string | null;
	/** The version number of the component to which the function belongs */
	version: string | null;
}

export type ReturnsFunctions = ReturnsFunctionsItem[];

/**
 * Advanced features availability
 */
export interface ReturnsAdvancedfeaturesItem {
	/** feature name */
	name: string | null;
	/** feature value. Usually 1 means enabled. */
	value: number | null;
}

/**
 * Advanced features availability
 */
export type ReturnsAdvancedfeatures = ReturnsAdvancedfeaturesItem[];

export interface Returns {
	/** site name */
	sitename: string | null;
	/** username */
	username: string | null;
	/** first name */
	firstname: string | null;
	/** last name */
	lastname: string | null;
	/** user full name */
	fullname: string | null;
	/** Current language. */
	lang: string | null;
	/** user id */
	userid: number | null;
	/** site url */
	siteurl: string | null;
	/** the user profile picture. Warning: this url is the public URL that only works when forcelogin is set to NO and guestaccess is set to YES. In order to retrieve user profile pictures independently of the Moodle config, replace "pluginfile.php" by "webservice/pluginfile.php?token=WSTOKEN&file=" Of course the user can only see profile picture depending on his/her permissions. Moreover it is recommended to use HTTPS too. */
	userpictureurl: string | null;
	functions: ReturnsFunctions;
	/** 1 if users are allowed to download files, 0 if not */
	downloadfiles: number | null;
	/** 1 if users are allowed to upload files, 0 if not */
	uploadfiles: number | null;
	/** Moodle release number */
	release: string | null;
	/** Moodle version number */
	version: string | null;
	/** Mobile custom CSS theme */
	mobilecssurl: string | null;
	/** Advanced features availability */
	advancedfeatures: ReturnsAdvancedfeatures;
	/** true if the user can manage his own files */
	usercanmanageownfiles: boolean | null;
	/** user quota (bytes). 0 means user can ignore the quota */
	userquota: number | null;
	/** user max upload file size (bytes). -1 means the user can ignore the upload file size */
	usermaxuploadfilesize: number | null;
	/** the default home page for the user: 0 for the site home, 1 for dashboard */
	userhomepage: number | null;
	/** Private user access key for fetching files. */
	userprivateaccesskey: string | null;
	/** Site course ID */
	siteid: number | null;
	/** Calendar type set in the site. */
	sitecalendartype: string | null;
	/** Calendar typed used by the user. */
	usercalendartype: string | null;
	/** Whether the user is a site admin or not. */
	userissiteadmin: boolean | null;
	/** Current theme for the user. */
	theme: string | null;
	/** Number of concurrent sessions allowed */
	limitconcurrentlogins: number | null;
	/** Number of active sessions for current user. Only returned when limitconcurrentlogins is used. */
	usersessionscount: number | null;
}
