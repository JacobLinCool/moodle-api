export interface Params {
	/** the app id, usually something like com.moodle.moodlemobile */
	appid: string | null;
	/** the device name, 'occam' or 'iPhone' etc. */
	name: string | null;
	/** the device model 'Nexus4' or 'iPad1,1' etc. */
	model: string | null;
	/** the device platform 'iOS' or 'Android' etc. */
	platform: string | null;
	/** the device version '6.1.2' or '4.2.2' etc. */
	version: string | null;
	/** the device PUSH token/key/identifier/registration id */
	pushid: string | null;
	/** the device UUID */
	uuid: string | null;
	/** the app generated public key */
	publickey?: string | null;
}

/**
 * warning
 */
export interface ReturnsItemItem {
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
export type ReturnsItem = ReturnsItemItem[];

export type Returns = ReturnsItem[];
