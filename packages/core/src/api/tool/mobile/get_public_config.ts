export interface Params {}

export interface ReturnsIdentityprovidersItem {
	/** The identity provider name. */
	name: string | null;
	/** The icon URL for the provider. */
	iconurl: string | null;
	/** The URL of the provider. */
	url: string | null;
}

/**
 * Identity providers
 */
export type ReturnsIdentityproviders = ReturnsIdentityprovidersItem[];

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
	/** Site URL. */
	wwwroot: string | null;
	/** Site https URL (if httpslogin is enabled). */
	httpswwwroot: string | null;
	/** Site name. */
	sitename: string | null;
	/** Whether guest login is enabled. */
	guestlogin: number | null;
	/** Values: 0 for No, 1 for Yes, 2 for optional. */
	rememberusername: number | null;
	/** Whether log in via email is enabled. */
	authloginviaemail: number | null;
	/** Authentication method for user registration. */
	registerauth: string | null;
	/** Forgotten password URL. */
	forgottenpasswordurl: string | null;
	/** Authentication instructions. */
	authinstructions: string | null;
	/** Whether auth none is enabled. */
	authnoneenabled: number | null;
	/** Whether Web Services are enabled. */
	enablewebservices: number | null;
	/** Whether the Mobile service is enabled. */
	enablemobilewebservice: number | null;
	/** Whether site maintenance is enabled. */
	maintenanceenabled: number | null;
	/** Maintenance message. */
	maintenancemessage: string | null;
	/** The site logo URL */
	logourl: string | null;
	/** The site compact logo URL */
	compactlogourl: string | null;
	/** The type of login. 1 for app, 2 for browser, 3 for embedded. */
	typeoflogin: number | null;
	/** SSO login launch URL. */
	launchurl: string | null;
	/** Mobile custom CSS theme */
	mobilecssurl: string | null;
	/** Disabled features in the app */
	tool_mobile_disabledfeatures: string | null;
	/** Identity providers */
	identityproviders: ReturnsIdentityproviders;
	/** Default site country */
	country: string | null;
	/** Whether age digital consent verification is enabled. */
	agedigitalconsentverification: boolean | null;
	/** Site support contact name (only if age verification is enabled). */
	supportname: string | null;
	/** Site support contact email (only if age verification is enabled). */
	supportemail: string | null;
	/** Site support page link. */
	supportpage: string | null;
	/** Determines who has access to contact site support. */
	supportavailability: number | null;
	/** Whether to detect default language from browser setting. */
	autolang: number | null;
	/** Default language for the site. */
	lang: string | null;
	/** Whether the language menu should be displayed. */
	langmenu: number | null;
	/** Languages on language menu. */
	langlist: string | null;
	/** Sitewide locale. */
	locale: string | null;
	/** Minimum required version to access. */
	tool_mobile_minimumversion: string | null;
	/** iOS app's unique identifier. */
	tool_mobile_iosappid: string | null;
	/** Android app's unique identifier. */
	tool_mobile_androidappid: string | null;
	/** App download page. */
	tool_mobile_setuplink: string | null;
	/** QR login configuration. */
	tool_mobile_qrcodetype: number | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
