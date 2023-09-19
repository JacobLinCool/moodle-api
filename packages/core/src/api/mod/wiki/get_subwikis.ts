export interface Params {
	/** Wiki instance ID. */
	wikiid: number | null;
}

/**
 * Subwikis
 */
export interface ReturnsSubwikisItem {
	/** Subwiki ID. */
	id: number | null;
	/** Wiki ID. */
	wikiid: number | null;
	/** Group ID. */
	groupid: string | null;
	/** User ID. */
	userid: number | null;
	/** True if user can edit the subwiki. */
	canedit: boolean | null;
}

export type ReturnsSubwikis = ReturnsSubwikisItem[];

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
	subwikis: ReturnsSubwikis;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
