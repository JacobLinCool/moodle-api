export interface Params {
	/** assignment instance id */
	assignid: number | null;
	/** user id (empty for current user) */
	userid?: number | null;
	/** filter by users in group (used for generating the grading summary). 0 for all groups information, any other empty value will calculate currrent group. */
	groupid?: number | null;
}

/**
 * Grading information.
 */
export interface ReturnsGradingsummary {
	/** Number of users who can submit. */
	participantcount: number | null;
	/** Number of submissions in draft status. */
	submissiondraftscount: number | null;
	/** Whether submissions are enabled or not. */
	submissionsenabled: boolean | null;
	/** Number of submissions in submitted status. */
	submissionssubmittedcount: number | null;
	/** Number of submissions that need grading. */
	submissionsneedgradingcount: number | null;
	/** Whether we need to warn people that there are users without groups ('warningrequired'), warn people there are users who will submit in the default group ('warningoptional') or no warning (''). */
	warnofungroupedusers: string | null;
}

/**
 * File.
 */
export interface ReturnsLastattemptSubmissionPluginsItemFileareasItemFilesItem {
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
 * files
 */
export type ReturnsLastattemptSubmissionPluginsItemFileareasItemFiles =
	ReturnsLastattemptSubmissionPluginsItemFileareasItemFilesItem[];

export interface ReturnsLastattemptSubmissionPluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsLastattemptSubmissionPluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsLastattemptSubmissionPluginsItemFileareas =
	ReturnsLastattemptSubmissionPluginsItemFileareasItem[];

export interface ReturnsLastattemptSubmissionPluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsLastattemptSubmissionPluginsItemEditorfields =
	ReturnsLastattemptSubmissionPluginsItemEditorfieldsItem[];

export interface ReturnsLastattemptSubmissionPluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsLastattemptSubmissionPluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsLastattemptSubmissionPluginsItemEditorfields;
}

/**
 * plugins
 */
export type ReturnsLastattemptSubmissionPlugins = ReturnsLastattemptSubmissionPluginsItem[];

/**
 * submission info
 */
export interface ReturnsLastattemptSubmission {
	/** submission id */
	id: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** submission creation time */
	timecreated: number | null;
	/** submission last modified time */
	timemodified: number | null;
	/** submission start time */
	timestarted: number | null;
	/** submission status */
	status: string | null;
	/** group id */
	groupid: number | null;
	/** assignment id */
	assignment: number | null;
	/** latest attempt */
	latest: number | null;
	/** plugins */
	plugins: ReturnsLastattemptSubmissionPlugins;
	/** Grading status. */
	gradingstatus: string | null;
}

/**
 * File.
 */
export interface ReturnsLastattemptTeamsubmissionPluginsItemFileareasItemFilesItem {
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
 * files
 */
export type ReturnsLastattemptTeamsubmissionPluginsItemFileareasItemFiles =
	ReturnsLastattemptTeamsubmissionPluginsItemFileareasItemFilesItem[];

export interface ReturnsLastattemptTeamsubmissionPluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsLastattemptTeamsubmissionPluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsLastattemptTeamsubmissionPluginsItemFileareas =
	ReturnsLastattemptTeamsubmissionPluginsItemFileareasItem[];

export interface ReturnsLastattemptTeamsubmissionPluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsLastattemptTeamsubmissionPluginsItemEditorfields =
	ReturnsLastattemptTeamsubmissionPluginsItemEditorfieldsItem[];

export interface ReturnsLastattemptTeamsubmissionPluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsLastattemptTeamsubmissionPluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsLastattemptTeamsubmissionPluginsItemEditorfields;
}

/**
 * plugins
 */
export type ReturnsLastattemptTeamsubmissionPlugins = ReturnsLastattemptTeamsubmissionPluginsItem[];

/**
 * submission info
 */
export interface ReturnsLastattemptTeamsubmission {
	/** submission id */
	id: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** submission creation time */
	timecreated: number | null;
	/** submission last modified time */
	timemodified: number | null;
	/** submission start time */
	timestarted: number | null;
	/** submission status */
	status: string | null;
	/** group id */
	groupid: number | null;
	/** assignment id */
	assignment: number | null;
	/** latest attempt */
	latest: number | null;
	/** plugins */
	plugins: ReturnsLastattemptTeamsubmissionPlugins;
	/** Grading status. */
	gradingstatus: string | null;
}

/**
 * List of users who still need to submit (for group submissions only).
 */
