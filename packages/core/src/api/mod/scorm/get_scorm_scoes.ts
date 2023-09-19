export interface Params {
	/** scorm instance id */
	scormid: number | null;
	/** organization id */
	organization?: string | null;
}

export interface ReturnsScoesItemExtradataItem {
	/** element name */
	element: string | null;
	/** element value */
	value: string | null;
}

/**
 * Additional SCO data
 */
export type ReturnsScoesItemExtradata = ReturnsScoesItemExtradataItem[];

/**
 * SCORM SCO data
 */
export interface ReturnsScoesItem {
	/** sco id */
	id: number | null;
	/** scorm id */
	scorm: number | null;
	/** manifest id */
	manifest: string | null;
	/** organization id */
	organization: string | null;
	/** parent */
	parent: string | null;
	/** identifier */
	identifier: string | null;
	/** launch file */
	launch: string | null;
	/** scorm type (asset, sco) */
	scormtype: string | null;
	/** sco title */
	title: string | null;
	/** sort order */
	sortorder: number | null;
	/** Additional SCO data */
	extradata: ReturnsScoesItemExtradata;
}

export type ReturnsScoes = ReturnsScoesItem[];

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
	scoes: ReturnsScoes;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
