export interface Params {
	/** Lesson instance id. */
	lessonid: number | null;
	/** The user id. 0 for current user. */
	userid: number | null;
	/** The attempt number. */
	lessonattempt: number | null;
}

/**
 * Page fields
 */
export interface ReturnsAnswerpagesItemPage {
	/** The id of this lesson page */
	id: number | null;
	/** The id of the lesson this page belongs to */
	lessonid: number | null;
	/** The id of the page before this one */
	prevpageid: number | null;
	/** The id of the next page in the page sequence */
	nextpageid: number | null;
	/** Identifies the page type of this page */
	qtype: number | null;
	/** Used to record page type specific options */
	qoption: number | null;
	/** Used to record page specific layout selections */
	layout: number | null;
	/** Used to record page specific display selections */
	display: number | null;
	/** Timestamp for when the page was created */
	timecreated: number | null;
	/** Timestamp for when the page was last modified */
	timemodified: number | null;
	/** The title of this page */
	title: string | null;
	/** The contents of this page */
	contents: string | null;
	/** contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	contentsformat: number | null;
	/** Toggles display in the left menu block */
	displayinmenublock: boolean | null;
	/** The type of the page [question | structure] */
	type: number | null;
	/** The unique identifier for the page type */
	typeid: number | null;
	/** The string that describes this page type */
	typestring: string | null;
}

export type ReturnsAnswerpagesItemAnswerdataAnswersItem = (string | null)[];

/**
 * User answers
 */
export type ReturnsAnswerpagesItemAnswerdataAnswers = ReturnsAnswerpagesItemAnswerdataAnswersItem[];

/**
 * Answer data (empty in content pages created in Moodle 1.x).
 */
export interface ReturnsAnswerpagesItemAnswerdata {
	/** The score (text version). */
	score: string | null;
	/** The response text. */
	response: string | null;
	/** response. format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	responseformat: number | null;
	/** User answers */
	answers: ReturnsAnswerpagesItemAnswerdataAnswers;
}

export interface ReturnsAnswerpagesItem {
	/** Page fields */
	page: ReturnsAnswerpagesItemPage;
	/** Page title. */
	title: string | null;
	/** Page contents. */
	contents: string | null;
	/** Identifies the page type of this page. */
	qtype: string | null;
	/** If is required to apply a grayout. */
	grayout: number | null;
	/** Answer data (empty in content pages created in Moodle 1.x). */
	answerdata: ReturnsAnswerpagesItemAnswerdata;
}

export type ReturnsAnswerpages = ReturnsAnswerpagesItem[];

/**
 * Attempt grade
 */
export interface ReturnsUserstatsGradeinfo {
	/** Number of questions answered */
	nquestions: number | null;
	/** Number of question attempts */
	attempts: number | null;
	/** Max points possible */
	total: number | null;
	/** Points earned by student */
	earned: number | null;
	/** Calculated percentage grade */
	grade: number | null;
	/** Number of manually graded questions */
	nmanual: number | null;
	/** Point value for manually graded questions */
	manualpoints: number | null;
}

export interface ReturnsUserstats {
	/** Attempt final grade. */
	grade: number | null;
	/** Time completed. */
	completed: number | null;
	/** Time taken. */
	timetotake: number | null;
	/** Attempt grade */
	gradeinfo: ReturnsUserstatsGradeinfo;
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
	answerpages: ReturnsAnswerpages;
	userstats: ReturnsUserstats;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
