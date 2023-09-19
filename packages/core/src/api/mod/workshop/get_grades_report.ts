export interface Params {
	/** Workshop instance id. */
	workshopid: number | null;
	/** Group id, 0 means that the function will determine the user group. */
	groupid?: number | null;
	/** sort by this element: lastname, firstname, submissiontitle, submissionmodified, submissiongrade, gradinggrade. */
	sortby?: string | null;
	/** sort direction: ASC or DESC */
	sortdirection?: string | null;
	/** The page of records to return. */
	page?: number | null;
	/** The number of records to return per page. */
	perpage?: number | null;
}

export interface ReturnsReportGradesItemReviewedbyItem {
	/** The id of the user (0 when is configured to do not display names). */
	userid: number | null;
	/** The id of the assessment. */
	assessmentid: number | null;
	/** The id of the submission assessed. */
	submissionid: number | null;
	/** The grade for submission. */
	grade: number | null;
	/** The grade for assessment. */
	gradinggrade: number | null;
	/** The aggregated grade overrided. */
	gradinggradeover: number | null;
	/** The weight of the assessment for aggregation. */
	weight: number | null;
}

/**
 * The users who reviewed the
user submission.
 */
export type ReturnsReportGradesItemReviewedby = ReturnsReportGradesItemReviewedbyItem[];

export interface ReturnsReportGradesItemReviewerofItem {
	/** The id of the user (0 when is configured to do not display names). */
	userid: number | null;
	/** The id of the assessment. */
	assessmentid: number | null;
	/** The id of the submission assessed. */
	submissionid: number | null;
	/** The grade for submission. */
	grade: number | null;
	/** The grade for assessment. */
	gradinggrade: number | null;
	/** The aggregated grade overrided. */
	gradinggradeover: number | null;
	/** The weight of the assessment for aggregation. */
	weight: number | null;
}

/**
 * The assessments the user
reviewed.
 */
export type ReturnsReportGradesItemReviewerof = ReturnsReportGradesItemReviewerofItem[];

export interface ReturnsReportGradesItem {
	/** The id of the user being displayed in the report. */
	userid: number | null;
	/** Submission id. */
	submissionid: number | null;
	/** Submission title. */
	submissiontitle: string | null;
	/** Timestamp submission was updated. */
	submissionmodified: number | null;
	/** Aggregated grade for the submission. */
	submissiongrade: number | null;
	/** Computed grade for the assessment. */
	gradinggrade: number | null;
	/** Grade for the assessment overrided by the teacher. */
	submissiongradeover: number | null;
	/** The id of the user who overrided the grade. */
	submissiongradeoverby: number | null;
	/** Whether is a submission published. */
	submissionpublished: number | null;
	/** The users who reviewed the user submission. */
	reviewedby: ReturnsReportGradesItemReviewedby;
	/** The assessments the user reviewed. */
	reviewerof: ReturnsReportGradesItemReviewerof;
}

export type ReturnsReportGrades = ReturnsReportGradesItem[];

export interface ReturnsReport {
	grades: ReturnsReportGrades;
	/** Number of total submissions. */
	totalcount: number | null;
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
	report: ReturnsReport;
	/** list of warnings */
	warnings: ReturnsWarnings;
}
