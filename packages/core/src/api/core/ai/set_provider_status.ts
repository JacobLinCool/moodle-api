export interface Params {
	/** Provider ID */
	plugin: number | null;
	/** Enabled or disabled */
	state: number | null;
}

export interface Returns {
	/** Whether the status was changed, true or false */
	result: boolean | null;
	/** Messages */
	message: string | null;
	/** Message type */
	messagetype: string | null;
}
