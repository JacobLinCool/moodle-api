export interface Params {
	/** App unique id (usually a reversed domain) */
	appid: string | null;
	/** User id, 0 for current user */
	userid?: number | null;
}

export interface ReturnsDevicesItem {
	/** Device id (in the message_airnotifier table) */
	id: number | null;
	/** The app id, something like com.moodle.moodlemobile */
	appid: string | null;
	/** The device name, 'occam' or 'iPhone' etc. */
	name: string | null;
	/** The device model 'Nexus4' or 'iPad1,1' etc. */
	model: string | null;
	/** The device platform 'iOS' or 'Android' etc. */
	platform: string | null;
	/** The device version '6.1.2' or '4.2.2' etc. */
	version: string | null;
	/** The device PUSH token/key/identifier/registration id */
	pushid: string | null;
	/** The device UUID */
	uuid: string | null;
	/** Whether the device is enabled or not */
	enable: number | null;
	/** Time created */
	timecreated: number | null;
	/** Time modified */
	timemodified: number | null;
}

/**
 * List of devices
 */
export type ReturnsDevices = ReturnsDevicesItem[];

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
	/** List of devices */
	devices: ReturnsDevices;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
