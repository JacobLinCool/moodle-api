/**
 * Array of capabilities
 */
export type ParamsCapabilityoffered = (string | null)[];

/**
 * Array of services
 */
export type ParamsServiceoffered = (string | null)[];

export interface Params {
	/** Tool proxy name */
	name?: string | null;
	/** Tool proxy registration URL */
	regurl: string | null;
	/** Array of capabilities */
	capabilityoffered?: ParamsCapabilityoffered;
	/** Array of services */
	serviceoffered?: ParamsServiceoffered;
}

export interface Returns {
	/** Tool proxy id */
	id: number | null;
	/** Tool proxy name */
	name: string | null;
	/** Tool proxy registration URL */
	regurl: string | null;
	/** Tool proxy state */
	state: number | null;
	/** Tool proxy globally unique identifier */
	guid: string | null;
	/** Tool proxy shared secret */
	secret: string | null;
	/** Tool proxy consumer code */
	vendorcode: string | null;
	/** Tool proxy capabilities offered */
	capabilityoffered: string | null;
	/** Tool proxy services offered */
	serviceoffered: string | null;
	/** Tool proxy */
	toolproxy: string | null;
	/** Tool proxy time created */
	timecreated: number | null;
	/** Tool proxy modified */
	timemodified: number | null;
}
