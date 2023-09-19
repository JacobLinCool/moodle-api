export interface ParamsPreflightdataItem {
	/** data name */
	name: string | null;
	/** data value */
	value: string | null;
}

/**
 * Preflight required data (like passwords)
 */
export type ParamsPreflightdata = ParamsPreflightdataItem[];

export interface Params {
	/** attempt id */
	attemptid: number | null;
	/** Preflight required data (like passwords) */
	preflightdata?: ParamsPreflightdata;
}

/**
 * File.
 */
export interface ReturnsQuestionsItemResponsefileareasItemFilesItem {
	/** File name. */
	filename: string | null;
	/** File path. */
	filepath: string | null;
	/** File size. */
	filesize: number | null;
	/** Downloadable file url. */
	fileurl: string | null;
	/** Time modified. */
	timemodified: number | null;
	/** File mime type. */
	mimetype: string | null;
	/** Whether is an external file. */
	isexternalfile: boolean | null;
	/** The repository type for external files. */
	repositorytype: string | null;
}

/**
 * Response files for the question
 */
export type ReturnsQuestionsItemResponsefileareasItemFiles =
	ReturnsQuestionsItemResponsefileareasItemFilesItem[];

export interface ReturnsQuestionsItemResponsefileareasItem {
	/** File area name */
	area: string | null;
	/** Response files for the question */
	files: ReturnsQuestionsItemResponsefileareasItemFiles;
}

/**
 * Response file areas including files
 */
export type ReturnsQuestionsItemResponsefileareas = ReturnsQuestionsItemResponsefileareasItem[];

/**
 * The question data. Some fields may not be returned depending on the quiz display settings.
 */
export interface ReturnsQuestionsItem {
	/** slot number */
	slot: number | null;
	/** question type, i.e: multichoice */
	type: string | null;
	/** page of the quiz this question appears on */
	page: number | null;
	/** The question number to display for this question, e.g. "7", "i" or "Custom-B)". */
	questionnumber: string | null;
	/** DO NOT USE. Use questionnumber. Only retained for backwards compatibility. */
	number: number | null;
	/** the question rendered */
	html: string | null;
	/** Response file areas including files */
	responsefileareas: ReturnsQuestionsItemResponsefileareas;
	/** the number of real steps in this attempt */
	sequencecheck: number | null;
	/** the timestamp of the most recent step in this question attempt */
	lastactiontime: number | null;
	/** whether this question attempt has autosaved data */
	hasautosavedstep: boolean | null;
	/** whether the question is flagged or not */
	flagged: boolean | null;
	/** the state where the question is in. It will not be returned if the user cannot see it due to the quiz display correctness settings. */
	state: string | null;
	/** current formatted state of the question */
	status: string | null;
	/** whether the question is blocked by the previous question */
	blockedbyprevious: boolean | null;
	/** the mark awarded. It will be returned only if the user is allowed to see it. */
	mark: string | null;
	/** the maximum mark possible for this question attempt. It will be returned only if the user is allowed to see it. */
	maxmark: number | null;
	/** Question settings (JSON encoded). */
	settings: string | null;
}

export type ReturnsQuestions = ReturnsQuestionsItem[];

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
	questions: ReturnsQuestions;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
