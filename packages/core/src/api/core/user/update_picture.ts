export interface Params {
	/** Id of the user draft file to use as image */
	draftitemid: number | null;
	/** If we should delete the user picture */
	delete?: boolean | null;
	/** Id of the user, 0 for current user */
	userid?: number | null;
}

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
	/** True if the image was updated, false otherwise. */
	success: boolean | null;
	/** New profile user image url */
	profileimageurl: string | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