export type ReturnsLastattemptSubmissiongroupmemberswhoneedtosubmit = (number | null)[];

/**
 * User groups in the course.
 */
export type ReturnsLastattemptUsergroups = (number | null)[];

/**
 * Last attempt information.
 */
export interface ReturnsLastattempt {
	/** submission info */
	submission: ReturnsLastattemptSubmission;
	/** submission info */
	teamsubmission: ReturnsLastattemptTeamsubmission;
	/** The submission group id (for group submissions only). */
	submissiongroup: number | null;
	/** List of users who still need to submit (for group submissions only). */
	submissiongroupmemberswhoneedtosubmit: ReturnsLastattemptSubmissiongroupmemberswhoneedtosubmit;
	/** Whether submissions are enabled or not. */
	submissionsenabled: boolean | null;
	/** Whether new submissions are locked. */
	locked: boolean | null;
	/** Whether the submission is graded. */
	graded: boolean | null;
	/** Whether the user can edit the current submission. */
	canedit: boolean | null;
	/** Whether the owner of the submission can edit it. */
	caneditowner: boolean | null;
	/** Whether the user can submit. */
	cansubmit: boolean | null;
	/** Extension due date. */
	extensionduedate: number | null;
	/** Time limit for submission. */
	timelimit: number | null;
	/** Whether blind marking is enabled. */
	blindmarking: boolean | null;
	/** Grading status. */
	gradingstatus: string | null;
	/** User groups in the course. */
	usergroups: ReturnsLastattemptUsergroups;
}

/**
 * grade information
 */
export interface ReturnsFeedbackGrade {
	/** grade id */
	id: number | null;
	/** assignment id */
	assignment: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** grade creation time */
	timecreated: number | null;
	/** grade last modified time */
	timemodified: number | null;
	/** grader, -1 if grader is hidden */
	grader: number | null;
	/** grade */
	grade: string | null;
	/** grade rendered into a format suitable for display */
	gradefordisplay: string | null;
}

/**
 * File.
 */
export interface ReturnsFeedbackPluginsItemFileareasItemFilesItem {
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
 * files
 */
export type ReturnsFeedbackPluginsItemFileareasItemFiles =
	ReturnsFeedbackPluginsItemFileareasItemFilesItem[];

export interface ReturnsFeedbackPluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsFeedbackPluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsFeedbackPluginsItemFileareas = ReturnsFeedbackPluginsItemFileareasItem[];

export interface ReturnsFeedbackPluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsFeedbackPluginsItemEditorfields = ReturnsFeedbackPluginsItemEditorfieldsItem[];

export interface ReturnsFeedbackPluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsFeedbackPluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsFeedbackPluginsItemEditorfields;
}

/**
 * Plugins info.
 */
export type ReturnsFeedbackPlugins = ReturnsFeedbackPluginsItem[];

/**
 * Feedback for the last attempt.
 */
export interface ReturnsFeedback {
	/** grade information */
	grade: ReturnsFeedbackGrade;
	/** Grade rendered into a format suitable for display. */
	gradefordisplay: string | null;
	/** The date the user was graded. */
	gradeddate: number | null;
	/** Plugins info. */
	plugins: ReturnsFeedbackPlugins;
}

/**
 * File.
 */
export interface ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItemFilesItem {
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
 * files
 */
export type ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItemFiles =
	ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItemFilesItem[];

export interface ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsPreviousattemptsItemSubmissionPluginsItemFileareas =
	ReturnsPreviousattemptsItemSubmissionPluginsItemFileareasItem[];

export interface ReturnsPreviousattemptsItemSubmissionPluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsPreviousattemptsItemSubmissionPluginsItemEditorfields =
	ReturnsPreviousattemptsItemSubmissionPluginsItemEditorfieldsItem[];

export interface ReturnsPreviousattemptsItemSubmissionPluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsPreviousattemptsItemSubmissionPluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsPreviousattemptsItemSubmissionPluginsItemEditorfields;
}

/**
 * plugins
 */
export type ReturnsPreviousattemptsItemSubmissionPlugins =
	ReturnsPreviousattemptsItemSubmissionPluginsItem[];

/**
 * submission info
 */
export interface ReturnsPreviousattemptsItemSubmission {
	/** submission id */
	id: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** submission creation time */
	timecreated: number | null;
	/** submission last modified time */
	timemodified: number | null;
	/** submission start time */
	timestarted: number | null;
	/** submission status */
	status: string | null;
	/** group id */
	groupid: number | null;
	/** assignment id */
	assignment: number | null;
	/** latest attempt */
	latest: number | null;
	/** plugins */
	plugins: ReturnsPreviousattemptsItemSubmissionPlugins;
	/** Grading status. */
	gradingstatus: string | null;
}

