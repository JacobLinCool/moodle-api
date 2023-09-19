/**
 * Array of course ids
 */
export type ParamsCourseids = (number | null)[];

export interface Params {
	/** Array of course ids */
	courseids?: ParamsCourseids;
}

/**
 * File.
 */
export interface ReturnsQuizzesItemIntrofilesItem {
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
 * Files in the introduction
 */
export type ReturnsQuizzesItemIntrofiles = ReturnsQuizzesItemIntrofilesItem[];

export interface ReturnsQuizzesItem {
	/** Activity instance id */
	id: number | null;
	/** Course module id */
	coursemodule: number | null;
	/** Course id */
	course: number | null;
	/** Activity name */
	name: string | null;
	/** Activity introduction */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction */
	introfiles: ReturnsQuizzesItemIntrofiles;
	/** Course section id */
	section: number | null;
	/** Visible */
	visible: boolean | null;
	/** Group mode */
	groupmode: number | null;
	/** Group id */
	groupingid: number | null;
	/** Forced activity language */
	lang: string | null;
	/** The time when this quiz opens. (0 = no restriction.) */
	timeopen: number | null;
	/** The time when this quiz closes. (0 = no restriction.) */
	timeclose: number | null;
	/** The time limit for quiz attempts, in seconds. */
	timelimit: number | null;
	/** The method used to handle overdue attempts. 'autosubmit', 'graceperiod' or 'autoabandon'. */
	overduehandling: string | null;
	/** The amount of time (in seconds) after the time limit runs out during which attempts can still be submitted, if overduehandling is set to allow it. */
	graceperiod: number | null;
	/** The behaviour to ask questions to use. */
	preferredbehaviour: string | null;
	/** Allows students to redo any completed question within a quiz attempt. */
	canredoquestions: number | null;
	/** The maximum number of attempts a student is allowed. */
	attempts: number | null;
	/** Whether subsequent attempts start from the answer to the previous attempt (1) or start blank (0). */
	attemptonlast: number | null;
	/** One of the values QUIZ_GRADEHIGHEST, QUIZ_GRADEAVERAGE, QUIZ_ATTEMPTFIRST or QUIZ_ATTEMPTLAST. */
	grademethod: number | null;
	/** Number of decimal points to use when displaying grades. */
	decimalpoints: number | null;
	/** Number of decimal points to use when displaying question grades. (-1 means use decimalpoints.) */
	questiondecimalpoints: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. This is a bit field, decoded by the \mod_quiz\question\display_options class. It is formed by ORing together the constants defined there. */
	reviewattempt: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewcorrectness: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewmarks: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewspecificfeedback: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewgeneralfeedback: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewrightanswer: number | null;
	/** Whether users are allowed to review their quiz attempts at various times. A bit field, like reviewattempt. */
	reviewoverallfeedback: number | null;
	/** How often to insert a page break when editing the quiz, or when shuffling the question order. */
	questionsperpage: number | null;
	/** Any constraints on how the user is allowed to navigate around the quiz. Currently recognised values are 'free' and 'seq'. */
	navmethod: string | null;
	/** Whether the parts of the question should be shuffled, in those question types that support it. */
	shuffleanswers: number | null;
	/** The total of all the question instance maxmarks. */
	sumgrades: number | null;
	/** The total that the quiz overall grade is scaled to be out of. */
	grade: number | null;
	/** The time when the quiz was added to the course. */
	timecreated: number | null;
	/** Last modified time. */
	timemodified: number | null;
	/** A password that the student must enter before starting or continuing a quiz attempt. */
	password: string | null;
	/** Used to restrict the IP addresses from which this quiz can be attempted. The format is as requried by the address_in_subnet function. */
	subnet: string | null;
	/** Restriciton on the browser the student must use. E.g. 'securewindow'. */
	browsersecurity: string | null;
	/** Delay that must be left between the first and second attempt, in seconds. */
	delay1: number | null;
	/** Delay that must be left between the second and subsequent attempt, in seconds. */
	delay2: number | null;
	/** Option to show the user's picture during the attempt and on the review page. */
	showuserpicture: number | null;
	/** Whether blocks should be shown on the attempt.php and review.php pages. */
	showblocks: number | null;
	/** Mark quiz complete when the student has exhausted the maximum number of attempts */
	completionattemptsexhausted: number | null;
	/** Whether to require passing grade */
	completionpass: number | null;
	/** Whether to allow the quiz to be attempted offline in the mobile app */
	allowofflineattempts: number | null;
	/** Auto-save delay */
	autosaveperiod: number | null;
	/** Whether the quiz has any non-blank feedback text */
	hasfeedback: number | null;
	/** Whether the quiz has questions */
	hasquestions: number | null;
}

export type ReturnsQuizzes = ReturnsQuizzesItem[];

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
	quizzes: ReturnsQuizzes;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
