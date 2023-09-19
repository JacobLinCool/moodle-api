export interface Params {
	/** The data to create the purpose, encoded as a json array */
	jsonformdata: string | null;
}

export interface ReturnsPurposeFormattedlawfulbasesItem {
	/** name */
	name: string;
	/** description */
	description: string;
}

/**
 * formattedlawfulbases
 */
export type ReturnsPurposeFormattedlawfulbases = ReturnsPurposeFormattedlawfulbasesItem[];

export interface ReturnsPurposeFormattedsensitivedatareasonsItem {
	/** name */
	name: string;
	/** description */
	description: string;
}

/**
 * formattedsensitivedatareasons
 */
export type ReturnsPurposeFormattedsensitivedatareasons =
	ReturnsPurposeFormattedsensitivedatareasonsItem[];

export interface ReturnsPurpose {
	/** The purpose name. */
	name: string;
	/** The purpose description. */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** Comma-separated IDs matching records in tool_dataprivacy_lawfulbasis. */
	lawfulbases: string;
	/** Comma-separated IDs matching records in tool_dataprivacy_sensitive */
	sensitivedatareasons: string | null;
	/** Retention period. ISO_8601 durations format (as in DateInterval format). */
	retentionperiod: string;
	/** Data retention with higher precedent over user's request to be forgotten. */
	protected: number;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
	/** formattedretentionperiod */
	formattedretentionperiod: string;
	/** formattedlawfulbases */
	formattedlawfulbases: ReturnsPurposeFormattedlawfulbases;
	/** formattedsensitivedatareasons */
	formattedsensitivedatareasons: ReturnsPurposeFormattedsensitivedatareasons;
	/** roleoverrides */
	roleoverrides: string;
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
	purpose: ReturnsPurpose;
	/** Were there validation errors */
	validationerrors: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