/**
 * grade information
 */
export interface ReturnsPreviousattemptsItemGrade {
	/** grade id */
	id: number | null;
	/** assignment id */
	assignment: number | null;
	/** student id */
	userid: number | null;
	/** attempt number */
	attemptnumber: number | null;
	/** grade creation time */
	timecreated: number | null;
	/** grade last modified time */
	timemodified: number | null;
	/** grader, -1 if grader is hidden */
	grader: number | null;
	/** grade */
	grade: string | null;
	/** grade rendered into a format suitable for display */
	gradefordisplay: string | null;
}

/**
 * File.
 */
export interface ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItemFilesItem {
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
 * files
 */
export type ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItemFiles =
	ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItemFilesItem[];

export interface ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItem {
	/** file area */
	area: string | null;
	/** files */
	files: ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItemFiles;
}

/**
 * fileareas
 */
export type ReturnsPreviousattemptsItemFeedbackpluginsItemFileareas =
	ReturnsPreviousattemptsItemFeedbackpluginsItemFileareasItem[];

export interface ReturnsPreviousattemptsItemFeedbackpluginsItemEditorfieldsItem {
	/** field name */
	name: string | null;
	/** field description */
	description: string | null;
	/** field value */
	text: string | null;
	/** text format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	format: number | null;
}

/**
 * editorfields
 */
export type ReturnsPreviousattemptsItemFeedbackpluginsItemEditorfields =
	ReturnsPreviousattemptsItemFeedbackpluginsItemEditorfieldsItem[];

export interface ReturnsPreviousattemptsItemFeedbackpluginsItem {
	/** submission plugin type */
	type: string | null;
	/** submission plugin name */
	name: string | null;
	/** fileareas */
	fileareas: ReturnsPreviousattemptsItemFeedbackpluginsItemFileareas;
	/** editorfields */
	editorfields: ReturnsPreviousattemptsItemFeedbackpluginsItemEditorfields;
}

/**
 * Feedback info.
 */
export type ReturnsPreviousattemptsItemFeedbackplugins =
	ReturnsPreviousattemptsItemFeedbackpluginsItem[];

export interface ReturnsPreviousattemptsItem {
	/** Attempt number. */
	attemptnumber: number | null;
	/** submission info */
	submission: ReturnsPreviousattemptsItemSubmission;
	/** grade information */
	grade: ReturnsPreviousattemptsItemGrade;
	/** Feedback info. */
	feedbackplugins: ReturnsPreviousattemptsItemFeedbackplugins;
}

/**
 * List all the previous attempts did by the user.
 */
export type ReturnsPreviousattempts = ReturnsPreviousattemptsItem[];

/**
 * File.
 */
export interface ReturnsAssignmentdataAttachmentsIntroItem {
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
 * Intro attachments files
 */
export type ReturnsAssignmentdataAttachmentsIntro = ReturnsAssignmentdataAttachmentsIntroItem[];

/**
 * File.
 */
export interface ReturnsAssignmentdataAttachmentsActivityItem {
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
 * Activity attachments files
 */
export type ReturnsAssignmentdataAttachmentsActivity =
	ReturnsAssignmentdataAttachmentsActivityItem[];

/**
 * Intro and activity attachments
 */
export interface ReturnsAssignmentdataAttachments {
	/** Intro attachments files */
	intro: ReturnsAssignmentdataAttachmentsIntro;
	/** Activity attachments files */
	activity: ReturnsAssignmentdataAttachmentsActivity;
}

/**
 * Extra information about assignment
 */
export interface ReturnsAssignmentdata {
	/** Intro and activity attachments */
	attachments: ReturnsAssignmentdataAttachments;
	/** Text of activity */
	activity: string | null;
	/** activity format (1 = HTML, 0 = MOODLE, 2 = PLAIN, or 4 = MARKDOWN */
	activityformat: number | null;
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
	/** Grading information. */
	gradingsummary: ReturnsGradingsummary;
	/** Last attempt information. */
	lastattempt: ReturnsLastattempt;
	/** Feedback for the last attempt. */
	feedback: ReturnsFeedback;
	/** List all the previous attempts did by the user. */
	previousattempts: ReturnsPreviousattempts;
	/** Extra information about assignment */
	assignmentdata: ReturnsAssignmentdata;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
