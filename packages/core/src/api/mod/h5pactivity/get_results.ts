/**
 * Attempt ids
 */
export type ParamsAttemptids = (number | null)[];

export interface Params {
	/** h5p activity instance id */
	h5pactivityid: number | null;
	/** Attempt ids */
	attemptids?: ParamsAttemptids;
}

/**
 * The option correct answer
 */
export interface ReturnsAttemptsItemResultsItemOptionsItemCorrectanswer {
	/** Option text value */
	answer: string | null;
	/** If has to be displayed as correct */
	correct: boolean | null;
	/** If has to be displayed as incorrect */
	incorrect: boolean | null;
	/** If has to be displayed as simple text */
	text: boolean | null;
	/** If has to be displayed as a checked option */
	checked: boolean | null;
	/** If has to be displayed as a unchecked option */
	unchecked: boolean | null;
	/** If has to be displayed as passed */
	pass: boolean | null;
	/** If has to be displayed as failed */
	fail: boolean | null;
}

/**
 * The option user answer
 */
export interface ReturnsAttemptsItemResultsItemOptionsItemUseranswer {
	/** Option text value */
	answer: string | null;
	/** If has to be displayed as correct */
	correct: boolean | null;
	/** If has to be displayed as incorrect */
	incorrect: boolean | null;
	/** If has to be displayed as simple text */
	text: boolean | null;
	/** If has to be displayed as a checked option */
	checked: boolean | null;
	/** If has to be displayed as a unchecked option */
	unchecked: boolean | null;
	/** If has to be displayed as passed */
	pass: boolean | null;
	/** If has to be displayed as failed */
	fail: boolean | null;
}

export interface ReturnsAttemptsItemResultsItemOptionsItem {
	/** Option description */
	description: string | null;
	/** Option string identifier */
	id: string | null;
	/** The option correct answer */
	correctanswer: ReturnsAttemptsItemResultsItemOptionsItemCorrectanswer;
	/** The option user answer */
	useranswer: ReturnsAttemptsItemResultsItemOptionsItemUseranswer;
}

/**
 * The statement options
 */
export type ReturnsAttemptsItemResultsItemOptions = ReturnsAttemptsItemResultsItemOptionsItem[];

/**
 * A single result statement tracking information
 */
export interface ReturnsAttemptsItemResultsItem {
	/** ID of the context */
	id: number | null;
	/** ID of the H5P attempt */
	attemptid: number | null;
	/** Subcontent identifier */
	subcontent: string | null;
	/** Result creation */
	timecreated: number | null;
	/** Interaction type */
	interactiontype: string | null;
	/** Result description */
	description: string | null;
	/** Result extra content */
	content: string | null;
	/** Result score value */
	rawscore: number | null;
	/** Result max score */
	maxscore: number | null;
	/** Result duration in seconds */
	duration: number | null;
	/** Result completion */
	completion: number | null;
	/** Result success */
	success: number | null;
	/** Label used for result options */
	optionslabel: string | null;
	/** Label used for correct answers */
	correctlabel: string | null;
	/** Label used for user answers */
	answerlabel: string | null;
	/** If the result has valid track information */
	track: boolean | null;
	/** The statement options */
	options: ReturnsAttemptsItemResultsItemOptions;
}

/**
 * The results of the attempt
 */
export type ReturnsAttemptsItemResults = ReturnsAttemptsItemResultsItem[];

/**
 * The attempt general information
 */
export interface ReturnsAttemptsItem {
	/** ID of the context */
	id: number | null;
	/** ID of the H5P activity */
	h5pactivityid: number | null;
	/** ID of the user */
	userid: number | null;
	/** Attempt creation */
	timecreated: number | null;
	/** Attempt modified */
	timemodified: number | null;
	/** Attempt number */
	attempt: number | null;
	/** Attempt score value */
	rawscore: number | null;
	/** Attempt max score */
	maxscore: number | null;
	/** Attempt duration in seconds */
	duration: number | null;
	/** Attempt completion */
	completion: number | null;
	/** Attempt success */
	success: number | null;
	/** Attempt scaled */
	scaled: number | null;
	/** The results of the attempt */
	results: ReturnsAttemptsItemResults;
}

/**
 * The complete attempts list
 */
export type ReturnsAttempts = ReturnsAttemptsItem[];

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

/**
 * Activity attempts results data
 */
export interface Returns {
	/** Activity course module ID */
	activityid: number | null;
	/** The complete attempts list */
	attempts: ReturnsAttempts;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
