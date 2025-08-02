export interface Params {}

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
	/** Can contact dpo. */
	cancontactdpo: boolean | null;
	/** Can manage data requests. */
	canmanagedatarequests: boolean | null;
	/** Can create data download request for self. */
	cancreatedatadownloadrequest: boolean | null;
	/** Can create data deletion request for self. */
	cancreatedatadeletionrequest: boolean | null;
	/** Has ongoing data download request. */
	hasongoingdatadownloadrequest: boolean | null;
	/** Has ongoing data deletion request. */
	hasongoingdatadeletionrequest: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
