export interface Params {
	/** The data to create the category, encoded as a json array */
	jsonformdata: string | null;
}

export interface ReturnsCategory {
	/** The category name. */
	name: string;
	/** The category description. */
	description: string | null;
	/** description format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	descriptionformat?: number | null;
	/** id */
	id: number;
	/** timecreated */
	timecreated: number;
	/** timemodified */
	timemodified: number;
	/** usermodified */
	usermodified: number;
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
	category: ReturnsCategory;
	/** Were there validation errors */
	validationerrors: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
