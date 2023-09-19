export interface Params {
	/** Component */
	component: string | null;
	/** Payment area in the component */
	paymentarea: string | null;
	/** An identifier for payment area in the component */
	itemid: number | null;
}

export interface ReturnsItem {
	/** Name of the plugin */
	shortname: string | null;
	/** Human readable name of the gateway */
	name: string | null;
	/** description of the gateway */
	description: string | null;
	/** percentage of surcharge when using the gateway */
	surcharge: number | null;
	/** Cost in human-readable form (amount plus surcharge with currency sign) */
	cost: string | null;
}

export type Returns = ReturnsItem[];
