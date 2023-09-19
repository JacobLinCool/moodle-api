export interface Params {
	/** Database instance id. */
	databaseid: number | null;
}

export interface ReturnsFieldsItem {
	/** Field id. */
	id: number;
	/** The field type of the content. */
	dataid: number;
	/** The field type. */
	type: string;
	/** The field name. */
	name: string;
	/** The field description. */
	description: string;
	/** Whether is a field required or not. */
	required: boolean;
	/** Field parameters */
	param1: string | null;
	/** Field parameters */
	param2: string | null;
	/** Field parameters */
	param3: string | null;
	/** Field parameters */
	param4: string | null;
	/** Field parameters */
	param5: string | null;
	/** Field parameters */
	param6: string | null;
	/** Field parameters */
	param7: string | null;
	/** Field parameters */
	param8: string | null;
	/** Field parameters */
	param9: string | null;
	/** Field parameters */
	param10: string | null;
}

export type ReturnsFields = ReturnsFieldsItem[];

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
	fields: ReturnsFields;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
