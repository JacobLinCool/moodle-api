export interface Params {
	/** Component */
	component: string | null;
	/** Payment area in the component */
	paymentarea: string | null;
	/** An identifier for payment area in the component */
	itemid: number | null;
}

export interface Returns {
	/** PayPal client ID */
	clientid: string | null;
	/** Brand name */
	brandname: string | null;
	/** Cost with gateway surcharge */
	cost: number | null;
	/** Currency */
	currency: string | null;
}
