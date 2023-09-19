export interface Params {
	/** id of the user, 0 for current user */
	userid: number | null;
	/** The name of the message processor */
	name: string | null;
}

export interface Returns {
	/** Site configuration status */
	systemconfigured: boolean | null;
	/** The user configuration status */
	userconfigured: boolean | null;
}
