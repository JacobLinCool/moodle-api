export interface Params {
	/** Workshop instance id. */
	workshopid: number | null;
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
	/** Is the given user allowed to create their submission? */
	creatingsubmissionallowed: boolean | null;
	/** Is the user allowed to modify his existing submission? */
	modifyingsubmissionallowed: boolean | null;
	/** Is the user allowed to create/edit his assessments? */
	assessingallowed: boolean | null;
	/** Are reviewers allowed to create/edit their assessments of the example submissions?. */
	assessingexamplesallowed: boolean | null;
	/** Whether the given user has assessed all his required examples before submission (always true if there are not examples to assess or not configured to check before submission). */
	examplesassessedbeforesubmission: boolean | null;
	/** Whether the given user has assessed all his required examples before assessment (always true if there are not examples to assessor not configured to check before assessment). */
	examplesassessedbeforeassessment: boolean | null;
	/** list of warnings */
	warnings: ReturnsWarnings;
	/** Whether the user has the capability mod/workshop:view allowed. */
	canview: boolean | null;
	/** Whether the user has the capability mod/workshop:addinstance allowed. */
	canaddinstance: boolean | null;
	/** Whether the user has the capability mod/workshop:switchphase allowed. */
	canswitchphase: boolean | null;
	/** Whether the user has the capability mod/workshop:editdimensions allowed. */
	caneditdimensions: boolean | null;
	/** Whether the user has the capability mod/workshop:submit allowed. */
	cansubmit: boolean | null;
	/** Whether the user has the capability mod/workshop:peerassess allowed. */
	canpeerassess: boolean | null;
	/** Whether the user has the capability mod/workshop:manageexamples allowed. */
	canmanageexamples: boolean | null;
	/** Whether the user has the capability mod/workshop:allocate allowed. */
	canallocate: boolean | null;
	/** Whether the user has the capability mod/workshop:publishsubmissions allowed. */
	canpublishsubmissions: boolean | null;
	/** Whether the user has the capability mod/workshop:viewauthornames allowed. */
	canviewauthornames: boolean | null;
	/** Whether the user has the capability mod/workshop:viewreviewernames allowed. */
	canviewreviewernames: boolean | null;
	/** Whether the user has the capability mod/workshop:viewallsubmissions allowed. */
	canviewallsubmissions: boolean | null;
	/** Whether the user has the capability mod/workshop:viewpublishedsubmissions allowed. */
	canviewpublishedsubmissions: boolean | null;
	/** Whether the user has the capability mod/workshop:viewauthorpublished allowed. */
	canviewauthorpublished: boolean | null;
	/** Whether the user has the capability mod/workshop:viewallassessments allowed. */
	canviewallassessments: boolean | null;
	/** Whether the user has the capability mod/workshop:overridegrades allowed. */
	canoverridegrades: boolean | null;
	/** Whether the user has the capability mod/workshop:ignoredeadlines allowed. */
	canignoredeadlines: boolean | null;
	/** Whether the user has the capability mod/workshop:deletesubmissions allowed. */
	candeletesubmissions: boolean | null;
	/** Whether the user has the capability mod/workshop:exportsubmissions allowed. */
	canexportsubmissions: boolean | null;
}
