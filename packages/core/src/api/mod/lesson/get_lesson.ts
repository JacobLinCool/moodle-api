export interface Params {
	/** lesson instance id */
	lessonid: number | null;
	/** lesson password */
	password?: string | null;
}

export interface ReturnsLessonIntrofilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * introfiles
 */
export type ReturnsLessonIntrofiles = ReturnsLessonIntrofilesItem[];

export interface ReturnsLessonMediafilesItem {
	/** File name. */
	filename: string;
	/** File path. */
	filepath: string;
	/** File size. */
	filesize: number;
	/** Downloadable file url. */
	fileurl: string;
	/** Time modified. */
	timemodified: number;
	/** File mime type. */
	mimetype: string;
	/** Whether is an external file. */
	isexternalfile: boolean;
	/** The repository type for the external files. */
	repositorytype: string | null;
}

/**
 * mediafiles
 */
export type ReturnsLessonMediafiles = ReturnsLessonMediafilesItem[];

export interface ReturnsLesson {
	/** Standard Moodle primary key. */
	id: number;
	/** Foreign key reference to the course this lesson is part of. */
	course: number;
	/** Course module id. */
	coursemodule: number;
	/** Lesson name. */
	name: string;
	/** Lesson introduction text. */
	intro: string;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat?: number | null;
	/** Forced activity language */
	lang: string | null;
	/** Practice lesson? */
	practice: boolean;
	/** Allow student review? */
	modattempts: boolean;
	/** Password protected lesson? */
	usepassword: boolean;
	/** Password */
	password: string;
	/** Dependent on (another lesson id) */
	dependency: number;
	/** Conditions to enable the lesson */
	conditions: string;
	/** The total that the grade is scaled to be out of */
	grade: number;
	/** Custom scoring? */
	custom: boolean;
	/** Display ongoing score? */
	ongoing: boolean;
	/** How to calculate the final grade */
	usemaxgrade: number;
	/** Maximum answers per page */
	maxanswers: number;
	/** Maximum attempts */
	maxattempts: number;
	/** Provide option to try a question again */
	review: boolean;
	/** Action for a correct answer */
	nextpagedefault: number;
	/** Display default feedback */
	feedback: boolean;
	/** Minimum number of questions */
	minquestions: number;
	/** Number of pages to show */
	maxpages: number;
	/** Time limit */
	timelimit: number;
	/** Re-takes allowed */
	retake: boolean;
	/** Id of the next activity to be linked once the lesson is completed */
	activitylink: number;
	/** Local file path or full external URL */
	mediafile: string;
	/** Popup for media file height */
	mediaheight: number;
	/** Popup for media with */
	mediawidth: number;
	/** Display a close button in the popup? */
	mediaclose: number;
	/** Display lesson as slideshow */
	slideshow: boolean;
	/** Slideshow width */
	width: number;
	/** Slideshow height */
	height: number;
	/** Slideshow bgcolor */
	bgcolor: string;
	/** Display left pages menu? */
	displayleft: boolean;
	/** Minimum grade to display menu */
	displayleftif: number;
	/** Display progress bar? */
	progressbar: boolean;
	/** Available from */
	available: number;
	/** Available until */
	deadline: number;
	/** Last time settings were updated */
	timemodified: number;
	/** Require end reached for completion? */
	completionendreached: number;
	/** Student must do this activity at least for */
	completiontimespent: number;
	/** Whether to allow the lesson to be attempted offline in the mobile app */
	allowofflineattempts: boolean;
	/** introfiles */
	introfiles: ReturnsLessonIntrofiles;
	/** mediafiles */
	mediafiles: ReturnsLessonMediafiles;
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
	lesson: ReturnsLesson;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
