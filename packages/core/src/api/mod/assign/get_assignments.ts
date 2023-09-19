/**
 * 0 or more course ids
 */
export type ParamsCourseids = (number | null)[];

/**
 * list of capabilities used to filter courses
 */
export type ParamsCapabilities = (string | null)[];

export interface Params {
	/** 0 or more course ids */
	courseids?: ParamsCourseids;
	/** list of capabilities used to filter courses */
	capabilities?: ParamsCapabilities;
	/** whether to return courses that the user can see even if is not enroled in. This requires the parameter courseids to not be empty. */
	includenotenrolledcourses?: boolean | null;
}

/**
 * assignment configuration object
 */
export interface ReturnsCoursesItemAssignmentsItemConfigsItem {
	/** assign_plugin_config id */
	id: number | null;
	/** assignment id */
	assignment: number | null;
	/** plugin */
	plugin: string | null;
	/** subtype */
	subtype: string | null;
	/** name */
	name: string | null;
	/** value */
	value: string | null;
}

/**
 * configuration settings
 */
export type ReturnsCoursesItemAssignmentsItemConfigs =
	ReturnsCoursesItemAssignmentsItemConfigsItem[];

/**
 * File.
 */
export interface ReturnsCoursesItemAssignmentsItemIntrofilesItem {
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
 * Files in the introduction text
 */
export type ReturnsCoursesItemAssignmentsItemIntrofiles =
	ReturnsCoursesItemAssignmentsItemIntrofilesItem[];

/**
 * File.
 */
export interface ReturnsCoursesItemAssignmentsItemIntroattachmentsItem {
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
 * intro attachments files
 */
export type ReturnsCoursesItemAssignmentsItemIntroattachments =
	ReturnsCoursesItemAssignmentsItemIntroattachmentsItem[];

/**
 * File.
 */
export interface ReturnsCoursesItemAssignmentsItemActivityattachmentsItem {
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
 * Files from activity field
 */
export type ReturnsCoursesItemAssignmentsItemActivityattachments =
	ReturnsCoursesItemAssignmentsItemActivityattachmentsItem[];

/**
 * assignment information object
 */
export interface ReturnsCoursesItemAssignmentsItem {
	/** assignment id */
	id: number | null;
	/** course module id */
	cmid: number | null;
	/** course id */
	course: number | null;
	/** assignment name */
	name: string | null;
	/** no submissions */
	nosubmissions: number | null;
	/** submissions drafts */
	submissiondrafts: number | null;
	/** send notifications */
	sendnotifications: number | null;
	/** send notifications */
	sendlatenotifications: number | null;
	/** send student notifications (default) */
	sendstudentnotifications: number | null;
	/** assignment due date */
	duedate: number | null;
	/** allow submissions from date */
	allowsubmissionsfromdate: number | null;
	/** grade type */
	grade: number | null;
	/** last time assignment was modified */
	timemodified: number | null;
	/** if enabled, set activity as complete following submission */
	completionsubmit: number | null;
	/** date after which submission is not accepted without an extension */
	cutoffdate: number | null;
	/** the expected date for marking the submissions */
	gradingduedate: number | null;
	/** if enabled, students submit as a team */
	teamsubmission: number | null;
	/** if enabled, all team members must submit */
	requireallteammemberssubmit: number | null;
	/** the grouping id for the team submission groups */
	teamsubmissiongroupingid: number | null;
	/** if enabled, hide identities until reveal identities actioned */
	blindmarking: number | null;
	/** If enabled, hide grader to student */
	hidegrader: number | null;
	/** show identities for a blind marking assignment */
	revealidentities: number | null;
	/** method used to control opening new attempts */
	attemptreopenmethod: string | null;
	/** maximum number of attempts allowed */
	maxattempts: number | null;
	/** enable marking workflow */
	markingworkflow: number | null;
	/** enable marking allocation */
	markingallocation: number | null;
	/** student must accept submission statement */
	requiresubmissionstatement: number | null;
	/** Prevent submission not in group */
	preventsubmissionnotingroup: number | null;
	/** Submission statement formatted. */
	submissionstatement: string | null;
	/** submissionstatement format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	submissionstatementformat: number | null;
	/** configuration settings */
	configs: ReturnsCoursesItemAssignmentsItemConfigs;
	/** assignment intro, not allways returned because it deppends on the activity configuration */
	intro: string | null;
	/** intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	introformat: number | null;
	/** Files in the introduction text */
	introfiles: ReturnsCoursesItemAssignmentsItemIntrofiles;
	/** intro attachments files */
	introattachments: ReturnsCoursesItemAssignmentsItemIntroattachments;
	/** Description of activity */
	activity: string | null;
	/** activity format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	activityformat: number | null;
	/** Files from activity field */
	activityattachments: ReturnsCoursesItemAssignmentsItemActivityattachments;
	/** Time limit to complete assigment */
	timelimit: number | null;
	/** Flag to only show files during submission */
	submissionattachments: number | null;
}

/**
 * assignment info
 */
export type ReturnsCoursesItemAssignments = ReturnsCoursesItemAssignmentsItem[];

/**
 * course information object
 */
export interface ReturnsCoursesItem {
	/** course id */
	id: number | null;
	/** course full name */
	fullname: string | null;
	/** course short name */
	shortname: string | null;
	/** last time modified */
	timemodified: number | null;
	/** assignment info */
	assignments: ReturnsCoursesItemAssignments;
}

/**
 * list of courses
 */
export type ReturnsCourses = ReturnsCoursesItem[];

/**
 * warning
 */
export interface ReturnsWarningsItem {
	/** item can be 'course' (errorcode 1 or 2) or 'module' (errorcode 1) */
	item: string | null;
	/** When item is a course then itemid is a course id. When the item is a module then itemid is a module id */
	itemid: number | null;
	/** errorcode can be 1 (no access rights) or 2 (not enrolled or no permissions) */
	warningcode: string | null;
	/** untranslated english message to explain the warning */
	message: string | null;
}

/**
 * list of warnings
 */
export type ReturnsWarnings = ReturnsWarningsItem[];

export interface Returns {
	/** list of courses */
	courses: ReturnsCourses;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
