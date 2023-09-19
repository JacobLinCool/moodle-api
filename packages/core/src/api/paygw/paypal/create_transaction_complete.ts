export interface Params {
	/** The component name */
	component: string | null;
	/** Payment area in the component */
	paymentarea: string | null;
	/** The item id in the context of the component area */
	itemid: number | null;
	/** The order id coming back from PayPal */
	orderid: string | null;
}

export interface Returns {
	/** Whether everything was successful or not. */
	success: boolean | null;
	/** Message (usually the error message). */
	message: string | null;
}
